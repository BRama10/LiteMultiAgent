import networkx as nx
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
import time
import random

class Agent:
    def __init__(self, agent_id, parent=None):
        self.id = agent_id
        self.parent = parent
        self.children = []

    def add_child(self, child):
        self.children.append(child)

class AgentHierarchyVisualizer:
    def __init__(self):
        self.agents = []
        self.G = nx.DiGraph()
        self.fig, self.ax = plt.subplots(figsize=(10, 8))
        self.pos = {}

    def add_agent(self, agent_id, parent_id=None):
        parent = next((a for a in self.agents if a.id == parent_id), None) if parent_id else None
        new_agent = Agent(agent_id, parent)
        if parent:
            parent.add_child(new_agent)
        self.agents.append(new_agent)
        self.update_graph()

    def update_graph(self):
        self.G.clear()
        for agent in self.agents:
            self.G.add_node(agent.id)
            if agent.parent:
                self.G.add_edge(agent.parent.id, agent.id)

        self.pos = nx.spring_layout(self.G, k=0.9, iterations=50)

    def update_plot(self, frame):
        self.ax.clear()
        nx.draw(self.G, self.pos, ax=self.ax, with_labels=True, node_color='lightblue', 
                node_size=1000, font_size=8, font_weight='bold', arrows=True)
        self.ax.set_title("Agent Hierarchy Visualization")

    def visualize(self):
        ani = FuncAnimation(self.fig, self.update_plot, frames=100, interval=500, repeat=True)
        plt.show()

    def simulate_agent_execution(self):
        agent_ids = list(range(1, 11))  # Simulating 10 agents
        while agent_ids:
            time.sleep(random.uniform(0.5, 2))  # Simulate processing time
            new_agent = agent_ids.pop(0)
            parent = random.choice(self.agents) if self.agents else None
            parent_id = parent.id if parent else None
            print(f"Adding Agent {new_agent} with parent {parent_id}")
            self.add_agent(new_agent, parent_id)

# Usage
visualizer = AgentHierarchyVisualizer()

# Start the visualization in a separate thread
import threading
threading.Thread(target=visualizer.visualize, daemon=True).start()

# Simulate agent execution
visualizer.simulate_agent_execution()