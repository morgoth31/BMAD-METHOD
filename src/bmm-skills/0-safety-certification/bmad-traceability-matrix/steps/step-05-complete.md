# Step 5: Finalize Traceability Report

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative analysis between certification peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on final report production only - don't look ahead to future steps
- ⚠️ ABSOLUTELY NO TIME ESTIMATES

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- 💾 Finalize document with coverage statistics and remediation recommendations
- 📖 Set up frontmatter `stepsCompleted: [1, 2, 3, 4, 5]` and `status: complete`
- 🚫 FORBIDDEN to proceed further until report is finalized and user confirms

## CONTEXT BOUNDARIES:

- Variables from workflow.md and steps 1-4 are available in memory
- Previous context = what's in output document + frontmatter
- Orphan analysis from step-04 is the basis for remediation
- Don't assume knowledge from other steps

## YOUR TASK:

Finalize the traceability report with coverage statistics, compliance determination, and remediation recommendations for all identified orphans.

## REPORT FINALIZATION SEQUENCE:

### 1. Calculate Traceability Coverage Statistics

Compute coverage metrics for each artifact layer:

**Layer Coverage Metrics:**

```markdown
## Coverage Statistics

### Per-Layer Traceability Coverage

| Layer | Total Artifacts | Forward-Traced | Reverse-Traced | Bidirectional | Forward % | Reverse % | Bidirectional % |
|-------|---------------|---------------|---------------|--------------|-----------|-----------|----------------|
| Hazards | [n] | [n] | [n] | [n] | [p%] | [p%] | [p%] |
| Safety Requirements | [n] | [n] | [n] | [n] | [p%] | [p%] | [p%] |
| SW Requirements | [n] | [n] | [n] | [n] | [p%] | [p%] | [p%] |
| Design Elements | [n] | [n] | [n] | [n] | [p%] | [p%] | [p%] |
| Source Code | [n] | [n] | [n] | [n] | [p%] | [p%] | [p%] |
| Test Cases | [n] | [n] | [n] | [n] | [p%] | [p%] | [p%] |
| Test Results | [n] | [n] | [n] | [n] | [p%] | [p%] | [p%] |

### End-to-End Traceability

- **Complete chains (Hazard → Test Result):** [n] / [total hazards] = [p%]
- **Partial chains (missing one layer):** [n]
- **Broken chains (missing multiple layers):** [n]
- **Untraced hazards:** [n]
```

**DO-178C Compliance Thresholds:**
- DAL A: 100% bidirectional traceability required
- DAL B: 100% bidirectional traceability required
- DAL C: Forward traceability required, reverse recommended
- DAL D: Forward traceability recommended

### 2. Produce Remediation Recommendations

For every orphan (Genuine Orphan and Documentation Gap from step-04):

```markdown
### Remediation Recommendations

| Orphan ID | Type | Artifact | Recommended Action | Priority | Effort |
|-----------|------|----------|-------------------|----------|--------|
| FO-001 | Hazard without SR | H-003 | Create safety requirement to mitigate hazard | Critical | Medium |
| FO-002 | SR without SWR | SR-005 | Document trace to existing SWR or create new SWR | Critical | Low |
| RO-001 | Code without design | SC-util | Add design documentation reference | High | Low |
```

**Recommended Actions:**
- **Create Missing Artifact:** A required artifact doesn't exist (e.g., safety requirement for a hazard)
- **Document Existing Trace:** The trace exists in reality but isn't documented
- **Add Test Verification:** Code exists without test verification
- **Remove Orphan Artifact:** Artifact should not exist and should be removed
- **Scope Justification:** Document why artifact is intentionally out of traceability scope

### 3. Compliance Determination Statement

Add a formal compliance determination:

```markdown
## Compliance Assessment

### Overall Traceability Determination: [PASS / PASS WITH JUSTIFICATION / FAIL]

**DO-178C Traceability Compliance:**
- [ ] Complete forward traceability (hazards → test results)
- [ ] Complete reverse traceability (test results → hazards)
- [ ] All orphans classified and justified
- [ ] Genuine orphans have remediation plans
- [ ] Scope decisions documented with DER approval
- [ ] Bidirectional consistency verified

**Coverage Statistics:**
- Overall forward traceability: [p%]
- Overall reverse traceability: [p%]
- Overall bidirectional traceability: [p%]
- Hazard-to-test end-to-end: [p%]

**Open Items:**
[List any open items requiring resolution before certification submission]
```

### 4. Finalize Report Document

Ensure the traceability report document contains all sections:

1. **Frontmatter** — Complete metadata including all steps completed
2. **Forward Traceability** — From step-02
3. **Reverse Traceability** — From step-03
4. **Orphan Analysis** — From step-04
5. **Coverage Statistics** — New in this step
6. **Remediation Recommendations** — New in this step
7. **Compliance Assessment** — New in this step

Update frontmatter:
```yaml
stepsCompleted: [1, 2, 3, 4, 5]
status: complete
totalArtifacts: [n]
forwardCoverage: [p%]
reverseCoverage: [p%]
bidirectionalCoverage: [p%]
orphanCount: [n]
overallStatus: [PASS/PASS_WITH_JUSTIFICATION/FAIL]
```

### 5. Present Final Report to User

Show the complete compliance assessment and ask:

"The Traceability Matrix analysis is complete. Here's the final determination:

**Overall Status:** [PASS/PASS WITH JUSTIFICATION/FAIL]

**Coverage Statistics:**
- Forward traceability: [p%]
- Reverse traceability: [p%]
- Bidirectional traceability: [p%]
- Hazard-to-test end-to-end: [p%]

**Orphan Summary:**
- [n] genuine orphans requiring remediation
- [n] documentation gaps requiring trace creation
- [n] scope decisions requiring justification
- [n] errors requiring correction

**Remediation Summary:**
- [n] artifacts to create
- [n] traces to document
- [n] justifications to prepare
- [n] corrections to make

The complete report has been saved to `{planning_artifacts}/traceability-report.md`.

Would you like to:
[R] Review the complete report
[C] Confirm and close the workflow
[A] Add any amendments or corrections"

## SUCCESS METRICS:

✅ Coverage statistics calculated for every artifact layer
✅ Forward, reverse, and bidirectional percentages computed
✅ End-to-end traceability (hazard → test result) percentage computed
✅ Remediation recommendations provided for every genuine orphan and documentation gap
✅ Compliance determination statement includes all required checkboxes
✅ Report frontmatter updated with final status and statistics
✅ User confirmed the final report

## FAILURE MODES:

❌ Leaving artifact layers without coverage metrics
❌ Not providing remediation for genuine orphans
❌ Not requiring justification for scope decisions
❌ Marking FAIL as PASS — traceability must be honestly assessed
❌ Proceeding without user confirming the final report

❌ **CRITICAL**: Reading only partial step file - leads to incomplete report
❌ **CRITICAL**: Not including the formal DO-178C compliance determination
❌ **CRITICAL**: Allowing unjustified orphan artifacts to pass — this is a certification risk

## NEXT STEP:

This is the final step. After user confirms [C], the workflow is complete. The traceability report at `{planning_artifacts}/traceability-report.md` is the deliverable.