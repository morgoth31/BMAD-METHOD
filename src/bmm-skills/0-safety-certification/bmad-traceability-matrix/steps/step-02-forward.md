# Step 2: Build Forward Traceability

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative analysis between certification peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on forward traceability only - don't look ahead to future steps
- ⚠️ ABSOLUTELY NO TIME ESTIMATES

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- 💾 Update document frontmatter and append forward traceability section
- 📖 Set up frontmatter `stepsCompleted: [1, 2]` before loading next step
- 🚫 FORBIDDEN to load next step until forward traceability is complete and user confirms

## CONTEXT BOUNDARIES:

- Variables from workflow.md and step-01 are available in memory
- Previous context = what's in output document + frontmatter
- All discovered artifacts from step-01 are the input for this step
- Don't assume knowledge from other steps

## YOUR TASK:

Build the forward traceability chain linking all artifacts from hazards down to test results. Forward traceability answers: "For every hazard, which safety requirements, software requirements, design elements, source code, test cases, and test results trace from it?"

## FORWARD TRACEABILITY SEQUENCE:

### 1. Establish Traceability Chain

For each artifact category, extract traceable items and build forward links:

**Layer 1 — Hazards:**
- List all identified hazards (H-xxx identifiers)
- For each hazard, identify linked Safety Requirements (SR-xxx)

**Layer 2 — Safety Requirements:**
- List all safety requirements (SR-xxx identifiers)
- For each SR, identify linked Software Requirements (SWR-xxx)

**Layer 3 — Software Requirements:**
- List all software requirements (SWR-xxx identifiers)
- For each SWR, identify linked Design Elements (DE-xxx)

**Layer 4 — Design Elements:**
- List all design elements (DE-xxx identifiers)
- For each DE, identify linked Source Code Units (SC-xxx)

**Layer 5 — Source Code:**
- List all source code units (SC-xxx identifiers)
- For each SC unit, identify linked Test Cases (TC-xxx)

**Layer 6 — Test Cases:**
- List all test cases (TC-xxx identifiers)
- For each TC, identify linked Test Results (TR-xxx)

**Layer 7 — Test Results:**
- List all test results (TR-xxx identifiers)
- For each TR, document pass/fail status

### 2. Build Forward Traceability Table

Create a comprehensive forward traceability table:

```markdown
## Forward Traceability

### Hazard → Safety Requirement → Software Requirement → Design → Code → Test Case → Test Result

| Hazard | Safety Req | SW Requirement | Design Element | Source Code | Test Case | Test Result | Status |
|--------|-----------|---------------|---------------|-------------|-----------|-------------|--------|
| H-001 | SR-001 | SWR-001 | DE-001 | SC-moduleA | TC-001 | TR-001 | PASS | ✅ Complete |
| H-001 | SR-001 | SWR-001 | DE-001 | SC-moduleA | TC-002 | TR-002 | PASS | ✅ Complete |
| H-002 | SR-002 | SWR-002 | DE-002 | SC-moduleB | TC-003 | TR-003 | FAIL | ⚠️ Failed |
```

### 3. Verify Trace Completeness

For each layer, verify that every item has at least one forward link:

**Completeness Checks:**
- Every hazard → at least one safety requirement?
- Every safety requirement → at least one software requirement?
- Every software requirement → at least one design element?
- Every design element → at least one source code unit?
- Every source code unit → at least one test case?
- Every test case → at least one test result?

Document any items that lack forward links as **potential forward orphans** (to be confirmed in step-04).

### 4. Identify Trace Quality Issues

Look for common forward traceability quality issues:

- **Many-to-one:** Multiple hazards tracing to a single safety requirement (acceptable but needs review)
- **One-to-many:** Single requirement traced to many design elements (normal, but verify completeness)
- **Skipped layers:** Hazard directly to code (missing intermediate artifacts)
- **Circular references:** Any circular traceability links (error in documentation)
- **Ambiguous references:** References that don't uniquely identify an artifact

### 5. Present Forward Traceability to User

Show the forward traceability table and ask:

"I've built the forward traceability from hazards to test results. Here's the summary:

**Forward Traceability Summary:**
- Hazards traced: [n] / [total]
- Safety Requirements traced: [n] / [total]
- Software Requirements traced: [n] / [total]
- Design Elements traced: [n] / [total]
- Source Code units traced: [n] / [total]
- Test Cases traced: [n] / [total]
- Test Results linked: [n] / [total]

**Potential Forward Orphans:**
- Hazards without safety requirements: [n]
- Safety requirements without SW requirements: [n]
- SW requirements without design: [n]
- Design elements without source code: [n]
- Source code without test cases: [n]
- Test cases without results: [n]

**Trace Quality Issues:**
[List any many-to-one, skipped layers, or ambiguous references]

Please review the forward traceability. Are there any traces that need correction or additions?

[C] Continue to reverse traceability"

## SUCCESS METRICS:

✅ Complete forward traceability table from hazards to test results
✅ Every artifact at each layer catalogued with identifiers
✅ Forward links established between each adjacent layer
✅ Completeness checks performed for each layer
✅ Potential forward orphans identified for step-04
✅ Trace quality issues documented
✅ User confirmed forward traceability before proceeding

## FAILURE MODES:

❌ Not tracing through all layers (hazards → SR → SWR → DE → SC → TC → TR)
❌ Accepting incomplete traces without flagging them as orphans
❌ Not checking for skipped layers in traceability
❌ Not identifying many-to-one relationships that may need review
❌ Proceeding without user confirming forward traceability

❌ **CRITICAL**: Reading only partial step file - leads to incomplete forward trace
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file
❌ **CRITICAL**: Building forward trace without verifying completeness at each layer

## NEXT STEP:

After user selects [C] to continue, load `./step-03-reverse.md` to build reverse traceability from test results back to hazards.