# Task Scheduler Skill

A comprehensive skill for creating, managing, and exporting professional task schedules, to-do lists, project timelines, and time-tracking systems.

## 🎯 Overview

This skill enables AI assistants (like Claude) to create structured task management documents in various formats including Excel, Word, Markdown, PDF, and CSV. It provides frameworks for task organization, prioritization, and time management.

## ✨ Features

- **Multiple Template Types**: From simple to-do lists to complex project timelines
- **Smart Format Selection**: Automatically chooses the best format based on task complexity
- **Priority Frameworks**: Built-in Eisenhower Matrix and priority systems
- **Time Tracking**: Templates with hour calculations and billing
- **Visual Timelines**: Gantt-style charts and Kanban boards
- **Team Collaboration**: Multi-assignee tracking and resource allocation
- **Dependency Management**: Track task dependencies and blockers

## 📋 When to Use

This skill triggers when users request:

- Task lists or to-dos
- Project schedules and timelines
- Weekly/daily planners
- Time blocking templates
- Work breakdown structures
- Timesheets and time tracking
- Calendar planning
- Deadline tracking
- Agile sprint planning
- Event planning timelines

## 🚀 Quick Start

### Installation

1. Copy `SKILL.md` to your skills directory
2. Reference the skill in your AI assistant's configuration
3. (Optional) Copy templates from `/templates` directory for quick access

### Basic Usage Examples

**Simple To-Do List:**
```
User: "Create a to-do list for my tasks this week"
→ Generates: Markdown checklist with priorities
```

**Project Timeline:**
```
User: "Build a 3-month project schedule with milestones"
→ Generates: Excel workbook with timeline and Gantt chart
```

**Team Task Tracker:**
```
User: "Create a task tracker for my 5-person team"
→ Generates: Excel with assignments and progress tracking
```

## 📁 What's Included

```
task-scheduler-skill/
├── SKILL.md                    # Main skill documentation
├── README.md                   # This file
├── LICENSE                     # MIT License
├── templates/                  # Ready-to-use templates
│   ├── simple_todo.md
│   ├── weekly_planner.xlsx
│   ├── project_tracker.xlsx
│   ├── timesheet.xlsx
│   └── sprint_board.xlsx
├── scripts/                    # Utility scripts
│   ├── task_template_generator.cjs
│   ├── csv_to_calendar.cjs
│   └── gantt_generator.cjs
├── references/                 # Additional documentation
│   ├── project_management_methodologies.md
│   ├── time_estimation_guide.md
│   └── sample_task_lists.md
└── docs/                       # Extended documentation
    ├── EXAMPLES.md
    └── BEST_PRACTICES.md
```

## 🎨 Template Types

### 1. Simple Lists (Markdown)
- Personal to-dos
- Quick checklists
- 1-15 tasks
- No complex dependencies

### 2. Project Trackers (Excel)
- 15+ tasks
- Multiple phases
- Team assignments
- Progress tracking
- Resource allocation

### 3. Time-Based Schedules
- Daily/weekly planners
- Calendar views
- Time blocking
- Recurring patterns

### 4. Time Tracking (Excel)
- Billable hours
- Timesheets
- Project time logging
- Automatic calculations

### 5. Visual Boards
- Kanban layouts
- Gantt charts
- Timeline views
- Milestone tracking

## 🔧 Customization

The skill uses a decision tree workflow to match user requests to appropriate templates:

```
Simple request (< 20 tasks) → Markdown
Complex project → Multi-sheet Excel
Time-based → Calendar format
Team-based → Shared tracker
Recurring → Schedule template
```

You can customize:
- Priority levels and labels
- Status categories
- Task attributes/fields
- Date formats
- Color coding schemes
- Formula calculations

## 📖 Core Concepts

### Priority Matrix (Eisenhower Matrix)

| Level | Urgency | Importance | Action |
|-------|---------|------------|--------|
| P0 | High | High | Do immediately |
| P1 | Low | High | Schedule time |
| P2 | High | Low | Delegate/quick action |
| P3 | Low | Low | Eliminate/defer |

### Task Attributes

**Essential:**
- Task ID, Name, Status, Priority, Due Date, Owner

**Optional:**
- Start Date, Duration, Actual Hours, Dependencies, Tags, Notes, % Complete

### Status Categories

- 📋 Not Started
- 🔄 In Progress  
- ✅ Completed
- 🔴 Blocked
- ⏸️ On Hold
- ❌ Cancelled

## 💡 Use Cases

### Personal Productivity
- Daily to-do lists
- Weekly planning
- Goal tracking
- Habit tracking

### Software Development
- Sprint planning
- Bug tracking
- Feature backlogs
- Release timelines

### Event Planning
- Wedding planning
- Conference organization
- Party checklists
- Vendor management

### Content Creation
- Editorial calendars
- Social media schedules
- Publishing timelines
- Campaign planning

### Business Operations
- Project management
- Resource allocation
- Deadline tracking
- Client deliverables

## 🎓 Best Practices

**DO:**
- ✅ Use actionable task descriptions (start with verbs)
- ✅ Include realistic time estimates
- ✅ Assign clear owners/assignees
- ✅ Add due dates for accountability
- ✅ Use consistent date formats (YYYY-MM-DD)
- ✅ Color-code purposefully
- ✅ Leave space for notes

**DON'T:**
- ❌ Create overly complex templates for simple needs
- ❌ Use vague descriptions
- ❌ Mix date formats
- ❌ Create unrealistic timelines
- ❌ Use too many priority levels (3-4 max)
- ❌ Forget to update status

## 🔗 Integration

Works well with other skills:
- **Excel/XLSX skills**: Advanced spreadsheet features
- **Docx skills**: Formatted reports with task lists
- **PDF skills**: Read-only schedule distribution
- **Calendar systems**: Export to .ics format

## 📊 Format Selection Guide

| Format | Best For | When to Use |
|--------|----------|-------------|
| Markdown | Simple lists, personal use | < 20 tasks, text sharing |
| Excel | Complex projects, calculations | 20+ tasks, team use, analysis |
| Word/PDF | Formal documentation | Printing, exec summaries |
| CSV | Data import/export | System integration |

## 🤝 Contributing

Contributions are welcome! Areas for improvement:

- Additional template types
- More utility scripts
- Industry-specific examples
- Integration with project management tools
- Automated reporting features

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🆘 Support

For issues, questions, or suggestions:
- Open an issue in the repository
- Check the `/docs` folder for extended documentation
- Review `/references` for methodology guides

## 🔄 Version History

**v1.0.0** (2025-02-03)
- Initial release
- Core task management templates
- Priority and status frameworks
- Multi-format support
- Basic utility scripts

## 🙏 Acknowledgments

Built for use with Claude and other AI assistants to streamline task management and project planning workflows.

---

**Made with ❤️ for better task management**
