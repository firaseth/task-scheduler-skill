#!/usr/bin/env node

/**
 * Task Template Generator
 * 
 * Generates blank task schedule templates in various formats
 * 
 * Usage:
 *   node task_template_generator.cjs --type [simple|project|kanban|timesheet] --format [md|csv|json]
 * 
 * Examples:
 *   node task_template_generator.cjs --type simple --format md
 *   node task_template_generator.cjs --type project --format csv
 *   node task_template_generator.cjs --type kanban --format json
 */

const fs = require('fs');
const path = require('path');

// Template generators
const templates = {
  simple: {
    md: () => `# Task List

**Created:** ${new Date().toISOString().split('T')[0]}
**Status:** Not Started

## High Priority
- [ ] Task 1
- [ ] Task 2

## Medium Priority
- [ ] Task 3
- [ ] Task 4

## Low Priority
- [ ] Task 5
`,
    csv: () => `Task ID,Task Name,Priority,Status,Owner,Due Date,Notes
1,Task 1,High,Not Started,,,
2,Task 2,High,Not Started,,,
3,Task 3,Medium,Not Started,,,
4,Task 4,Medium,Not Started,,,
5,Task 5,Low,Not Started,,,
`,
    json: () => JSON.stringify({
      metadata: {
        created: new Date().toISOString(),
        type: "simple-task-list",
        version: "1.0"
      },
      tasks: [
        { id: 1, name: "Task 1", priority: "High", status: "Not Started", owner: "", dueDate: "", notes: "" },
        { id: 2, name: "Task 2", priority: "High", status: "Not Started", owner: "", dueDate: "", notes: "" },
        { id: 3, name: "Task 3", priority: "Medium", status: "Not Started", owner: "", dueDate: "", notes: "" },
        { id: 4, name: "Task 4", priority: "Medium", status: "Not Started", owner: "", dueDate: "", notes: "" },
        { id: 5, name: "Task 5", priority: "Low", status: "Not Started", owner: "", dueDate: "", notes: "" }
      ]
    }, null, 2)
  },
  
  project: {
    csv: () => `Task ID,Task Name,Category,Priority,Status,Owner,Start Date,Due Date,Est Hours,Act Hours,Progress %,Dependencies,Notes
T001,Project Planning,Planning,P0,Not Started,,,,,0,,
T002,Requirements Gathering,Planning,P0,Not Started,,,,,0,T001,
T003,Design Phase,Design,P1,Not Started,,,,,0,T002,
T004,Development Phase 1,Development,P1,Not Started,,,,,0,T003,
T005,Development Phase 2,Development,P1,Not Started,,,,,0,T004,
T006,Testing,QA,P1,Not Started,,,,,0,T005,
T007,Deployment,Operations,P0,Not Started,,,,,0,T006,
`,
    json: () => JSON.stringify({
      metadata: {
        created: new Date().toISOString(),
        type: "project-tracker",
        version: "1.0"
      },
      project: {
        name: "New Project",
        startDate: "",
        endDate: "",
        status: "Planning"
      },
      tasks: [
        { id: "T001", name: "Project Planning", category: "Planning", priority: "P0", status: "Not Started", owner: "", startDate: "", dueDate: "", estimatedHours: 0, actualHours: 0, progress: 0, dependencies: [], notes: "" },
        { id: "T002", name: "Requirements Gathering", category: "Planning", priority: "P0", status: "Not Started", owner: "", startDate: "", dueDate: "", estimatedHours: 0, actualHours: 0, progress: 0, dependencies: ["T001"], notes: "" }
      ]
    }, null, 2)
  },
  
  kanban: {
    json: () => JSON.stringify({
      metadata: {
        created: new Date().toISOString(),
        type: "kanban-board",
        version: "1.0"
      },
      columns: [
        { id: "backlog", name: "Backlog", wipLimit: null, tasks: [] },
        { id: "todo", name: "To Do", wipLimit: 5, tasks: [] },
        { id: "in-progress", name: "In Progress", wipLimit: 3, tasks: [] },
        { id: "review", name: "Review", wipLimit: 2, tasks: [] },
        { id: "done", name: "Done", wipLimit: null, tasks: [] }
      ],
      tasks: [
        { id: "K001", title: "Sample Task", description: "", assignee: "", priority: "Medium", column: "backlog", tags: [] }
      ]
    }, null, 2)
  },
  
  timesheet: {
    csv: () => `Date,Client,Project,Task,Start Time,End Time,Hours,Rate,Total,Notes
${new Date().toISOString().split('T')[0]},,,,,,,,,
`,
    json: () => JSON.stringify({
      metadata: {
        created: new Date().toISOString(),
        type: "timesheet",
        version: "1.0",
        weekOf: new Date().toISOString().split('T')[0]
      },
      entries: [
        {
          date: new Date().toISOString().split('T')[0],
          client: "",
          project: "",
          task: "",
          startTime: "09:00",
          endTime: "17:00",
          hours: 8,
          rate: 0,
          total: 0,
          notes: ""
        }
      ],
      summary: {
        totalHours: 0,
        totalBilled: 0
      }
    }, null, 2)
  }
};

// Parse command line arguments
const args = process.argv.slice(2);
const getArg = (name) => {
  const index = args.indexOf(`--${name}`);
  return index !== -1 ? args[index + 1] : null;
};

const type = getArg('type') || 'simple';
const format = getArg('format') || 'md';
const output = getArg('output') || `task_template_${type}.${format}`;

// Validate arguments
if (!templates[type]) {
  console.error(`Error: Unknown template type '${type}'`);
  console.error(`Available types: ${Object.keys(templates).join(', ')}`);
  process.exit(1);
}

if (!templates[type][format]) {
  console.error(`Error: Format '${format}' not available for type '${type}'`);
  console.error(`Available formats for ${type}: ${Object.keys(templates[type]).join(', ')}`);
  process.exit(1);
}

// Generate template
try {
  const content = templates[type][format]();
  fs.writeFileSync(output, content);
  console.log(`✅ Template generated: ${output}`);
  console.log(`   Type: ${type}`);
  console.log(`   Format: ${format}`);
} catch (error) {
  console.error(`❌ Error generating template: ${error.message}`);
  process.exit(1);
}
