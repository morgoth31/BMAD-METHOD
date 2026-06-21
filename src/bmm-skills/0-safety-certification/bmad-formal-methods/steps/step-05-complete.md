# Step 5: Finalize Formal Methods Verification Report

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete finalization
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between formal methods engineer and certification analyst peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on finalization and summary only - the work is done, now we package it
- 🚫 FORBIDDEN to make changes to the report content without user approval
- ⚠️ ABSOLUTELY NO TIME ESTIMATES

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- 💾 Finalize document and update frontmatter
- 📖 Set up frontmatter `stepsCompleted: [1, 2, 3, 4, 5]` and `status: complete`
- 🚫 FORBIDDEN to mark as complete until user confirms

## CONTEXT BOUNDARIES:

- Variables from workflow.md are available in memory
- Previous context = what's in output document + frontmatter + all loaded input documents
- Rely on the complete formal methods report built in steps 1-4
- This step is about finalization, not re-analysis

## YOUR TASK:

Finalize the Formal Methods Verification Report, produce a summary for the PSAC (Plan for Software Aspects of Certification), and ensure complete traceability.

## FINALIZATION SEQUENCE:

### 1. Review Complete Report

Read through the entire formal methods report document and verify:

- All formal properties are specified with complete fields (Step 2)
- All verification results are documented with outcomes (Step 3)
- All DO-178C objective mappings are complete (Step 4)
- All counterexample analyses are thorough (Step 3)
- All specification refinements are documented with rationale (Step 3)
- All independence analyses are complete (Step 4)
- The document is internally consistent (property IDs referenced correctly, etc.)
- Frontmatter is accurate and complete

### 2. Produce Verification Summary

Create a Formal Methods Verification Summary section with the following metrics:

**Specification Summary:**

| Metric | Value |
|--------|-------|
| Total Requirements Targeted for Formal Verification | X |
| Total Formal Properties Specified | X |
| Safety Properties | X |
| Liveness Properties | X |
| Invariants | X |
| Functional Correctness Properties | X |
| Unformalizable Requirements | X |

**Verification Results Summary:**

| Metric | Value |
|--------|-------|
| Total Properties Verified/Proved | X |
| Properties with Counterexamples (Genuine) | X |
| Properties with Counterexamples (Spurious) | X |
| Properties with Alarms (True) | X |
| Properties with Alarms (False) | X |
| Properties INCONCLUSIVE | X |
| Properties FAILED | X |
| Specification Refinements Applied | X |

**Certification Credit Summary:**

| Credit Level | Objectives |
|-------------|-----------:|
| FULL CREDIT | X |
| PARTIAL CREDIT | X |
| SUPPORTING EVIDENCE | X |
| NO CREDIT | X |

**Tool Qualification Summary:**

| Tool | Qualification Status |
|------|---------------------|
| {tool list} | {status per tool} |

**Independence Summary:**

| Metric | Value |
|--------|-------|
| Objectives with Independence Required | X |
| Objectives with Independence Satisfied | X |
| Independence Gaps | X |

### 3. Produce PSAC Summary

Create a summary section suitable for inclusion in the Plan for Software Aspects of Certification (PSAC):

**Formal Methods Section for PSAC:**

- **Method(s) Applied**: List the formal methods used (model checking, theorem proving, etc.)
- **Scope**: Which components and requirements were formally verified
- **Tools Used**: Tools and versions with qualification status
- **Results Summary**: Pass/fail/inconclusive counts
- **Certification Credit Claimed**: Summary of objectives where formal methods provide credit
- **Independence**: How independence requirements are addressed
- **Open Issues**: Any properties that are INCONCLUSIVE or FAILED, and planned resolution

<critical>The PSAC summary must be accurate and conservative. Certification authorities will scrutinize overclaims. When in doubt, claim less and plan for supplementary V&V.</critical>

### 4. Verify Traceability

Ensure complete traceability through the entire chain:

**Traceability Matrix:**

| Requirement ID | Formal Property ID | Verification Method | Result | DO-178C Objective | Credit Level |
|---------------|-------------------|--------------------:|--------|-------------------|-------------|

Verify that:
- Every formal property traces to a requirement
- Every verification result traces to a formal property
- Every DO-178C objective mapping traces to a verification result
- There are no orphan entries in any direction
- Gaps in traceability are explicitly noted

### 5. Finalize Document

Update the formal methods report:

- Add the Verification Summary section
- Add the PSAC Summary section
- Add the Traceability Matrix section
- Update frontmatter with `stepsCompleted: [1, 2, 3, 4, 5]` and `status: complete`
- Add a final review note with the date and participants

### 6. Present to User

Show the complete verification summary to the user and ask for final confirmation.

Ask the user:

1. Does the summary accurately reflect the formal verification work performed?
2. Is the PSAC summary conservative and accurate?
3. Is the traceability complete with no orphan entries?
4. Are there any final adjustments before marking the document as complete?
5. Does the user want to proceed to related workflows (e.g., compliance matrix update)?

## FINALIZATION RULES:

1. **Be Accurate**: Numbers must add up — verify all counts against the detailed sections
2. **Be Conservative**: In the PSAC summary, claim only what can be justified
3. **Be Complete**: No orphan entries — every ID should trace in both directions
4. **Be Honest**: If verification results are inconclusive, say so — don't hide failures
5. **Be Traceable**: Every statement in the PSAC summary should trace to a detailed section in the report

## SUCCESS METRICS:

✅ Complete formal methods report reviewed for internal consistency
✅ Verification summary produced with accurate metrics
✅ PSAC summary produced with conservative and accurate claims
✅ Traceability matrix is complete with no orphan entries
✅ Frontmatter updated with `stepsCompleted: [1, 2, 3, 4, 5]` and `status: complete`
✅ User has confirmed the final document

## FAILURE MODES:

❌ Inconsistent metrics (numbers don't add up across sections)
❌ PSAC summary that overclaims certification credit
❌ Broken traceability (orphan property or requirement IDs)
❌ Marking the document complete without user confirmation
❌ Not updating frontmatter to reflect completion

❌ **CRITICAL**: Misrepresenting verification results — be honest even if results are not as expected
❌ **CRITICAL**: Skipping the final review — the user must confirm
❌ **CRITICAL**: Not providing actionable next steps for open issues

## NEXT STEP:

The formal methods workflow is now complete. The user may:

- Proceed to the **bmad-compliance-matrix** workflow to update the compliance matrix with formal methods credit
- Proceed to the **bmad-gate-review** workflow to conduct a review of the formal verification results
- Return to address INCONCLUSIVE or FAILED properties
- Update the formal methods report as verification work continues

Document is finalized at `{planning_artifacts}/formal-methods-verification-report.md`.