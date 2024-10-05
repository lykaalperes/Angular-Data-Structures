import { Component } from '@angular/core';

// Define the Tool interface with an additional property for tracking used count
interface Tool {
  name: string;
  used: number; // New property to track how many tools are used
}

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css'],
})
export class ToolListComponent {
  // Initialize tools with name and used count
  tools: Tool[] = [
    { name: 'Hammer', used: 0 },
    { name: 'Screwdriver', used: 0 },
    { name: 'Wrench', used: 0 },
  ];

  newTool: Tool = { name: '', used: 0 }; // Updated newTool to include used count

  // Function to add a new tool
  addTool() {
    if (this.newTool.name) {
      this.tools.push({ ...this.newTool });
      this.newTool = { name: '', used: 0 }; // Reset form
    }
  }

  // Function to remove a tool from the list
  removeTool(name: string) {
    this.tools = this.tools.filter(tool => tool.name !== name);
  }

  // Function to increase the used count of a tool
  useTool(name: string) {
    const tool = this.tools.find(t => t.name === name);
    if (tool) {
      tool.used++; // Increment used count
    }
  }
}
