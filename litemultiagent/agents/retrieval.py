from typing import Any, Optional

from litemultiagent.agents.base import Agent
from litemultiagent.agents.manager import AgentManager, AgentType
from litemultiagent.utils.tools import Tools


class Retrieval_Agent(Agent):
    def __init__(self, meta_task_id: Optional[str] = None, task_id: Optional[int] = None):
        self.manager = AgentManager()

        available_tools = {
            "scan_folder": scan_folder,
            "use_db_retrieval_agent": lambda description: self.manager.use_agent(AgentType.RETRIEVE_DB, description, meta_task_id=meta_task_id, task_id=task_id),
            "use_web_retrieval_agent": lambda description: self.manager.use_agent(AgentType.RETRIEVE_WEB, description, meta_task_id=meta_task_id, task_id=task_id),
            "use_file_retrieve_agent": lambda description: self.manager.use_agent(AgentType.RETRIEVE_FILE, description, meta_task_id=meta_task_id, task_id=task_id),
        }

        super().__init__("main_agent", Tools._demo, available_tools, meta_task_id, task_id)

