# Step 5: Produce Gate Review Decision and Finalize Report

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete finalization
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative finalization between review facilitator and stakeholders
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on finalization and decision — the work is done, now we package it
- 🚫 FORBIDDEN to make the gate decision without user agreement
- ⚠️ ABSOLUTELY NO TIME ESTIMATES

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- 💾 Finalize document and update frontmatter
- 📖 Set up frontmatter `stepsCompleted: [1, 2, 3, 4, 5]` and `status: complete`
- 🚫 FORBIDDEN to mark as complete until user confirms

## CONTEXT BOUNDARIES:

- Variables from workflow.md are available in memory
- Previous context = what's in output document + frontmatter + all loaded input documents
- Rely on the complete gate review report built in steps 1-4
- This step is about finalization, not re-analysis

## YOUR TASK:

Produce the gate review decision, finalize the report, and provide recommendations for next steps.

## FINALIZATION SEQUENCE:

### 1. Review Complete Gate Review Report

Read through the entire gate review report and verify:

- All review criteria are documented
- Every criterion has a finding (PASS, CONCERN, or FAIL)
- All CONCERN and FAIL findings have action items
- All action items have owners and resolution criteria
- The document is internally consistent
- Frontmatter is accurate and complete

### 2. Determine Gate Review Decision

Based on the findings and action items, determine the gate review decision:

| Decision | Criteria |
|----------|----------|
| **PROCEED** | All criteria PASS; no CONCERN or FAIL findings; project is ready for the next phase |
| **PROCEED WITH CONDITIONS** | Some CONCERN findings but no FAIL findings; project can proceed with documented conditions and action items |
| **DO NOT PROCEED** | Any FAIL findings that cannot be immediately resolved; project must address critical issues before proceeding |

**Decision Logic:**

- If ALL findings are PASS → **PROCEED**
- If there are CONCERN findings but NO FAIL findings → **PROCEED WITH CONDITIONS**
- If there are FAIL findings → **DO NOT PROCEED**

<critical>The gate review decision must be honest and based on the evidence. Do not upgrade a DO NOT PROCEED to PROCEED WITH CONDITIONS to avoid difficult conversations. Certification authorities and safety depend on honest assessments.</critical>

### 3. Document the Decision

Update the gate review report with the Decision section:

**Gate Review Decision:**

| Field | Value |
|-------|-------|
| **Decision** | PROCEED / PROCEED WITH CONDITIONS / DO NOT PROCEED |
| **Decision Date** | {{date}} |
| **Decision Rationale** | {summary of why this decision was made} |
| **Review Participants** | {list of participants} |

**If PROCEED WITH CONDITIONS:**
- List all conditions that must be met
- Reference the action items that address each condition
- Specify a timeline for condition resolution

**If DO NOT PROCEED:**
- List all FAIL findings that prevent proceeding
- Reference the P1 action items that must be resolved
- Specify what must change before re-review

### 4. Produce Final Summary

Create a final summary section with:

**Review Statistics:**

| Metric | Count |
|--------|-------|
| Total Criteria Reviewed | X |
| PASS | X |
| CONCERN | X |
| FAIL | X |
| Pass Rate | X% |

**Action Item Summary:**

| Priority | Count |
|----------|-------|
| P1 (FAIL Resolution) | X |
| P2 (CONCERN Resolution) | X |

**Decision Summary:**
- Gate Type: {PDR/TRR/QR/FQR}
- Decision: {PROCEED/PROCEED WITH CONDITIONS/DO NOT PROCEED}
- Key Risks: {top risks identified}
- Recommended Next Steps: {what happens next}

### 5. Finalize Document

Update the gate review report:

- Add the Decision section
- Add the Final Summary section
- Update frontmatter with `stepsCompleted: [1, 2, 3, 4, 5]` and `status: complete`
- Add a final review note with the date and participants

### 6. Present to User

Show the complete gate review decision and summary to the user and ask for final confirmation.

Ask the user:

1. Is the gate review decision fair and supported by the evidence?
2. Are all conditions and action items correctly documented?
3. Are the recommended next steps appropriate?
4. Any final adjustments before marking the report as complete?

## SUCCESS METRICS:

✅ Complete gate review report reviewed for internal consistency
✅ Gate review decision made based on findings (not desired outcome)
✅ Decision rationale clearly documented
✅ Conditions (if PROCEED WITH CONDITIONS) are specific and trackable
✅ Action items all have owners and resolution criteria
✅ Final summary statistics are accurate
✅ Frontmatter updated with `stepsCompleted: [1, 2, 3, 4, 5]` and `status: complete`
✅ User has confirmed the final decision

## FAILURE MODES:

❌ Making a decision that doesn't match the findings (e.g., PROCEED with FAIL findings)
❌ Vague conditions that can't be verified
❌ Missing action items for CONCERN/FAIL findings
❌ Marking the document complete without user confirmation
❌ Not updating frontmatter to reflect completion

❌ **CRITICAL**: Dishonest gate decisions — safety depends on honest assessments
❌ **CRITICAL**: Skipping the final review — the user must confirm
❌ **CRITICAL**: Not providing actionable next steps based on the decision

## NEXT STEP:

The gate review workflow is now complete. The user may:

- If **PROCEED**: Move to the next project phase
- If **PROCEED WITH CONDITIONS**: Address the P2 action items while proceeding
- If **DO NOT PROCEED**: Address the P1 action items and schedule a re-review

Document is finalized at `{planning_artifacts}/gate-review-report.md`.