# Task Scheduler Skill - Examples

This document provides real-world examples of how to use the Task Scheduler skill for various scenarios.

## Example 1: Personal Weekly To-Do List

### User Request
"Help me organize my tasks for this week. I need to finish a report, schedule dentist appointment, grocery shopping, and work on my side project."

### Output
**Format:** Markdown checklist
**Filename:** `weekly_tasks_2025_W05.md`

```markdown
# Weekly Tasks - Week of Feb 3, 2025

## 🔴 High Priority
- [ ] **Finish Q4 report** - Due: 2025-02-05 - Owner: Me
  - Needs: Sales data from Sarah, final review
  
- [ ] **Schedule dentist appointment** - Due: 2025-02-04 - Owner: Me
  - Call: (555) 123-4567

## 🟡 Medium Priority
- [ ] Grocery shopping - Due: 2025-02-06 - Owner: Me
  - List: milk, bread, eggs, vegetables

## 🟢 Low Priority
- [ ] Side project - 2 hours on website redesign
  - Focus on homepage layout
```

---

## Example 2: Software Development Sprint

### User Request
"Create a 2-week sprint plan for our team. We have 25 user stories totaling 60 story points across 4 developers."

### Output
**Format:** Excel workbook (multi-sheet)
**Filename:** `sprint_15_plan.xlsx`

**Sheet 1: Sprint Backlog**
| Story ID | Story | Priority | Points | Assignee | Status | Sprint Day |
|----------|-------|----------|--------|----------|--------|------------|
| US-101 | User login | P0 | 5 | Alice | In Progress | 1-3 |
| US-102 | Password reset | P1 | 3 | Bob | Not Started | 4-5 |
| US-103 | Profile page | P1 | 8 | Alice | Not Started | 6-10 |
| ... | ... | ... | ... | ... | ... | ... |

**Sheet 2: Daily Standup Tracker**
| Day | Date | Alice | Bob | Carol | David | Blockers |
|-----|------|-------|-----|-------|-------|----------|
| 1 | 02/03 | US-101 | US-110 | US-115 | US-120 | None |
| 2 | 02/04 | US-101 | US-110 | US-115 | US-120 | API access |
| ... | ... | ... | ... | ... | ... | ... |

**Sheet 3: Burndown Chart Data**
| Day | Planned Remaining | Actual Remaining |
|-----|-------------------|------------------|
| 0 | 60 | 60 |
| 1 | 57 | 58 |
| 2 | 54 | 55 |
| ... | ... | ... |

---

## Example 3: Wedding Planning Timeline

### User Request
"I'm getting married in 6 months. Help me create a comprehensive planning timeline."

### Output
**Format:** Word document with embedded tables
**Filename:** `wedding_planning_timeline.docx`

### 6 Months Before (August 2025)
- [ ] Set budget and priorities
- [ ] Create guest list (draft)
- [ ] Book venue
- [ ] Hire photographer
- [ ] Choose wedding party

### 4 Months Before (October 2025)
- [ ] Send save-the-dates
- [ ] Book caterer
- [ ] Order wedding dress
- [ ] Book florist
- [ ] Arrange accommodations

### 2 Months Before (December 2025)
- [ ] Send invitations
- [ ] Finalize menu
- [ ] Schedule hair/makeup trial
- [ ] Order wedding cake
- [ ] Purchase rings

### 1 Month Before (January 2026)
- [ ] Final headcount to caterer
- [ ] Confirm all vendors
- [ ] Get marriage license
- [ ] Final dress fitting
- [ ] Rehearsal dinner planning

### 1 Week Before
- [ ] Confirm timeline with vendors
- [ ] Pack for honeymoon
- [ ] Final payments
- [ ] Rehearsal
- [ ] Delegate day-of tasks

---

## Example 4: Content Marketing Calendar

### User Request
"Create a social media posting schedule for February with 3 posts per week across Instagram, Twitter, and LinkedIn."

### Output
**Format:** Excel calendar
**Filename:** `social_media_february_2025.xlsx`

| Date | Day | Instagram | Twitter | LinkedIn | Theme | Status |
|------|-----|-----------|---------|----------|-------|--------|
| 02/03 | Mon | Product showcase | Industry news | Thought leadership | New feature | Scheduled |
| 02/05 | Wed | Behind the scenes | Quick tip | Case study | Culture | Draft |
| 02/07 | Fri | User testimonial | Poll/engagement | How-to guide | Education | Not started |
| 02/10 | Mon | Infographic | Product update | Team spotlight | Product | Not started |
| ... | ... | ... | ... | ... | ... | ... |

**Additional Columns:**
- Content Type
- Asset Status (Created/Approved/Published)
- Engagement Target
- Campaign Tag
- Responsible Person

---

## Example 5: Home Renovation Project

### User Request
"I'm renovating my kitchen. Break down all the tasks with timeline and budget tracking."

### Output
**Format:** Excel workbook
**Filename:** `kitchen_renovation_tracker.xlsx`

**Sheet 1: Task Timeline**
| Phase | Task | Duration | Start | End | Contractor | Estimated Cost | Actual Cost | Status |
|-------|------|----------|-------|-----|------------|----------------|-------------|--------|
| Planning | Design finalization | 2 weeks | 02/03 | 02/17 | Designer | $2,000 | - | In Progress |
| Planning | Permits | 1 week | 02/17 | 02/24 | Self | $500 | - | Not Started |
| Demo | Remove cabinets | 2 days | 02/24 | 02/26 | Demo crew | $800 | - | Not Started |
| Demo | Remove countertops | 1 day | 02/26 | 02/27 | Demo crew | $400 | - | Not Started |
| Electrical | Rewiring | 3 days | 02/27 | 03/02 | Electrician | $3,000 | - | Not Started |
| Plumbing | New pipes | 2 days | 03/02 | 03/04 | Plumber | $2,500 | - | Not Started |
| Install | Cabinets | 3 days | 03/04 | 03/07 | Carpenter | $8,000 | - | Not Started |
| Install | Countertops | 1 day | 03/07 | 03/08 | Stone installer | $4,500 | - | Not Started |
| Install | Appliances | 1 day | 03/08 | 03/09 | Appliance team | $6,000 | - | Not Started |
| Finishing | Paint | 2 days | 03/09 | 03/11 | Painter | $1,200 | - | Not Started |
| Finishing | Backsplash | 1 day | 03/11 | 03/12 | Tile installer | $1,800 | - | Not Started |
| Final | Cleanup | 1 day | 03/12 | 03/13 | Cleaning service | $300 | - | Not Started |

**Sheet 2: Budget Summary**
| Category | Estimated | Actual | Variance |
|----------|-----------|--------|----------|
| Labor | $18,000 | - | - |
| Materials | $12,000 | - | - |
| Permits | $500 | - | - |
| Contingency (10%) | $3,050 | - | - |
| **TOTAL** | **$33,550** | **-** | **-** |

---

## Example 6: Freelance Time Tracking

### User Request
"I need to track my hours for 3 different client projects with billing."

### Output
**Format:** Excel with formulas
**Filename:** `timesheet_january_2025.xlsx`

| Date | Client | Project | Task | Start | End | Hours | Rate/hr | Total | Notes |
|------|--------|---------|------|-------|-----|-------|---------|-------|-------|
| 01/15 | Acme Co | Website | Design mockups | 09:00 | 12:00 | 3.00 | $150 | $450 | Homepage revision |
| 01/15 | Beta Inc | App Dev | Backend API | 13:00 | 17:30 | 4.50 | $175 | $788 | User auth endpoints |
| 01/16 | Acme Co | Website | Frontend code | 09:00 | 11:30 | 2.50 | $150 | $375 | React components |
| 01/16 | Gamma LLC | Consulting | Strategy call | 14:00 | 15:00 | 1.00 | $200 | $200 | Q1 planning |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |

**Summary Section:**
| Client | Total Hours | Total Billed |
|--------|-------------|--------------|
| Acme Co | 45.5 | $6,825 |
| Beta Inc | 38.0 | $6,650 |
| Gamma LLC | 12.5 | $2,500 |
| **TOTAL** | **96.0** | **$15,975** |

---

## Example 7: Academic Semester Planner

### User Request
"Help me organize my assignments and exams for 4 classes this semester."

### Output
**Format:** Excel calendar view
**Filename:** `spring_2025_semester.xlsx`

| Week | Date Range | CS 101 | Math 205 | English 301 | Physics 150 | Notes |
|------|------------|--------|----------|-------------|-------------|-------|
| 1 | Jan 13-19 | Reading Ch 1-2 | Problem Set 1 | Essay topic | Lab 1 | Syllabus week |
| 2 | Jan 20-26 | Assignment 1 (Due 1/24) | Quiz 1 | Outline due | Reading | |
| 3 | Jan 27-Feb 2 | Project proposal | Problem Set 2 | Draft due | Lab 2 | |
| 4 | Feb 3-9 | **Midterm 1 (2/7)** | Assignment 1 | Peer review | Quiz 1 | Study weekend |
| ... | ... | ... | ... | ... | ... | ... |

**Color Coding:**
- Red: Exams
- Orange: Major assignments
- Yellow: Regular homework
- Green: Reading/prep

---

## Example 8: Daily Time Blocking

### User Request
"Create a daily schedule template with time blocks for focused work."

### Output
**Format:** Markdown table
**Filename:** `daily_time_blocks.md`

```markdown
# Daily Time Blocking Template

## Monday, February 3, 2025

| Time | Block | Activity | Notes |
|------|-------|----------|-------|
| 06:00-07:00 | Morning Routine | Exercise + Breakfast | |
| 07:00-08:00 | Deep Work 1 | Most important task | No interruptions |
| 08:00-09:00 | Deep Work 1 | (continued) | |
| 09:00-09:30 | Admin | Email + Messages | |
| 09:30-11:00 | Deep Work 2 | Second priority task | |
| 11:00-11:15 | Break | Walk + Coffee | |
| 11:15-12:30 | Meetings | Standups + Check-ins | |
| 12:30-13:30 | Lunch | | |
| 13:30-15:00 | Deep Work 3 | Creative work | |
| 15:00-15:15 | Break | | |
| 15:15-16:30 | Shallow Work | Admin tasks, planning | |
| 16:30-17:00 | Review | Day recap + tomorrow prep | |
| 17:00+ | Personal Time | | |

**Deep Work Blocks Total:** 4.5 hours
**Meeting Time:** 1.25 hours
**Admin/Shallow Work:** 2 hours
```

---

## Tips for Customization

1. **Adjust complexity** based on user needs (simple vs. detailed)
2. **Choose format** based on number of tasks and collaboration needs
3. **Add color coding** for visual clarity in Excel/Word
4. **Include formulas** for automatic calculations when relevant
5. **Leave space** for notes and updates
6. **Set realistic** timeframes and buffer time
7. **Make it actionable** with clear next steps

---

These examples demonstrate the versatility of the Task Scheduler skill across different domains and complexity levels.
