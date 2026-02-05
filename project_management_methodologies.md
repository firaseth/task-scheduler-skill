# Project Management Methodologies Reference

This guide provides an overview of popular project management methodologies to help you choose the right approach for task scheduling.

## Agile

### Overview
Iterative, flexible approach focused on delivering value incrementally through short cycles (sprints).

### Key Principles
- Working software over comprehensive documentation
- Customer collaboration over contract negotiation
- Responding to change over following a plan
- Individuals and interactions over processes and tools

### Best For
- Software development
- Projects with evolving requirements
- Teams that need flexibility
- Fast-paced environments

### Task Scheduling Approach
- **Sprints:** 1-4 week cycles
- **Daily standups:** 15-minute sync meetings
- **Sprint planning:** Define sprint backlog
- **Sprint retrospective:** Continuous improvement

### Tools Integration
```
Backlog → Sprint Planning → Sprint Backlog → Daily Tasks → Review
```

---

## Scrum (Agile Framework)

### Overview
Structured Agile framework with defined roles, events, and artifacts.

### Roles
- **Product Owner:** Manages backlog, priorities
- **Scrum Master:** Facilitates process, removes blockers
- **Development Team:** Executes work

### Events
1. **Sprint Planning** (2-4 hours)
2. **Daily Scrum** (15 min)
3. **Sprint Review** (1-2 hours)
4. **Sprint Retrospective** (1 hour)

### Artifacts
- Product Backlog
- Sprint Backlog
- Increment

### Task Breakdown
```
Epic → User Stories → Tasks → Subtasks
Example:
Epic: User Authentication
  → User Story: As a user, I can reset my password
    → Task: Design reset flow
    → Task: Implement backend API
    → Task: Create frontend form
```

---

## Kanban

### Overview
Visual workflow management focusing on continuous flow and WIP limits.

### Core Principles
1. Visualize workflow
2. Limit work in progress
3. Manage flow
4. Make policies explicit
5. Implement feedback loops
6. Improve collaboratively

### Board Structure
```
| BACKLOG | TO DO | IN PROGRESS | REVIEW | DONE |
|    ∞    |   5   |      3      |   2    |  ∞   |
           ↑ WIP limits ↑
```

### Best For
- Support/maintenance work
- Continuous delivery environments
- Operations teams
- Workflows with variable task sizes

### Metrics
- **Cycle Time:** Start to finish duration
- **Lead Time:** Request to delivery duration
- **Throughput:** Tasks completed per period
- **WIP:** Tasks in progress

---

## Waterfall

### Overview
Sequential, phase-based approach where each phase must complete before the next begins.

### Phases
1. **Requirements:** Gather and document all requirements
2. **Design:** Create system architecture and design
3. **Implementation:** Build the solution
4. **Testing:** Verify functionality and quality
5. **Deployment:** Release to production
6. **Maintenance:** Ongoing support

### Best For
- Well-defined projects with stable requirements
- Regulated industries (construction, manufacturing)
- Fixed-price contracts
- Projects with strict documentation needs

### Task Scheduling
```
Phase 1: Requirements (Weeks 1-4)
  → Task 1.1: Stakeholder interviews
  → Task 1.2: Requirements documentation
  → Task 1.3: Requirements approval
  
Phase 2: Design (Weeks 5-8)
  → Task 2.1: Architecture design
  → Task 2.2: UI/UX mockups
  → Task 2.3: Design review
```

---

## Getting Things Done (GTD)

### Overview
Personal productivity methodology by David Allen focused on capturing and organizing all tasks.

### Five Steps
1. **Capture:** Collect everything that needs attention
2. **Clarify:** Process what items mean and what to do
3. **Organize:** Put items where they belong
4. **Reflect:** Review frequently
5. **Engage:** Do the work

### Lists Structure
- **Inbox:** Uncategorized items
- **Next Actions:** Immediate actionable tasks
- **Projects:** Multi-step outcomes
- **Waiting For:** Delegated or dependent items
- **Someday/Maybe:** Future possibilities
- **Reference:** Non-actionable information

### Decision Tree
```
New Item → Is it actionable?
             ↓ No → Trash, Reference, or Someday/Maybe
             ↓ Yes → Takes < 2 min?
                       ↓ Yes → Do it now
                       ↓ No → Delegate or Defer to Next Actions
```

---

## Critical Path Method (CPM)

### Overview
Mathematical approach to scheduling that identifies the longest sequence of dependent tasks.

### Key Concepts
- **Critical Path:** Longest dependency chain
- **Float/Slack:** Time a task can be delayed without affecting project
- **Early Start/Finish:** Earliest possible times
- **Late Start/Finish:** Latest possible times

### Calculation
```
Task A (3 days) → Task B (5 days) → Task D (2 days) = 10 days (CRITICAL PATH)
Task A (3 days) → Task C (4 days) → Task D (2 days) = 9 days (1 day slack)
```

### Best For
- Complex projects with many dependencies
- Time-sensitive projects
- Resource allocation optimization
- Construction and engineering projects

---

## Lean

### Overview
Methodology focused on maximizing value while minimizing waste.

### Seven Wastes to Eliminate
1. **Transportation:** Unnecessary movement
2. **Inventory:** Excess work in progress
3. **Motion:** Inefficient processes
4. **Waiting:** Idle time
5. **Overproduction:** Doing more than needed
6. **Over-processing:** Unnecessary complexity
7. **Defects:** Errors requiring rework

### Principles
- Define value from customer perspective
- Map value stream
- Create flow
- Establish pull (demand-driven)
- Pursue perfection

### Task Scheduling
Focus on:
- Just-in-time task completion
- Minimal WIP
- Continuous improvement (Kaizen)
- Value stream mapping

---

## PRINCE2

### Overview
Structured project management method widely used in UK government and large organizations.

### Seven Principles
1. Continued business justification
2. Learn from experience
3. Defined roles and responsibilities
4. Manage by stages
5. Manage by exception
6. Focus on products
7. Tailor to suit environment

### Seven Processes
1. Starting up a project
2. Directing a project
3. Initiating a project
4. Controlling a stage
5. Managing product delivery
6. Managing stage boundaries
7. Closing a project

### Best For
- Large organizations
- Government projects
- Projects requiring formal governance
- Highly regulated environments

---

## Choosing the Right Methodology

### Decision Matrix

| Methodology | Requirements Clarity | Team Size | Project Duration | Change Frequency |
|-------------|---------------------|-----------|------------------|------------------|
| Agile/Scrum | Low-Medium | Small-Medium | Short-Medium | High |
| Kanban | Low-Medium | Any | Ongoing | High |
| Waterfall | High | Medium-Large | Long | Low |
| Lean | Medium | Small-Medium | Any | Medium |
| CPM | High | Large | Long | Low |
| GTD | Personal | 1 | Ongoing | High |

### Quick Selection Guide

**Choose Agile/Scrum if:**
- Requirements will evolve
- Need frequent customer feedback
- Working on software/digital products
- Team is co-located or can collaborate closely

**Choose Kanban if:**
- Continuous flow of work
- Variable task sizes
- Support or maintenance work
- Want to visualize workflow

**Choose Waterfall if:**
- Requirements are well-defined and stable
- Regulatory requirements for documentation
- Fixed scope and budget
- Sequential dependencies

**Choose Lean if:**
- Need to reduce waste and improve efficiency
- Manufacturing or operations context
- Want to optimize processes
- Focus on customer value

**Choose GTD if:**
- Managing personal productivity
- Multiple projects and contexts
- Need to reduce mental overhead
- Want comprehensive capture system

**Choose CPM if:**
- Complex dependencies
- Time is critical constraint
- Resource optimization needed
- Large-scale project

---

## Hybrid Approaches

Many organizations combine methodologies:

### Scrumban
Scrum + Kanban
- Sprints for planning rhythm
- Kanban board for visualization
- WIP limits for flow management

### Water-Scrum-Fall
Waterfall planning + Agile execution + Waterfall deployment
- Traditional requirements phase
- Agile development sprints
- Formal deployment process

### Lean-Agile
Lean principles + Agile practices
- Eliminate waste
- Iterative development
- Continuous improvement
- Customer value focus

---

## Methodology Application Examples

### Software Startup
**Recommended:** Agile/Scrum
- 2-week sprints
- Daily standups
- Sprint retrospectives
- Flexible planning

### Construction Project
**Recommended:** Waterfall + CPM
- Sequential phases
- Critical path tracking
- Gantt charts
- Milestone-based payments

### IT Support Team
**Recommended:** Kanban
- Continuous ticket flow
- WIP limits per person
- SLA tracking
- Visual board

### Personal Productivity
**Recommended:** GTD
- Inbox processing
- Context-based lists
- Weekly reviews
- Next action focus

### Manufacturing Process
**Recommended:** Lean
- Value stream mapping
- Just-in-time production
- Continuous improvement
- Waste elimination

---

## Integration with Task Scheduler Skill

When using the Task Scheduler skill, specify your methodology for tailored templates:

**Example requests:**
- "Create a Scrum sprint backlog for 2-week sprint"
- "Build a Kanban board for support tickets"
- "Generate a Waterfall project timeline with phases"
- "Make a GTD-style task list with contexts"
- "Create a CPM critical path diagram"

The skill will adapt task structure, fields, and views to match your chosen methodology.

---

**Remember:** Methodologies are frameworks, not rigid rules. Adapt them to your context, team, and needs. The best methodology is the one that helps you deliver value consistently.
