# Step 4: Execute Qualification Tests and Analysis

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete execution
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between tool qualification peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on test execution and analysis only - independent verification happens in the next step
- 🚫 FORBIDDEN to mark tests as passed without evidence
- ⚠️ ABSOLUTELY NO TIME ESTIMATES

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- 💾 Update document and frontmatter as you execute and analyze
- 📖 Set up frontmatter `stepsCompleted: [1, 2, 3, 4]` before loading next step
- 🚫 FORBIDDEN to load next step until execution and analysis are complete

## CONTEXT BOUNDARIES:

- Variables from workflow.md are available in memory
- Previous context = what's in output document + frontmatter + loaded input documents
- Tool identification (step-01), criteria (step-02), and TQP (step-03) are the foundation
- Don't re-plan in this step — execute the plan

## YOUR TASK:

Execute the qualification activities defined in the TQP (step-03): run qualification tests, analyze results, verify tool requirements, and handle anomalies.

## EXECUTION SEQUENCE:

### 1. Review the TQP

Before executing, confirm the TQP is current and complete:

- Review the qualification activities defined in step-03
- Confirm the verification strategy and test approach
- Ensure TOR is still accurate and complete
- Verify the tool version hasn't changed since planning

<critical>If the tool version has changed or the TOR needs updating, STOP and update the TQP before proceeding. Qualification must be against a specific, identified tool version.</critical>

### 2. Execute Qualification Activities

Based on the criteria level, execute the planned activities:

**For CR-1:**
- Document the independent verification procedure for each tool use
- Verify that the verification procedure is adequate to detect tool errors
- Record results

**For CR-2:**
- Execute the analysis demonstrating tool errors cannot affect airworthiness
- Document the analysis approach and results
- Verify that the analysis is complete and correct

**For CR-3:**
- Execute functional test cases (normal range)
- Execute robustness test cases (boundary and invalid inputs)
- Record test results with pass/fail status
- Analyze structural coverage (if required)

**For CR-4:**
- Execute all functional and structural test cases
- Perform requirements-based testing
- Perform structural coverage analysis
- Perform validation testing
- Record all results

**For CR-5:**
- Execute functional test cases demonstrating correct automation
- Execute robustness test cases
- Analyze structural coverage
- Demonstrate that tool output can be trusted for certification credit
- Record all results

### 3. Analyze Test Results

For each test or analysis activity:

**Test Result Classification:**
| Result | Definition |
|--------|-----------|
| **PASS** | Test produced expected results; tool behaves correctly |
| **FAIL** | Test did not produce expected results; tool anomaly identified |
| **CONDITIONAL PASS** | Test mostly passed with minor deviations documented |
| **NOT APPLICABLE** | Test not relevant for this tool/configuration |

**Coverage Analysis (for CR-3, CR-4, CR-5):**
- Requirements coverage: percentage of TOR requirements with passing tests
- Structural coverage: percentage of tool structure exercised (if applicable)
- Identify uncovered requirements and uncovered structure

<critical>Discuss each test result with the user. Do not assume PASS without confirmed evidence. FAIL results are not necessarily blockers — they need to be analyzed for impact.</critical>

### 4. Anomaly Analysis

For each test failure or unexpected behavior:

**Anomaly Documentation:**
- **Anomaly ID**: Unique identifier (AN-{n})
- **Related Test**: Which test case identified the anomaly
- **Related TOR**: Which operational requirement is affected
- **Description**: What went wrong, what was expected vs. what was observed
- **Impact Assessment**: Does this anomaly affect the tool's ability to perform its qualified function?
- **Severity**: CRITICAL | MAJOR | MINOR | OBSERVATION
- **Resolution**: Workaround, tool fix, qualification limitation, or accepted risk

**Anomaly Resolution Options:**
1. **Fix the Tool**: Correct the anomaly and re-qualify
2. **Workaround**: Document a procedural workaround and re-test
3. **Qualification Limitation**: Document the limitation in the Tool Qualification Report
4. **Accepted Risk**: Formal risk assessment and acceptance (requires DER/authority concurrence)

<critical>Never hide anomalies. Every failure must be documented, analyzed, and resolved before the qualification can be considered complete.</critical>

### 5. Verify Tool Operational Requirements

For each TOR requirement, verify that it has been satisfied:

| TOR ID | Requirement | Verification Method | Evidence | Status |
|--------|-------------|--------------------|----------|--------|
| TOR-01 | {requirement} | {method} | {evidence} | PASS/FAIL/N/A |

**Verification Methods:**
- **Test**: Verified through qualification testing
- **Analysis**: Verified through logical/analytical demonstration
- **Review**: Verified through examination of documentation
- **Demonstration**: Verified through operational demonstration
- **Not Applicable**: Requirement does not apply to this qualification

### 6. Document Execution Results

Update the Tool Qualification Report with the execution section:

- **Test Results**: Complete test results table
- **Coverage Analysis**: Requirements and structural coverage summary
- **Anomaly Report**: All anomalies with resolution
- **TOR Verification Matrix**: Requirements-to-evidence traceability
- **Execution Summary**: Overall pass/fail statistics

<critical>Review each result with the user. The execution evidence must be complete and accurate before independent verification (step-05).</critical>

### 7. Execution Summary

Report to the user:

**Qualification Execution Summary:**
- Qualification Activities Executed: {count}
- Test Cases Executed: {count}
- Test Results: {pass count} PASS, {fail count} FAIL, {conditional count} CONDITIONAL, {na count} N/A
- Requirements Coverage: {percentage}% of TOR requirements verified
- Structural Coverage: {percentage}% (if applicable)
- Anomalies: {count} total ({critical} CRITICAL, {major} MAJOR, {minor} MINOR)
- Anomalies Resolved: {count} of {total}

Confirm with the user that the execution results are complete and anomalies are adequately resolved before proceeding.

## EXECUTION RULES:

1. **Evidence-Based**: Every claim must be backed by test results or analysis
2. **Honest**: Report failures, don't hide them
3. **Traceable**: Every result traces back to a TOR requirement
4. **Complete**: Don't skip planned activities
5. **Version-Specific**: All results must be for the identified tool version

## SUCCESS METRICS:

✅ All planned qualification activities executed
✅ Test results documented with pass/fail/conditional status
✅ Coverage analysis completed (for CR-3, CR-4, CR-5)
✅ All anomalies documented, analyzed, and resolved
✅ TOR verification matrix complete with evidence
✅ Execution section populated in qualification report
✅ User has reviewed and confirmed execution results
✅ Frontmatter updated with `stepsCompleted: [1, 2, 3, 4]`

## FAILURE MODES:

❌ Marking tests as PASS without evidence
❌ Hiding or downplaying anomalies
❌ Not completing all planned qualification activities
❌ Not tracing results back to TOR requirements
❌ Proceeding without resolving CRITICAL anomalies
❌ Not updating frontmatter progress

❌ **CRITICAL**: Reading only partial step file - leads to incomplete execution
❌ **CRITICAL**: Claiming PASS without documented test evidence
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file

## NEXT STEP:

After user confirms execution results and selects [C] to continue, load `./step-05-verify.md` for independent verification and coverage evaluation.