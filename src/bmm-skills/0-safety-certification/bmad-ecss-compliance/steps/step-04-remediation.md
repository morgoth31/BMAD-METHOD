# Step 4: Create ECSS Remediation Plan

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete remediation plans
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between ECSS compliance analyst peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on remediation planning only - finalization happens in the next step
- 🚫 FORBIDDEN to assign remediation actions without user confirmation
- ⚠️ ABSOLUTELY NO TIME ESTIMATES

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- 💾 Update document and frontmatter as you create remediation plans
- 📖 Set up frontmatter `stepsCompleted: [1, 2, 3, 4]` before loading next step
- 🚫 FORBIDDEN to load next step until remediation planning is complete

## CONTEXT BOUNDARIES:

- Variables from workflow.md are available in memory
- Previous context = what's in output document + frontmatter + loaded input documents
- Rely on the gap analysis completed in step-03
- Do not re-identify gaps in this step

## YOUR TASK:

Create a remediation plan for each ECSS compliance gap identified in step-03. Each remediation action must be specific, actionable, and assigned, with consideration for the project's software criticality category.

## REMEDIATION PLANNING SEQUENCE:

### 1. Review Gap Analysis

Load the gap analysis from step-03 and confirm the list of gaps with the user:

- Review all gaps by severity (CRITICAL first, then MAJOR, MODERATE, MINOR, OBSERVATION)
- Confirm the user understands and agrees with each gap
- Identify any gaps that have been resolved since the last step
- Pay special attention to gaps in criticality assessment (Q80-2) and cross-standard dependencies

### 2. Create Remediation Actions

For each gap, collaboratively define a remediation action:

**Remediation Action Fields:**

| Field | Description |
|-------|-------------|
| **Gap ID** | Links back to the gap (e.g., GAP-001) |
| **ECSS Objective(s)** | The ECSS objective(s) addressed (e.g., E40-1, Q80-3) |
| **Action** | Specific, actionable description of what needs to be done |
| **Owner** | Person or role responsible for completing the action |
| **Priority** | Based on gap severity: P1 (CRITICAL), P2 (MAJOR), P3 (MODERATE), P4 (MINOR), P5 (OBSERVATION) |
| **Due Date** | Target date for completion (set collaboratively with user) |
| **Effort** | Estimated effort: S (hours), M (days), L (weeks), XL (months) |
| **Dependencies** | Other remediation actions that must be completed first |
| **Verification** | How to verify the gap is closed (e.g., "peer review of document X per E-ST-40C §5.2") |
| **ECSS Reference** | Specific ECSS clause or section that the action addresses |

<critical>Each remediation action must be SMART: Specific, Measurable, Achievable, Relevant, Time-bound. Vague actions like "improve documentation" are not acceptable. Actions must reference specific ECSS clauses where possible.</critical>

### 3. Organize Remediation by Priority

Structure the remediation plan by priority level:

**P1 - CRITICAL (Must resolve before certification submission):**
- List all P1 actions with their gap IDs and ECSS references
- Identify dependencies between P1 actions
- Suggest a resolution order
- Emphasise criticality assessment gaps (Q80-2) as highest priority — they define the compliance scope

**P2 - MAJOR (Must resolve before final certification review):**
- List all P2 actions
- Note any P2 actions that depend on P1 completion
- Include configuration management gaps (Q80-9 through Q80-12) and quality gaps (Q80-13, Q80-14) as high-priority

**P3 - MODERATE (Should resolve, may be deferred with justification):**
- List all P3 actions
- Note which can be deferred to later project phases
- Often includes conditional objective gaps

**P4 - MINOR (Nice to have, may be addressed in continuous improvement):**
- List all P4 actions

**P5 - OBSERVATION (No action required, improvement suggestions):**
- List observations for awareness only

### 4. Document Remediation Plan

Update the ECSS compliance matrix with the Remediation Plan section:

- Organize by priority level (P1 through P5)
- Include all fields for each remediation action
- Add a dependency diagram or table if dependencies exist
- Add a summary count of actions by priority
- Reference specific ECSS clauses in each action where applicable

### 5. Review with User

Present the complete remediation plan and confirm:

- Are all actions specific and actionable?
- Are owners assigned realistically?
- Are due dates achievable?
- Are dependencies correctly identified?
- Are ECSS clause references accurate?
- Are there any gaps that need different remediation approaches?
- Does the plan account for the project's software criticality category?

## REMEDIATION PLANNING RULES:

1. **Be Specific**: "Create software development plan per ECSS-E-ST-40C §5.1.1" not "improve documentation"
2. **Be Realistic**: Don't assign 20 P1 actions to one person with the same due date
3. **Track Dependencies**: If action B depends on action A, make that explicit
4. **Verify Closure**: Every action must have a way to verify it's done
5. **Prioritise Honestly**: CRITICAL gaps must be P1 — don't downgrade to avoid urgency
6. **Reference ECSS**: Each action should reference the specific ECSS clause it addresses
7. **Criticality Context**: Remediation depth should match the criticality category — Cat. A requires more rigorous evidence than Cat. D

## SUCCESS METRICS:

✅ Every gap has a corresponding remediation action
✅ All remediation actions are specific and actionable
✅ Owners are assigned to every action
✅ Priorities align with gap severities
✅ Due dates are set (even if tentative)
✅ Dependencies between actions are identified
✅ Verification methods are defined for each action
✅ ECSS clause references are included where applicable
✅ User has reviewed and confirmed the remediation plan
✅ Frontmatter updated with `stepsCompleted: [1, 2, 3, 4]`

## FAILURE MODES:

❌ Creating vague remediation actions ("improve documentation")
❌ Not assigning owners to actions
❌ Priorities that don't align with gap severities
❌ Ignoring dependencies between remediation actions
❌ Not referencing specific ECSS clauses in remediation actions
❌ Proceeding without user review of the remediation plan
❌ Not updating frontmatter progress

❌ **CRITICAL**: Reading only partial step file - leads to incomplete remediation plans
❌ **CRITICAL**: Assigning unrealistic remediation without user input
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file

## NEXT STEP:

After user confirms the remediation plan and selects [C] to continue, load `./step-05-complete.md` to finalize the ECSS compliance matrix, write the summary, and recommend next steps.