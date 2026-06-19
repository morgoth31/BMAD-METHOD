# Step 5: Finalize Compliance Matrix

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete finalization
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between compliance analyst peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on finalization and summary only - the work is done, now we package it
- 🚫 FORBIDDEN to make changes to the matrix content without user approval
- ⚠️ ABSOLUTELY NO TIME ESTIMATES

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- 💾 Finalize document and update frontmatter
- 📖 Set up frontmatter `stepsCompleted: [1, 2, 3, 4, 5]` and `status: complete`
- 🚫 FORBIDDEN to mark as complete until user confirms

## CONTEXT BOUNDARIES:

- Variables from workflow.md are available in memory
- Previous context = what's in output document + frontmatter + all loaded input documents
- Rely on the complete compliance matrix built in steps 1-4
- This step is about finalization, not re-analysis

## YOUR TASK:

Finalize the compliance matrix document, produce a compliance summary, and recommend a gate review.

## FINALIZATION SEQUENCE:

### 1. Review Complete Compliance Matrix

Read through the entire compliance matrix document and verify:

- All objectives are mapped (no missing rows in the mapping table)
- All gaps are documented with severity classifications
- All remediation actions are specific and assigned
- The document is internally consistent (gap IDs referenced correctly, etc.)
- Frontmatter is accurate and complete

### 2. Produce Compliance Summary

Create a Compliance Summary section with the following metrics:

**Overall Compliance Metrics:**

| Metric | Value |
|--------|-------|
| Total Applicable Objectives | X |
| Objectives with FULL Evidence | X |
| Objectives with PARTIAL Evidence | X |
| Objectives with NOT_STARTED Evidence | X |
| Objectives marked NOT_APPLICABLE | X |
| Overall Compliance Percentage | X% |

**Gap Summary:**

| Severity | Count |
|----------|-------|
| CRITICAL | X |
| MAJOR | X |
| MODERATE | X |
| MINOR | X |
| OBSERVATION | X |

**Remediation Summary:**

| Priority | Count | Total Effort |
|----------|-------|---------------|
| P1 - CRITICAL | X | X |
| P2 - MAJOR | X | X |
| P3 - MODERATE | X | X |
| P4 - MINOR | X | X |
| P5 - OBSERVATION | X | X |

**Compliance Readiness Assessment:**

- **READY**: No CRITICAL or MAJOR gaps, compliance percentage ≥ 90%
- **ALMOST READY**: No CRITICAL gaps, MAJOR gaps have remediation plans, compliance percentage ≥ 70%
- **NOT READY**: CRITICAL gaps exist, or compliance percentage < 70%

### 3. Recommend Gate Review

Based on the compliance readiness assessment, recommend an appropriate next action:

- If READY: Recommend proceeding to certification submission gate review
- If ALMOST READY: Recommend proceeding with conditions — address P1/P2 items first
- If NOT READY: Recommend a remediation sprint before scheduling any gate review

Include specific recommendations for which gate review type is appropriate:
- **PDR** (Preliminary Design Review): If compliance gaps suggest design-level issues
- **TRR** (Test Readiness Review): If compliance gaps are primarily in V&V evidence
- **QR** (Qualification Review): If most evidence exists but needs formal verification
- **FQR** (Formal Qualification Review): If near-complete and ready for certification submission

### 4. Finalize Document

Update the compliance matrix document:

- Add the Compliance Summary section
- Update frontmatter with `stepsCompleted: [1, 2, 3, 4, 5]` and `status: complete`
- Add a final review note with the date and participants

### 5. Present to User

Show the complete compliance summary to the user and ask for final confirmation.

Ask the user:

1. Does the summary accurately reflect the compliance state?
2. Is the readiness assessment fair and honest?
3. Are the gate review recommendations appropriate?
4. Any final adjustments before marking the document as complete?

## SUCCESS METRICS:

✅ Complete compliance matrix document reviewed for internal consistency
✅ Compliance summary produced with accurate metrics
✅ Readiness assessment provided (READY / ALMOST READY / NOT READY)
✅ Gate review recommendation provided with justification
✅ Frontmatter updated with `stepsCompleted: [1, 2, 3, 4, 5]` and `status: complete`
✅ User has confirmed the final document

## FAILURE MODES:

❌ Inconsistent metrics (numbers don't add up)
❌ Readiness assessment that doesn't match the gap severity counts
❌ Recommending a gate review that's inappropriate for the compliance state
❌ Marking the document complete without user confirmation
❌ Not updating frontmatter to reflect completion

❌ **CRITICAL**: Misrepresenting compliance state — be honest even if the results are uncomfortable
❌ **CRITICAL**: Skipping the final review — the user must confirm
❌ **CRITICAL**: Not providing actionable next steps

## NEXT STEP:

The compliance matrix workflow is now complete. The user may:

- Proceed to the **bmad-gate-review** workflow to conduct the recommended gate review
- Return to address P1/P2 remediation actions first
- Update the compliance matrix as evidence is completed (re-run gap analysis)

Document is finalized at `{planning_artifacts}/compliance-matrix.md`.