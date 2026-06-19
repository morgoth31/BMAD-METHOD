# Step 3: Build Reverse Traceability

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative analysis between certification peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on reverse traceability only - don't look ahead to future steps
- ⚠️ ABSOLUTELY NO TIME ESTIMATES

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- 💾 Update document frontmatter and append reverse traceability section
- 📖 Set up frontmatter `stepsCompleted: [1, 2, 3]` before loading next step
- 🚫 FORBIDDEN to load next step until reverse traceability is complete and user confirms

## CONTEXT BOUNDARIES:

- Variables from workflow.md and steps 1-2 are available in memory
- Previous context = what's in output document + frontmatter
- Forward traceability from step-02 provides the basis for reverse verification
- Don't assume knowledge from other steps

## YOUR TASK:

Build the reverse traceability chain linking all artifacts from test results back to hazards. Reverse traceability answers: "For every test result, which test case, source code, design element, software requirement, safety requirement, and hazard does it trace back to?"

## REVERSE TRACEABILITY SEQUENCE:

### 1. Build Reverse Trace from Forward Trace

Starting from the forward traceability built in step-02, invert the direction:

**Layer 7 → Layer 1 (Results → Hazards):**

For each test result (TR-xxx):
- Identify the test case (TC-xxx) that produced it
- Identify the source code (SC-xxx) the test case exercises
- Identify the design element (DE-xxx) the source code implements
- Identify the software requirement (SWR-xxx) the design element satisfies
- Identify the safety requirement (SR-xxx) the SW requirement derives from
- Identify the hazard (H-xxx) the safety requirement addresses

### 2. Build Reverse Traceability Table

Create a comprehensive reverse traceability table:

```markdown
## Reverse Traceability

### Test Result → Test Case → Source Code → Design → SW Requirement → Safety Req → Hazard

| Test Result | Test Case | Source Code | Design Element | SW Requirement | Safety Req | Hazard | Status |
|-------------|-----------|-------------|---------------|---------------|-----------|--------|--------|
| TR-001 | TC-001 | SC-moduleA | DE-001 | SWR-001 | SR-001 | H-001 | ✅ Complete |
| TR-002 | TC-002 | SC-moduleA | DE-001 | SWR-001 | SR-001 | H-001 | ✅ Complete |
| TR-003 | TC-003 | SC-moduleB | DE-002 | SWR-002 | SR-002 | H-002 | ⚠️ Failed |
```

### 3. Verify Reverse Trace Completeness

For each layer, verify that every item has at least one reverse link:

**Completeness Checks:**
- Every test result → a test case?
- Every test case → source code?
- Every source code unit → a design element?
- Every design element → a software requirement?
- Every software requirement → a safety requirement?
- Every safety requirement → a hazard?

Document any items that lack reverse links as **potential reverse orphans** (to be confirmed in step-04).

### 4. Cross-Reference Forward and Reverse Traces

Verify consistency between forward and reverse traceability:

**Consistency Checks:**
- If H-001 → SR-001 in forward trace, does SR-001 → H-001 in reverse trace?
- If TC-001 → SC-moduleA in forward trace, does SC-moduleA → TC-001 in reverse trace?
- Are there forward links with no corresponding reverse links? (Indicates documentation error)
- Are there reverse links with no corresponding forward links? (Indicates documentation error)

**Inconsistency Report:**
```markdown
### Trace Consistency Issues

| Issue Type | Forward Reference | Reverse Reference | Description |
|-----------|-----------------|------------------|-------------|
| Missing reverse | H-001 → SR-001 | (none) | Forward trace has no reverse confirmation |
| Missing forward | (none) | TR-005 → TC-005 | Reverse trace has no forward origin |
| Mismatch | H-001 → SR-001 | SR-001 → H-002 | Forward and reverse hazard IDs don't match |
```

### 5. Verify Hazard Coverage via Reverse Trace

For DO-178C compliance, every test result must trace back to at least one hazard:

**Hazard Coverage Check:**
- List all hazards identified in the system
- For each hazard, list all test results that trace back to it
- Identify hazards with no test coverage (critical finding for DAL A/B)
- Identify test results that trace back to no hazard (may be out-of-scope)

```markdown
### Hazard Coverage via Reverse Trace

| Hazard | Traced Test Results | Test Status | Coverage |
|--------|--------------------|------------|---------|
| H-001 | TR-001, TR-002 | PASS, PASS | ✅ Covered |
| H-002 | TR-003 | FAIL | ⚠️ Covered (test failed) |
| H-003 | (none) | (none) | ❌ Not covered |
```

### 6. Present Reverse Traceability to User

Show the reverse traceability table and ask:

"I've built the reverse traceability from test results back to hazards. Here's the summary:

**Reverse Traceability Summary:**
- Test results with reverse trace: [n] / [total]
- Test cases with reverse trace: [n] / [total]
- Source code units with reverse trace: [n] / [total]
- Design elements with reverse trace: [n] / [total]
- SW requirements with reverse trace: [n] / [total]
- Safety requirements with reverse trace: [n] / [total]
- Hazards covered via reverse trace: [n] / [total]

**Potential Reverse Orphans:**
- Test results without test cases: [n]
- Test cases without source code: [n]
- Source code without design reference: [n]
- Design without SW requirement: [n]
- SW requirements without safety requirement: [n]
- Safety requirements without hazard: [n]

**Trace Consistency:**
- Forward/reverse mismatches: [n]
- Missing reverse links: [n]
- Missing forward links: [n]

**Hazard Coverage:**
- Hazards with test coverage: [n] / [total]
- Hazards without test coverage: [n] (CRITICAL for DAL A/B)

Please review the reverse traceability. Are there any traces that need correction?

[C] Continue to orphan analysis"

## SUCCESS METRICS:

✅ Complete reverse traceability table from test results to hazards
✅ Every artifact at each layer catalogued with reverse links
✅ Reverse completeness checks performed for each layer
✅ Potential reverse orphans identified for step-04
✅ Forward/reverse cross-reference consistency verified
✅ Hazard coverage verified via reverse trace
✅ User confirmed reverse traceability before proceeding

## FAILURE MODES:

❌ Not tracing through all layers in reverse (TR → TC → SC → DE → SWR → SR → H)
❌ Not cross-referencing forward and reverse traces for consistency
❌ Not identifying hazards without test coverage (critical for DAL A/B)
❌ Accepting incomplete reverse traces without flagging them as orphans
❌ Proceeding without user confirming reverse traceability

❌ **CRITICAL**: Reading only partial step file - leads to incomplete reverse trace
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file
❌ **CRITICAL**: Not verifying bidirectional consistency between forward and reverse traces

## NEXT STEP:

After user selects [C] to continue, load `./step-04-gaps.md` to identify and classify orphans in both directions.