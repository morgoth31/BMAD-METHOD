# Step 4: Define Project Roles & Independence Requirements

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete decisions
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between certification planning peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on defining project roles and independence requirements only
- ⚠️ ABSOLUTELY NO TIME ESTIMATES - AI development speed has fundamentally changed
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- ⚠️ Present A/P/C menu after generating roles content
- 💾 ONLY save when user chooses C (Continue)
- 📖 Update frontmatter `stepsCompleted: [1, 2, 3, 4]` before loading next step
- 🚫 FORBIDDEN to load next step until C is selected

## COLLABORATION MENUS (A/P/C):

This step will generate content and present choices:

- **A (Advanced Elicitation)**: Use discovery protocols to develop deeper insights about role definitions and independence requirements
- **P (Party Mode)**: Bring multiple perspectives to analyze role assignments from different stakeholder angles (developer, QA, certifier)
- **C (Continue)**: Save the content to the document and proceed to next step

## PROTOCOL INTEGRATION:

- When 'A' selected: Invoke the `bmad-advanced-elicitation` skill
- When 'P' selected: Invoke the `bmad-party-mode` skill
- PROTOCOLS always return to display this step's A/P/C menu after the A or P have completed
- User accepts/rejects protocol changes before proceeding

## CONTEXT BOUNDARIES:

- Current document and frontmatter from steps 1-3 are available
- Standards selection, tailoring decisions, and plans from steps 2-3 inform role requirements
- Independence requirements from step 3 must be satisfied by role assignments
- Focus on roles and independence only

## YOUR TASK:

Define project roles and independence requirements based on the criticality level, mapping roles to standards requirements, and identifying any independence gaps.

## ROLES DEFINITION SEQUENCE:

### 1. Define Required Roles

Based on the standards and criticality level selected, define the following role categories:

**Core Certification Roles:**

| Role | DO-178C Reference | IEC 61508 Reference | ECSS-E-ST-40C Reference |
|------|-------------------|---------------------|--------------------------|
| Software Developer | Section 5.2 | Clause 7.4 | Clause 5.3 |
| Software Verifier | Section 6.0 | Clause 7.9 | Clause 6.0 |
| Software QA | Section 8.0 | Clause 6 | Clause 7.0 |
| Configuration Manager | Section 7.0 | Clause 7.10 | Clause 8.0 |
| Certification Liaison | Section 2.0 | Clause 6 | Clause 4.0 |
| Project Manager | Section 11.0 | Clause 6 | Clause 4.0 |

### 2. Define Independence Requirements Per Role

For each role, determine independence requirements based on criticality:

**Independence Level Definitions:**
- **Full Independence (FI)**: Different organization from developer
- **Organizational Independence (OI)**: Different team/department, same organization
- **Individual Independence (II)**: Different individual, same team (NOT permitted at higher DALs/SILs)
- **No Independence Required (NR)**: Same individual may perform both roles

**Independence Matrix by Role:**

| Role | DAL A | DAL B | DAL C | DAL D |
|------|-------|-------|-------|-------|
| Verifier (reviews) | FI/OI | OI | II | NR |
| Verifier (testing) | OI | II | NR | NR |
| QA Auditor | OI | OI | II | NR |
| CM Manager | II | NR | NR | NR |
| Certification Liaison | OI | OI | OI | II |

**IEC 61508 Independence Matrix:**

| Role | SIL 4 | SIL 3 | SIL 2 | SIL 1 |
|------|-------|-------|-------|-------|
| Verifier (reviews) | FI/OI | OI | II | NR |
| Verifier (testing) | OI | II | NR | NR |
| Safety Assessor | OI | OI | OI | II |

**ECSS-E-ST-40C Independence Matrix:**

| Role | Category A | Category B | Category C | Category D |
|------|-----------|------------|------------|------------|
| Verifier (reviews) | FI/OI | OI | II | NR |
| Verifier (testing) | OI | II | NR | NR |
| PA Manager | OI | OI | II | NR |

### 3. Map Project Roles to Individuals

Collaborate with the user to map roles to individuals or teams:

```markdown
## Roles & Independence

### Role Assignments

| Role | Assigned To | Independence Level | Notes |
|------|-------------|--------------------|-------|
| Software Developer | [Name/Team] | N/A (source role) | [Notes] |
| Software Verifier | [Name/Team] | [FI/OI/II/NR] | [Justification if tailored] |
| Software QA | [Name/Team] | [FI/OI/II/NR] | [Justification if tailored] |
| Configuration Manager | [Name/Team] | [FI/OI/II/NR] | [Justification if tailored] |
| Certification Liaison | [Name/Team] | [FI/OI/II/NR] | [Justification if tailored] |
| Project Manager | [Name/Team] | N/A | [Notes] |
```

### 4. Identify Independence Gaps

Analyze the role assignments for independence gaps:

**Gap Analysis:**
- For each role that requires independence, verify the assignment satisfies the independence level
- Identify any roles where the same individual performs both developer and verifier/QA roles
- Identify any roles where independence requirements are not fully met
- For each gap, document:
  - The gap description
  - The applicable standard requirement
  - The proposed mitigation or justification
  - Risk assessment of the gap

**Common Independence Gaps:**
1. Developer also performing verification (conflict of interest)
2. QA reporting to development management (organizational independence)
3. Single person performing CM and development (small team constraint)
4. Certification liaison also performing development (conflict of interest)

### 5. Present to User and Handle Feedback

Present the generated roles section to the user:

"{{user_name}}, I've defined the project roles and independence requirements based on your selected standards and criticality level. Here's a summary:

**Roles Defined:** [Count]
**Independence Requirements:** [Summary by role]
**Gaps Identified:** [Count and description of any gaps]

Please review the role assignments and independence levels. Are there any adjustments needed for your team structure?"

[A] Advanced Elicitation — explore deeper implications of role assignments
[P] Party Mode — analyze role assignments from developer, QA, and certifier perspectives
[C] Continue — save and proceed to activities timeline definition

## SUCCESS METRICS:

✅ All required roles identified based on standards and criticality
✅ Independence requirements mapped to each role based on DAL/SIL/Category
✅ Role assignments documented with individuals or teams
✅ Independence gaps identified with mitigations and risk assessments
✅ Cross-references to plan independence requirements from step 3
✅ Content appended to certification plan document

## FAILURE MODES:

❌ Missing roles required by selected standards
❌ Not mapping independence requirements based on criticality level
❌ Not identifying independence gaps in team assignments
❌ Assigning roles without considering independence conflicts
❌ Not providing mitigations for identified gaps
❌ Proceeding without user confirmation of role assignments

❌ **CRITICAL**: Reading only partial step file - leads to incomplete understanding and poor decisions
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file
❌ **CRITICAL**: Making decisions without complete understanding of step requirements and protocols

## NEXT STEP:

After user selects [C] to continue, load `./step-05-activities.md` to define the certification activities timeline.

Remember: Do NOT proceed to step-05 until user explicitly selects [C] from the menu!