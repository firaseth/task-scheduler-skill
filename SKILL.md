---
name: task-scheduler
description: Create, manage, and export task schedules, to-do lists, project timelines, and time-tracking documents. Use when users want to organize tasks, create schedules, plan projects, track time, or need calendar-based deliverables in formats like Excel, CSV, or documents.
---

# Task Scheduler

## Overview

This skill enables Claude to create professional task schedules, to-do lists, project timelines, and time-tracking systems. It provides structured approaches for task organization, prioritization frameworks, and export capabilities to common formats (Excel, CSV, Word, PDF).

## When to Use This Skill

Trigger this skill when users request:
- **Task lists or to-dos**: "create a to-do list", "organize my tasks", "make a checklist"
- **Project schedules**: "project timeline", "Gantt chart", "milestone tracker"
- **Time management**: "weekly schedule", "daily planner", "time blocking template"
- **Work breakdown**: "break down this project into tasks", "create subtasks"
- **Time tracking**: "timesheet template", "track hours", "log time spent"
- **Calendar planning**: "monthly calendar", "meeting schedule", "agenda"
- **Deadline tracking**: "track deadlines", "due date tracker"

## Workflow Decision Tree

```
User Request
    │
    ├─ Simple list (< 20 items, single category)
    │   â†' Create Markdown or simple document
    │   â†' Use Basic Task List format
    │
    ├─ Complex project (multiple phases, dependencies)
    │   â†' Create Excel workbook with multiple sheets
    │   â†' Use Project Timeline with Gantt-style layout
    │
    ├─ Recurring schedule (daily/weekly patterns)
    │   â†' Create structured calendar format
    │   â†' Use Time-Based Schedule template
    │
    ├─ Team collaboration (multiple assignees)
    │   â†' Create shared tracking document
    │   â†' Use Team Task Tracker with assignments
    │
    └─ Time tracking (hours, billing)
        â†' Create timesheet with calculations
        â†' Use Time Tracking Template
```

## Core Task Organization Frameworks

### 1. Priority Matrix (Eisenhower Matrix)

Organize tasks by urgency and importance:

| Priority Level | Description | Action |
|---------------|-------------|---------|
| P0 - Critical | Urgent + Important | Do immediately |
| P1 - High | Important, not urgent | Schedule dedicated time |
| P2 - Medium | Urgent, not important | Delegate or quick action |
| P3 - Low | Neither urgent nor important | Eliminate or defer |

### 2. Task Attributes

Standard fields for comprehensive task tracking:

**Essential Fields:**
- Task ID/Number
- Task Name/Description
- Status (Not Started, In Progress, Completed, Blocked)
- Priority (P0-P3 or High/Medium/Low)
- Due Date
- Assignee/Owner

**Optional Fields:**
- Start Date
- Estimated Hours/Duration
- Actual Hours
- Category/Project
- Dependencies
- Tags/Labels
- Notes/Comments
- Completion %
- Subtasks

### 3. Status Categories

```
📋 Not Started - Task defined but not begun
🔄 In Progress - Actively working on task
âœ… Completed - Task finished
🔴 Blocked - Cannot proceed (waiting on dependency)
⏸️  On Hold - Paused temporarily
❌ Cancelled - Task no longer needed
```

## Task List Templates

### Basic To-Do List (Markdown)

For simple lists under 20 items:

```markdown
# [Project/Context Name] - Tasks

## High Priority
- [ ] Task name - Due: [date] - Owner: [name]
- [ ] Task name - Due: [date] - Owner: [name]

## Medium Priority
- [ ] Task name - Due: [date]
- [ ] Task name - Due: [date]

## Low Priority
- [ ] Task name
- [ ] Task name

---
**Created:** [date]
**Last Updated:** [date]
```

### Project Task Breakdown (Excel)

For complex projects with 20+ tasks:

**Sheet 1: Task List**
| Task ID | Task Name | Category | Priority | Status | Owner | Start Date | Due Date | Est. Hours | Notes |
|---------|-----------|----------|----------|--------|-------|------------|----------|------------|-------|

**Sheet 2: Timeline View**
| Week | Phase | Milestones | Key Tasks |
|------|-------|------------|-----------|

**Sheet 3: Resource Allocation**
| Team Member | Assigned Tasks | Total Hours | Availability |
|-------------|----------------|-------------|--------------|

### Weekly Schedule Template

For time-based planning:

```
TIME    | MONDAY  | TUESDAY | WEDNESDAY | THURSDAY | FRIDAY
--------|---------|---------|-----------|----------|--------
08:00   |         |         |           |          |
09:00   |         |         |           |          |
10:00   |         |         |           |          |
11:00   |         |         |           |          |
12:00   |         |         |           |          |
13:00   |         |         |           |          |
14:00   |         |         |           |          |
15:00   |         |         |           |          |
16:00   |         |         |           |          |
17:00   |         |         |           |          |
```

## Creating Schedules: Step-by-Step

### Step 1: Gather Requirements

Ask clarifying questions if needed:
- What is the time frame? (day, week, month, quarter, year)
- How many tasks approximately?
- Are there multiple people/teams involved?
- Are there task dependencies?
- What format is preferred? (Excel, Word, PDF, Markdown)
- Is this recurring or one-time?

### Step 2: Choose Template Type

Match request to appropriate template:
- **1-15 tasks**: Simple list (Markdown or Word)
- **15-50 tasks**: Excel with single sheet
- **50+ tasks or complex dependencies**: Excel with multiple sheets
- **Time-based**: Calendar/schedule format
- **Team-based**: Shared tracker with assignees

### Step 3: Structure the Data

Organize tasks logically:

**By Priority:**
```
High Priority Tasks
â†' Medium Priority Tasks
  â†' Low Priority Tasks
```

**By Phase:**
```
Phase 1: Planning
Phase 2: Execution
Phase 3: Review
```

**By Timeline:**
```
Week 1 Tasks
Week 2 Tasks
Week 3 Tasks
```

**By Category:**
```
Development Tasks
Design Tasks
Marketing Tasks
```

### Step 4: Add Time Estimates

Include realistic estimates:
- Use historical data if available
- Add buffer time (20-30% padding)
- Consider dependencies and parallel work
- Account for meetings and interruptions

### Step 5: Create the Document

**For Excel:**
- Use tables with filters
- Apply conditional formatting (color-code by status/priority)
- Add formulas for totals, % complete
- Freeze header rows
- Protect sheets if needed

**For Word/PDF:**
- Use clear headings and sections
- Include table of contents for long documents
- Add visual separators
- Use checkboxes for task lists

**For Markdown:**
- Use standard checkbox syntax `- [ ]`
- Organize with headers `##`
- Keep formatting simple and readable

## Advanced Features

### Gantt Chart Representation (Excel)

Create visual timeline using conditional formatting:

```
Task Name | Jan | Feb | Mar | Apr | May | Jun
----------|-----|-----|-----|-----|-----|-----
Design    | ███ | ███ |     |     |     |
Develop   |     | ███ | ███ | ███ |     |
Testing   |     |     |     | ███ | ███ |
Launch    |     |     |     |     |     | ███
```

### Dependency Tracking

Format: `Task A → Task B` (B depends on A)

```
Task ID | Task | Depends On | Can Start After
--------|------|------------|----------------
1       | A    | -          | Immediate
2       | B    | 1          | A complete
3       | C    | 1          | A complete  
4       | D    | 2,3        | B and C complete
```

### Time Tracking Template

For billable hours or productivity tracking:

| Date | Project | Task | Start | End | Hours | Rate | Total | Notes |
|------|---------|------|-------|-----|-------|------|-------|-------|
| | | | | | =End-Start | | =Hours*Rate | |

**Include formulas:**
- Daily totals
- Weekly totals
- Monthly totals
- Billable vs non-billable

### Kanban Board Layout

For visual workflow management:

```
| BACKLOG | TO DO | IN PROGRESS | REVIEW | DONE |
|---------|-------|-------------|---------|------|
| Task 1  | Task 4| Task 7      | Task 9  |Task 11|
| Task 2  | Task 5| Task 8      | Task 10 |Task 12|
| Task 3  | Task 6|             |         |Task 13|
```

## Common Use Cases & Examples

### Example 1: Personal Weekly To-Do

**User Request:** "Help me organize my tasks for this week"

**Claude's Approach:**
1. Create simple Markdown checklist
2. Group by day or priority
3. Keep it scannable and actionable
4. Include 5-15 tasks max

### Example 2: Software Development Sprint

**User Request:** "Create a 2-week sprint plan with 30 development tasks"

**Claude's Approach:**
1. Create Excel workbook
2. Sheet 1: Task backlog with story points
3. Sheet 2: Daily sprint board
4. Sheet 3: Team capacity planning
5. Include burndown metrics

### Example 3: Event Planning Timeline

**User Request:** "Build a timeline for planning a conference in 6 months"

**Claude's Approach:**
1. Create multi-sheet Excel or detailed Word doc
2. Break into phases (6 months out, 3 months, 1 month, 1 week)
3. Include milestones and deadlines
4. Add vendor/contact tracking
5. Create countdown calendar

### Example 4: Monthly Content Calendar

**User Request:** "Social media posting schedule for next month"

**Claude's Approach:**
1. Create calendar grid format (Excel or Word)
2. Show all days of month
3. Include columns for platform, content type, status
4. Color-code by platform or campaign
5. Add analytics tracking columns

## Best Practices

### DO:
- ✅ Start with clear headers and structure
- ✅ Use consistent date formats (YYYY-MM-DD recommended)
- ✅ Include status/progress indicators
- ✅ Add creation/update dates
- ✅ Keep task descriptions actionable (start with verbs)
- ✅ Use realistic time estimates
- ✅ Include owner/assignee for accountability
- ✅ Add filters and sorting in Excel
- ✅ Use color coding purposefully (consistent scheme)
- ✅ Leave space for notes/comments

### DON'T:
- ❌ Create overly complex templates for simple requests
- ❌ Use vague task descriptions
- ❌ Mix different date formats
- ❌ Forget to include priorities
- ❌ Omit due dates when they're critical
- ❌ Create unrealistic timelines
- ❌ Use too many priority levels (stick to 3-4 max)
- ❌ Overload with unnecessary fields

## Format Selection Guide

**Choose Markdown when:**
- Simple personal to-do lists
- Quick sharing via text/email
- Version control integration needed
- Under 20 tasks

**Choose Excel when:**
- Need calculations (hours, costs, percentages)
- Multiple stakeholders/assignees
- Want filtering and sorting
- Data analysis required
- 20+ tasks
- Complex project tracking

**Choose Word/PDF when:**
- Formal documentation needed
- Printing required
- Read-only distribution
- Narrative format with embedded tasks
- Executive summaries

**Choose CSV when:**
- Import into other systems
- Database integration
- Simple data structure
- Programmatic processing

## Export and Delivery

When creating task schedules:

1. **Save to outputs directory:** `/mnt/user-data/outputs/`
2. **Use descriptive filenames:** 
   - `project_tasks_2025_Q1.xlsx`
   - `weekly_todo_2025_W05.md`
   - `team_schedule_february.docx`
3. **Include metadata:**
   - Creation date
   - Last updated
   - Version (if iterating)
4. **Provide download link** via present_files tool

## Integration with Other Skills

Task scheduling often combines with:
- **Excel skill**: For complex spreadsheets with formulas
- **Docx skill**: For formatted reports with embedded task lists
- **PDF skill**: For read-only schedules
- **Calendar/reminder systems**: Export to .ics format if requested

## Troubleshooting

**Issue:** User asks for "schedule" but unclear what type
**Solution:** Ask clarifying questions about time period, task count, and purpose

**Issue:** Too many tasks for readable single document
**Solution:** Break into multiple sheets/sections or create summary + detail views

**Issue:** Unclear priorities
**Solution:** Use suggested frameworks (Eisenhower Matrix) or ask user for priority criteria

**Issue:** Dependency confusion
**Solution:** Create visual dependency map or use clear "Depends On" notation

## Resources

### scripts/
This skill includes utility scripts for common task management operations:

- `task_template_generator.cjs` - Generates blank templates in various formats
- `csv_to_calendar.cjs` - Converts CSV task lists to calendar format
- `gantt_generator.cjs` - Creates ASCII Gantt charts from task data

### references/
Additional documentation and examples:

- `project_management_methodologies.md` - Overview of Agile, Waterfall, Kanban
- `time_estimation_guide.md` - Techniques for accurate time estimates
- `sample_task_lists.md` - Real-world examples from different industries

### assets/
Ready-to-use templates:

- `templates/simple_todo.md` - Basic markdown checklist
- `templates/weekly_planner.xlsx` - Weekly schedule with time blocks
- `templates/project_tracker.xlsx` - Comprehensive project task tracker
- `templates/timesheet.xlsx` - Time tracking with billing calculations
- `templates/sprint_board.xlsx` - Agile sprint planning template

---

**Version:** 1.0
**Last Updated:** 2025-02-03
