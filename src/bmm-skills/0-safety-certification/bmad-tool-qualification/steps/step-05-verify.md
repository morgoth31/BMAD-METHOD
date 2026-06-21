# Step 5: Independent Verification and Coverage Evaluation

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete verification
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between tool qualification peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on independent verification and coverage evaluation only - report finalization happens in the next step
- 🚫 FORBIDDEN to approve results without thorough review
- ⚠️ ABSOLUTELY NO TIME ESTIMATES

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- 💾 Update document and frontmatter as you verify results
- 📖 Set up frontmatter `stepsCompleted: [1, 2, 3, 4, 5]` before loading next step
- 🚫 FORBIDDEN to load next step until verification is complete

## CONTEXT BOUNDARIES:

- Variables from workflow.md are available in memory
- Previous context = what's in output document + frontmatter + loaded input documents
- All previous steps (identification, criteria, planning, execution) are the foundation
- Don't re-execute tests in this step — verify the execution results

## YOUR TASK:

Perform independent review and verification of the qualification results from step-04, validate the completeness and correctness of the evidence, and evaluate coverage adequacy.

## VERIFICATION SEQUENCE:

### 1. Independence Assessment

Determine the independence requirements for verification:

| Criteria Level | DAL | Independence Required |
|---------------|-----|----------------------|
| CR-1 | Any | Independent review of verification procedure |
| CR-2 | Any | Independent review of analysis |
| CR-3 | A, B | Independent verification of test results |
| CR-3 | C, D | Review (not necessarily independent) |
| CR-4 | A, B | Independent verification required |
| CR-4 | C | Independent verification recommended |
| CR-4 | D | Review required |
| CR-5 | A, B | Independent verification required |
| CR-5 | C | Independent verification recommended |
| CR-5 | D | Review required |

<critical>Independence means the verifier must not be the same person who performed the original test or analysis. For this workflow, discuss with the user who can serve as the independent verifier.</critical>

### 2. Review Qualification Execution Results

Perform a thorough review of the execution results from step-04:

**Review Checklist:**

- [ ] All planned qualification activities were executed
- [ ] Test results are complete and unambiguous (PASS/FAIL/CONDITIONAL/N/A)
- [ ] Each test result has documented evidence
- [ ] Coverage analysis is complete and meets criteria level requirements
- [ ] All anomalies are documented with impact assessment
- [ ] Anomaly resolutions are adequate and documented
- [ ] TOR verification matrix is complete and traces to evidence
- [ ] Tool version is consistent throughout all qualification data
- [ ] Configuration items are properly identified and controlled

**Review Findings:**
For each review item, document:
- **Finding ID**: Unique identifier (RF-{n})
- **Category**: Completeness | Correctness | Consistency | Traceability
- **Description**: What was found
- **Severity**: CRITICAL | MAJOR | MINOR | OBSERVATION
- **Resolution**: What needs to be done (if anything)

<critical>Be thorough and honest. Review findings are not failures — they are opportunities to strengthen the qualification evidence.</critical>

### 3. Validate Results

Validate that the qualification results are correct and complete:

**Validation Checks:**

**A. Completeness Validation:**
- All TOR requirements have verification evidence
- All test cases from the TQP have been executed
- All planned activities have been completed
- Coverage analysis covers all applicable areas

**B. Correctness Validation:**
- Test results accurately reflect tool behavior
- Analysis conclusions are logically sound
- Anomaly assessments are appropriate
- TOR verification status is accurate

**C. Consistency Validation:**
- Tool version is consistent across all qualification data
- Test environment matches the TQP specification
- Configuration items are consistently identified
- Cross-references between documents are correct

**D. Traceability Validation:**
- Every test case traces to one or more TOR requirements
- Every TOR requirement traces to verification evidence
- Anomaly reports trace to affected test cases and TOR requirements
- Coverage gaps are identified and explained

### 4. Evaluate Coverage

Assess the adequacy of qualification coverage:

**Requirements Coverage:**

| Coverage Metric | Value | Target | Status |
|----------------|-------|--------|--------|
| TOR requirements verified | {n}/{total} | 100% | {PASS/FAIL} |
| TOR requirements with PASS | {n}/{total} | 100% | {PASS/FAIL} |
| TOR requirements with FAIL | {n}/{total} | 0% | {PASS/FAIL} |
| TOR requirements with N/A | {n}/{total} | Justified | {PASS/FAIL} |

**Structural Coverage (for CR-3, CR-4, CR-5):**

| Coverage Type | Achieved | Required | Status |
|--------------|----------|----------|--------|
| Statement coverage | {percentage}% | {target}% | {PASS/FAIL} |
| Decision coverage | {percentage}% | {target}% | {PASS/FAIL} |
| MC/DC coverage | {percentage}% | {target}% | {PASS/FAIL} |

<critical>If coverage is insufficient, document the gaps and determine what additional testing is needed. Do not proceed if coverage targets are not met.</critical>

### 5. Review Findings Resolution

Address all review findings:

**For each finding:**
- **CRITICAL findings**: Must be resolved before proceeding
- **MAJOR findings**: Must be resolved or have an approved disposition
- **MINOR findings**: Should be resolved; disposition required if not resolved
- **OBSERVATION findings**: Documented for information; no resolution required

**Disposition Options:**
1. **Resolved**: Finding addressed and evidence updated
2. **Accepted Risk**: Risk assessment documented; authority concurrence needed
3. **Deferred**: Finding will be addressed later (requires justification)
4. **Not Applicable**: Finding does not apply (requires justification)

### 6. Document Verification Results

Update the Tool Qualification Report with the verification section:

- **Independence Assessment**: Who performed verification and their independence
- **Review Findings**: Complete findings table
- **Validation Results**: Completeness, correctness, consistency, traceability checks
- **Coverage Evaluation**: Requirements and structural coverage metrics
- **Findings Resolution**: Disposition of all findings
- **Verification Conclusion**: Overall assessment of qualification adequacy

<critical>The verification section must present an honest assessment. If there are unresolved issues, they must be clearly documented rather than hidden.</critical>

### 7. Verification Summary

Report to the user:

**Independent Verification Summary:**
- Independence Level: {level}
- Review Findings: {total} findings ({critical} CRITICAL, {major} MAJOR, {minor} MINOR, {obs} OBSERVATION)
- Findings Resolved: {resolved} of {total}
- Validation Status: Completeness {status}, Correctness {status}, Consistency {status}, Traceability {status}
- Requirements Coverage: {percentage}% ({pass} PASS, {fail} FAIL, {na} N/A)
- Structural Coverage: {percentage}% (if applicable)
- Overall Verification Conclusion: {ADEQUATE / ADEQUATE WITH RESERVATIONS / NOT ADEQUATE}

**STOP**: If the overall verification conclusion is NOT ADEQUATE, additional work is required before proceeding. Discuss with the user what additional activities are needed.

Confirm with the user that the verification is complete and results are adequate before proceeding.

## VERIFICATION RULES:

1. **Independent**: Verification must be performed by someone other than the original executor
2. **Thorough**: Review every aspect of the qualification evidence
3. **Honest**: Report all findings, including uncomfortable ones
4. **Complete**: Don't skip validation checks
5. **Traceable**: Document all review findings and their resolution

## SUCCESS METRICS:

✅ Independence assessment documented
✅ All review findings documented with severity
✅ Validation checks completed for all four categories
✅ Coverage evaluation complete with metrics
✅ All CRITICAL findings resolved
✅ All MAJOR findings resolved or dispositioned
✅ Verification section populated in qualification report
✅ User has reviewed and confirmed verification results
✅ Overall verification conclusion is ADEQUATE (or ADEQUATE WITH RESERVATIONS)
✅ Frontmatter updated with `stepsCompleted: [1, 2, 3, 4, 5]`

## FAILURE MODES:

❌ Skipping independence requirements
❌ Not documenting review findings
❌ Accepting insufficient coverage
❌ Proceeding with unresolved CRITICAL findings
❌ Not performing validation checks
❌ Not updating frontmatter progress

❌ **CRITICAL**: Reading only partial step file - leads to incomplete verification
❌ **CRITICAL**: Claiming ADEQUATE when coverage is insufficient
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file

## NEXT STEP:

After user confirms verification results are adequate and selects [C] to continue, load `./step-06-complete.md` to finalize the Tool Qualification Report.