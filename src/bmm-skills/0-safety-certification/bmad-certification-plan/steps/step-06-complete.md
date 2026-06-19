# Step 6: Certification Plan Completion & Handoff

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete decisions
- ✅ ALWAYS treat this as collaborative completion between certification planning peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on successful workflow completion and certification handoff
- 🎯 PROVIDE clear next steps for implementation phase
- ⚠️ ABSOLUTELY NO TIME ESTIMATES - AI development speed has fundamentally changed
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- 🎯 Present completion summary and implementation guidance
- 📖 Update frontmatter with final workflow state
- 🚫 THIS IS THE FINAL STEP IN THIS WORKFLOW

## YOUR TASK:

Complete the certification plan workflow, provide a comprehensive completion summary, ensure all plans are cross-referenced, and guide the user to the next phase of their safety-critical project development.

## COMPLETION SEQUENCE:

### 1. Cross-Reference Validation

Before finalizing, validate that all sections of the certification plan are properly cross-referenced:

**Cross-Reference Checklist:**

- [ ] Every plan references the applicable standards and objectives
- [ ] Role assignments reference the independence requirements defined in plans
- [ ] Gate reviews reference the deliverables from each plan
- [ ] Activities reference the standard objectives they satisfy
- [ ] Tailoring decisions reference the specific objectives being tailored
- [ ] Independence requirements in roles match independence requirements in plans
- [ ] Deliverables schedule references all plans consistently

**If any cross-references are missing:**
- Identify the gap
- Add the missing cross-reference
- Confirm with user before proceeding

### 2. Completeness Check

Verify the certification plan document contains all required sections:

**Required Sections Checklist:**

- [ ] Applicable Standards (from step 2)
- [ ] Tailoring Decisions (from step 2)
- [ ] Software Development Plan (from step 3)
- [ ] Software Verification Plan (from step 3)
- [ ] Configuration Management Plan (from step 3)
- [ ] Quality Assurance Plan (from step 3)
- [ ] Roles & Independence (from step 4)
- [ ] Certification Activities Schedule (from step 5)
- [ ] Gate Reviews (from step 5)
- [ ] Certification Deliverables Schedule (from step 5)

**If any sections are missing:**
- Flag the missing section
- Offer to complete it before finalizing

### 3. Update Document Frontmatter

Update the certification plan document frontmatter:

```yaml
stepsCompleted: [1, 2, 3, 4, 5, 6]
workflowType: 'certification-plan'
lastStep: 6
status: 'complete'
completedAt: '{{current_date}}'
```

### 4. Generate Completion Summary

Provide a comprehensive summary of what was accomplished:

**Completion Summary Template:**

```markdown
## Certification Plan — Completion Summary

🎉 Congratulations, {{user_name}}! Your certification plan is now complete.

### Standards Coverage

**Applicable Standards:**
- [Standard 1]: [Criticality Level] — [Number of objectives]
- [Standard 2]: [Criticality Level] — [Number of objectives]

**Total Objectives Addressed:** [Count]
**Tailored Objectives:** [Count] (with justifications documented)

### Plans Created

- Software Development Plan: [Summary of key processes]
- Software Verification Plan: [Summary of verification methods]
- Configuration Management Plan: [Summary of CM controls]
- Quality Assurance Plan: [Summary of QA activities]

### Roles & Independence

- Total Roles Defined: [Count]
- Independence Gaps Identified: [Count]
- Gap Mitigations: [Summary]

### Certification Timeline

- Gate Reviews: [Count]
- Certification Activities: [Count]
- Deliverables: [Count]

### Key Decisions Made

1. [Key decision 1 — e.g., "Selected DO-178C DAL B with tailoring of objective X"]
2. [Key decision 2 — e.g., "Identified independence gap in QA role, mitigation documented"]
3. [Key decision 3 — e.g., "Combined IEC 61508 SIL 2 verification activities with DO-178C verification plan"]

### Cross-Reference Integrity

✅ All plans cross-reference applicable standards
✅ All activities map to standard objectives
✅ All roles satisfy independence requirements (or gaps are documented)
✅ All gate reviews reference required deliverables
```

### 5. Next Steps Guidance

After completing the certification plan, suggest the following next steps:

1. **Implement the Plans** — Begin executing the certification activities defined in the plan
2. **Hazard Analysis** — If not already completed, run the `bmad-hazard-analysis` workflow
3. **Architecture for Safety** — If not already completed, run the `bmad-create-architecture` workflow with safety considerations
4. **Safety Requirements** — Derive safety requirements from the certification objectives
5. **Continuous Compliance** — Use the certification plan as a living document, updating it as the project progresses

### 6. Congratulate the User

Both you and the user completed something significant here — creating a certification plan is a foundational step for safety-critical development. Give a summary of what you achieved together and genuinely congratulate the user on a job well done.

Upon completion, offer to answer any questions about the Certification Plan document.

## SUCCESS METRICS:

✅ Complete certification plan document delivered with all sections
✅ All cross-references validated between sections
✅ All plans consistently reference standards, objectives, and roles
✅ Independence gaps documented with mitigations
✅ User provided with clear next steps for certification execution
✅ Workflow status properly updated
✅ User collaboration maintained throughout completion process

## FAILURE MODES:

❌ Not validating cross-references between sections
❌ Missing final validation of document completeness
❌ Not updating workflow status appropriately
❌ Failing to celebrate the successful completion
❌ Not providing specific next steps for the user
❌ Rushing completion without proper summary

❌ **CRITICAL**: Reading only partial step file - leads to incomplete understanding and poor decisions
❌ **CRITICAL**: Making decisions without complete understanding of step requirements and protocols

## WORKFLOW COMPLETE:

This is the final step of the Certification Plan workflow. The user now has a complete, cross-referenced certification plan ready for use in a safety-critical project development lifecycle.

The certification plan will serve as the single source of truth for all certification activities, ensuring that the project satisfies regulatory requirements and achieves successful certification.