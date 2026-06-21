# Step 5: Finalize ECSS Compliance Matrix

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete finalization
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between ECSS compliance analyst peers
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
- Rely on the complete ECSS compliance matrix built in steps 1-4
- This step is about finalization, not re-analysis

## YOUR TASK:

Finalize the ECSS compliance matrix document, produce a compliance summary, and recommend next steps including appropriate review milestones.

## FINALIZATION SEQUENCE:

### 1. Review Complete ECSS Compliance Matrix

Read through the entire ECSS compliance matrix document and verify:

- All ECSS objectives are mapped (no missing rows in the mapping table)
- All objectives are grouped correctly by standard (E-ST-40C, Q-ST-80C, Q-ST-20C)
- All gaps are documented with severity classifications
- All remediation actions are specific and assigned
- Criticality tailoring is consistent throughout
- Cross-standard dependencies are noted (e.g., E40-16 ↔ Q-ST-80C)
- The document is internally consistent (gap IDs referenced correctly, etc.)
- Frontmatter is accurate and complete

### 2. Produce Compliance Summary

Create a Compliance Summary section with the following metrics:

**Overall Compliance Metrics:**

| Metric | Value |
|--------|-------|
| Total Applicable ECSS Objectives | X |
| Objectives with FULL Evidence | X |
| Objectives with PARTIAL Evidence | X |
| Objectives with NOT_STARTED Evidence | X |
| Objectives marked NOT_APPLICABLE | X |
| Overall Compliance Percentage | X% |

**Per-Standard Compliance:**

| Standard | Total | FULL | PARTIAL | NOT_STARTED | N/A | Compliance % |
|----------|-------|------|---------|-------------|-----|--------------|
| E-ST-40C | X | X | X | X | X | X% |
| Q-ST-80C | X | X | X | X | X | X% |
| Q-ST-20C | X | X | X | X | X | X% |

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
|----------|-------|--------------|
| P1 - CRITICAL | X | X |
| P2 - MAJOR | X | X |
| P3 - MODERATE | X | X |
| P4 - MINOR | X | X |
| P5 - OBSERVATION | X | X |

**Compliance Readiness Assessment:**

- **READY**: No CRITICAL or MAJOR gaps, compliance percentage ≥ 90%
- **ALMOST READY**: No CRITICAL gaps, MAJOR gaps have remediation plans, compliance percentage ≥ 70%
- **NOT READY**: CRITICAL gaps exist, or compliance percentage < 70%

### 3. Recommend Next Steps

Based on the compliance readiness assessment, recommend appropriate next actions:

**ECSS Review Milestones:**

- **SRR** (System Requirements Review): If compliance gaps suggest requirements-level issues
- **PDR** (Preliminary Design Review): If compliance gaps suggest design-level issues
- **TRR** (Test Readiness Review): If compliance gaps are primarily in V&V evidence
- **QR** (Qualification Review): If most evidence exists but needs formal verification per ECSS
- **FQR** (Formal Qualification Review): If near-complete and ready for ECSS compliance submission
- **AR** (Acceptance Review): If compliance is substantially complete and ready for customer acceptance

**General Recommendations:**

- If READY: Recommend proceeding to formal ECSS compliance submission
- If ALMOST READY: Recommend proceeding with conditions — address P1/P2 items first
- If NOT READY: Recommend a remediation sprint before scheduling any review milestone

### 4. Finalize Document

Update the ECSS compliance matrix document:

- Add the Compliance Summary section
- Update frontmatter with `stepsCompleted: [1, 2, 3, 4, 5]` and `status: complete`
- Add a final review note with the date, participants, and software criticality category

### 5. Present to User

Show the complete compliance summary to the user and ask for final confirmation.

Ask the user:

1. Does the summary accurately reflect the ECSS compliance state?
2. Is the readiness assessment fair and honest?
3. Are the review milestone recommendations appropriate?
4. Is the criticality category assignment still correct?
5. Any final adjustments before marking the document as complete?

## SUCCESS METRICS:

✅ Complete ECSS compliance matrix document reviewed for internal consistency
✅ Compliance summary produced with accurate metrics per ECSS standard
✅ Readiness assessment provided (READY / ALMOST READY / NOT READY)
✅ Review milestone recommendation provided with justification
✅ Cross-standard dependencies verified
✅ Criticality category confirmed
✅ Frontmatter updated with `stepsCompleted: [1, 2, 3, 4, 5]` and `status: complete`
✅ User has confirmed the final document

## FAILURE MODES:

❌ Inconsistent metrics (numbers don't add up)
❌ Readiness assessment that doesn't match the gap severity counts
❌ Recommending a review milestone that's inappropriate for the compliance state
❌ Not verifying cross-standard dependency consistency
❌ Marking the document complete without user confirmation
❌ Not updating frontmatter to reflect completion

❌ **CRITICAL**: Misrepresenting compliance state — be honest even if the results are uncomfortable
❌ **CRITICAL**: Skipping the final review — the user must confirm
❌ **CRITICAL**: Not providing actionable next steps

## NEXT STEP:

The ECSS compliance matrix workflow is now complete. The user may:

- Proceed to the **bmad-gate-review** workflow to conduct the recommended review milestone
- Return to address P1/P2 remediation actions first
- Update the compliance matrix as evidence is completed (re-run gap analysis)
- Use the matrix as input for ECSS compliance submissions to ESA or national agencies

Document is finalized at `{planning_artifacts}/ecss-compliance-matrix.md`.