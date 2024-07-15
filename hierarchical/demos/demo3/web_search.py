import logging
from dotenv import load_dotenv
from openai import OpenAI
import subprocess
from typing import Any
from pydantic import BaseModel, validator
import requests
import os
from multion.client import MultiOn
import json
_ = load_dotenv()
# Initialize logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)
from langchain_community.tools.tavily_search import TavilySearchResults

def tavily_search(query):
    tool = TavilySearchResults(max_results=4)
    results = tool.invoke({"query": query})
    return results


def multion_search(query, url):
    multion = MultiOn(api_key=os.getenv('MULTION_API_KEY'))
    browse = multion.browse(
        cmd=query,
        url=url
    )
    print("Browse response:", browse)
    print(browse.message)
    return browse.message



tools = [
    {
        "type": "function",
        "function": {
            "name": "tavily_search",
            "description": "Perform a search using the TavilySearch API and return the results.",
            "parameters": {
                "type": "object",
                "properties": {
                    "query": {
                        "type": "string",
                        "description": "The search query to be sent to the TavilySearch API."
                    }
                },
                "required": [
                    "query"
                ]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "multion_search",
            "description": "For complicated search that require browsing/ scrolling down behavior, use multion api and return the results.",
            "parameters": {
                "type": "object",
                "properties": {
                    "query": {
                        "type": "string",
                        "description": "The search query to be sent to the multion API."
                    },
                    "url":{
                        "type": "string",
                        "description": "The website where multion api starts the browsing activity."
                    }
                },
                "required": [
                    "query",
                    "url"
                ]
            }
        }
    },
]

client = OpenAI()




class Message(BaseModel):
    role: str
    content: str
    tool_calls: list[Any] | None = None




class Function(BaseModel):
    arguments: str
    name: str


class ToolCall(BaseModel):
    id: str
    function: Function | dict
    type: str

    @validator("function", pre=True)
    @classmethod
    def ensure_function_dict(cls, v):
        return v if isinstance(v, dict) else v.dict()


class ToolCallMessage(BaseModel):
    content: str | None = None
    role: str
    tool_calls: list[ToolCall]


class ToolResponseMessage(BaseModel):
    tool_call_id: str
    role: str
    name: str
    content: str

from typing import Optional
from pydantic import BaseModel, field_validator
class AssistantMessage(BaseModel):
    role: str
    content: str | None = None
    name: str | None = None
    """An optional name for the participant.

    Provides the model information to differentiate between participants of the same
    role.
    """
    tool_calls: Optional[list[ToolCall]] = []  # if it's None, assign empty list
    """The tool calls generated by the model, such as function calls."""

    @field_validator("role", mode="before")
    def check_role(cls, value):
        if value not in ["assistant"]:
            raise ValueError('Role must be "assistant"')
        return value

available_tools = {
            "tavily_search": tavily_search,
            "multion_search": multion_search
        }
def process_tool_calls(tool_calls):
    tool_call_responses: list[str] = []
    for _index, tool_call in enumerate(tool_calls):
        tool_call_id = tool_call.id
        function_name = tool_call.function.name
        function_args = json.loads(tool_call.function.arguments)

        function_to_call = available_tools.get(function_name)

        function_response: str | None = None
        try:
            function_response = function_to_call(**function_args)
            tool_response_message = ToolResponseMessage(
                tool_call_id=tool_call_id,
                role="tool",
                name=function_name,
                content=str(function_response),
            )
            #print(_index, tool_response_message)
            tool_call_responses.append(tool_response_message)
        except Exception as e:
            function_response = f"Error while calling function <{function_name}>: {e}"

    return tool_call_responses


def send_completion_request(messages: list = None, tools: list = None, depth = 0) -> dict:
    if depth >= 8:
        return None

    if tools is None:
        response = client.chat.completions.create(
            model="gpt-4o", messages=messages
        )
        logger.info('depth: %s, response: %s', depth, response)
        # message = AssistantMessage(**response.choices[0].message.model_dump())
        message = AssistantMessage(**response.choices[0].message.model_dump())
        messages.append(message)
        return response

    response = client.chat.completions.create(
        model="gpt-4o", messages=messages, tools=tools, tool_choice="auto"
    )

    tool_calls = response.choices[0].message.tool_calls
    if tool_calls is None:
        logger.info('depth: %s, response: %s', depth, response)
        message = AssistantMessage(**response.choices[0].message.model_dump())
        messages.append(message)
        return response

    logger.info('depth: %s, response: %s', depth, response)
    tool_calls = [
        ToolCall(id=call.id, function=call.function, type=call.type)
        for call in response.choices[0].message.tool_calls
    ]
    tool_call_message = ToolCallMessage(
        content=response.choices[0].message.content, role=response.choices[0].message.role, tool_calls=tool_calls
    )

    messages.append(tool_call_message)
    tool_responses = process_tool_calls(tool_calls)
    messages.extend(tool_responses)
    return send_completion_request(messages, tools, depth + 1)


def send_prompt(messages, content: str):
    messages.append(Message(role="user", content=content))
    return send_completion_request(messages, tools, 0)






def use_search_agent(query):
    messages = [Message(role="system",
                        content="You are a smart research assistant. Use the search engine to look up information.")]
    send_prompt(messages, query)
    return messages[-1].content

messages = use_search_agent("Fetch the UK's GDP over the past 5 years")
print(messages)


messages = use_search_agent("browse amazon.com to check the brands of dining table and summarize the results in a table")
print(messages)


messages = use_search_agent("browse google.com to check the brands of dining table and summarize the results in a table")
print(messages)
