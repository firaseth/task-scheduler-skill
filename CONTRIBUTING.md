# Contributing to Task Scheduler Skill

Thank you for your interest in contributing! This document provides guidelines for contributing to the Task Scheduler Skill project.

## Ways to Contribute

### 1. Report Issues
- Bug reports
- Feature requests
- Documentation improvements
- Template suggestions

### 2. Submit Templates
Share your task management templates:
- Industry-specific examples
- Workflow variations
- Format innovations

### 3. Improve Documentation
- Fix typos or clarify instructions
- Add examples
- Translate documentation
- Create tutorials

### 4. Develop Scripts
- Utility automation
- Format converters
- Integration tools

## Contribution Process

### Reporting Issues

When reporting issues, please include:
1. **Clear description** of the problem
2. **Steps to reproduce** (if applicable)
3. **Expected behavior**
4. **Actual behavior**
5. **Screenshots or examples** (if relevant)
6. **Environment details** (if technical)

### Submitting Templates

Template submissions should include:
1. **Template file** in appropriate format
2. **Use case description** - when to use this template
3. **Example** - filled-in sample
4. **Instructions** - how to customize it

**Template quality criteria:**
- ✅ Clear structure and organization
- ✅ Appropriate fields for the use case
- ✅ Good formatting and readability
- ✅ Includes helpful comments/instructions
- ✅ Follows best practices from BEST_PRACTICES.md

### Documentation Updates

Documentation contributions should:
- Follow existing formatting style
- Use clear, concise language
- Include examples where helpful
- Link to related sections
- Be well-organized

## Style Guidelines

### Markdown Files
- Use ATX-style headers (`#` not `====`)
- One sentence per line for better diffs
- Use code blocks with language specification
- Include blank line before/after lists

### Code (Scripts)
- Use meaningful variable names
- Add comments for complex logic
- Include error handling
- Provide usage examples in comments
- Follow Node.js/JavaScript best practices

### Templates
- Use consistent date formats (YYYY-MM-DD recommended)
- Include creation/update date fields
- Add clear section headers
- Use standard terminology from SKILL.md

## File Organization

```
task-scheduler-skill/
├── templates/          # Ready-to-use template files
├── scripts/           # Utility automation scripts
├── references/        # In-depth documentation
├── docs/              # Extended guides
├── SKILL.md           # Core skill documentation
├── README.md          # Project overview
└── examples/          # Filled-in examples (if adding)
```

## Commit Messages

Use clear, descriptive commit messages:

**Good examples:**
```
Add timesheet template for freelancers
Fix typo in best practices guide
Update README with installation steps
Add script for CSV to Kanban conversion
```

**Less helpful:**
```
Update
Fix stuff
Changes
WIP
```

**Format:**
```
<type>: <description>

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Formatting changes
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance tasks

## Testing Your Contributions

Before submitting:

### Templates
- [ ] Test with realistic data
- [ ] Verify all formulas work (if Excel)
- [ ] Check formatting across different viewers
- [ ] Ensure no broken references

### Documentation
- [ ] Spell check
- [ ] Link validation
- [ ] Markdown renders correctly
- [ ] Examples are accurate

### Scripts
- [ ] Test with various inputs
- [ ] Handle edge cases
- [ ] Error messages are helpful
- [ ] Works cross-platform (if possible)

## Code of Conduct

### Be Respectful
- Treat all contributors with respect
- Welcome newcomers
- Be patient with questions
- Provide constructive feedback

### Be Collaborative
- Share credit generously
- Help others learn
- Document your work
- Communicate clearly

### Be Professional
- Stay on topic
- Avoid spam or self-promotion
- Respect intellectual property
- Follow licensing terms

## Questions?

If you have questions about contributing:
1. Check existing documentation
2. Search for similar issues
3. Open a discussion issue
4. Be specific about what you need help with

## Recognition

Contributors will be recognized in:
- CHANGELOG.md for significant contributions
- README.md contributors section (if established)
- Individual file headers for major additions

## License

By contributing, you agree that your contributions will be licensed under the MIT License, the same license covering this project.

---

Thank you for helping make Task Scheduler Skill better for everyone! 🎉
