# Step 5: Complete Coverage Report

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
- 💾 Finalize document with compliance assessment
- 📖 Set up frontmatter `stepsCompleted: [1, 2, 3, 4, 5]` and `status: complete`
- 🚫 FORBIDDEN to proceed further until report is finalized and user confirms

## CONTEXT BOUNDARIES:

- Variables from workflow.md and steps 1-4 are available in memory
- Previous context = what's in output document + frontmatter
- Gap analysis from step-04 is the basis for remediation
- Don't assume knowledge from other steps

## YOUR TASK:

Produce the final coverage report with pass/fail assessment per DAL requirement, compliance determination, and remediation recommendations for all identified gaps.

## REPORT FINALIZATION SEQUENCE:

### 1. Compile Compliance Assessment

For each module, determine final pass/fail status:

**Pass Criteria:**
- **DAL A (MCDC):** 100% of conditions independently verified, 100% of decision outcomes taken, 100% of statements executed — OR justified gaps accepted
- **DAL B (DC):** 100% of decision outcomes taken (True and False), 100% of statements executed — OR justified gaps accepted
- **DAL C (SC):** 100% of statements executed — OR justified gaps accepted
- **DAL D (SC):** 100% of statements executed — OR justified gaps accepted

**Assessment per module:**
- **PASS:** All coverage targets met, no unjustified gaps
- **PASS WITH JUSTIFICATION:** Coverage targets met after accepting justified exclusions
- **FAIL:** Unjustified gaps remain that prevent meeting coverage targets

### 2. Produce Remediation Recommendations

For every Category A gap (reachable, uncovered code), provide:

```markdown
### Remediation Recommendations

| Gap ID | Module | Gap Description | Recommended Action | Priority | Estimated Complexity |
|--------|--------|-----------------|-------------------|----------|---------------------|
| GAP-001 | [module] | [description] | [Add test / Modify test / Structural analysis] | [Critical/High/Medium/Low] | [Low/Medium/High] |
```

**Recommended Actions:**
- **Add Test Case:** New test case needed to exercise uncovered element
- **Modify Existing Test:** Extend existing test to cover additional outcome
- **Structural Analysis:** Replace coverage with formal analysis (requires DER approval)
- **Code Removal:** Remove dead code and re-run coverage analysis
- **Justification Package:** Prepare formal justification for uncovered code (requires DER approval)

### 3. Finalize Coverage Report

Ensure the coverage report document contains all sections:

1. **Frontmatter** — Complete metadata including all steps completed
2. **Coverage Configuration** — From step-02
3. **Results Summary** — From step-03
4. **Uncovered Code Analysis** — From step-04
5. **Compliance Assessment** — New in this step
6. **Remediation Recommendations** — New in this step

Update frontmatter:
```yaml
stepsCompleted: [1, 2, 3, 4, 5]
status: complete
totalModules: [n]
passingModules: [n]
failingModules: [n]
overallStatus: [PASS/PASS_WITH_JUSTIFICATION/FAIL]
```

### 4. Compliance Determination Statement

Add a formal compliance determination:

```markdown
## Compliance Assessment

### Overall Determination: [PASS / PASS WITH JUSTIFICATION / FAIL]

**Summary:**
- Total modules analyzed: [n]
- Modules passing: [n] ([percentage]%)
- Modules passing with justification: [n] ([percentage]%)
- Modules failing: [n] ([percentage]%)

**DO-178C Compliance:**
- [ ] All structural coverage objectives met for assigned DAL
- [ ] All uncovered code justified and accepted
- [ ] Alternative verification methods documented for non-deterministic code
- [ ] Coverage data integrity verified (checksums match)

**Open Items:**
[List any open items requiring resolution before certification submission]
```

### 5. Present Final Report to User

Show the complete compliance assessment and ask:

"The Structural Coverage Analysis is complete. Here's the final determination:

**Overall Status:** [PASS/PASS WITH JUSTIFICATION/FAIL]

- [n] modules passing coverage requirements
- [n] modules passing with accepted justifications
- [n] modules requiring remediation

**Remediation Summary:**
- [n] test cases to add
- [n] test cases to modify
- [n] justification packages to prepare
- [n] dead code items to remove

The complete report has been saved to `{planning_artifacts}/coverage-report.md`.

Would you like to:
[R] Review the complete report
[C] Confirm and close the workflow
[A] Add any amendments or corrections"

## SUCCESS METRICS:

✅ Compliance assessment produced for every module with pass/fail determination
✅ Remediation recommendations provided for every Category A gap
✅ Justification status documented for every Category B/C/D gap
✅ Overall compliance determination statement includes all required checkboxes
✅ Report frontmatter updated with final status and statistics
✅ User confirmed the final report

## FAILURE MODES:

❌ Leaving modules without a pass/fail determination
❌ Not providing remediation recommendations for Category A gaps
❌ Not documenting justification status for excluded code
❌ Marking FAIL as PASS — each module must honestly assessed
❌ Proceeding without user confirming the final report

❌ **CRITICAL**: Reading only partial step file - leads to incomplete report
❌ **CRITICAL**: Not including the formal DO-178C compliance determination
❌ **CRITICAL**: Allowing unjustified coverage gaps to pass — this is a certification risk

## NEXT STEP:

This is the final step. After user confirms [C], the workflow is complete. The coverage report at `{planning_artifacts}/coverage-report.md` is the deliverable.