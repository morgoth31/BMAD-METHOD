# Step 3: Run Coverage Analysis

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative analysis between certification peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on collecting and recording results only - don't look ahead to future steps
- ⚠️ ABSOLUTELY NO TIME ESTIMATES

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- 💾 Update document frontmatter and append results section
- 📖 Set up frontmatter `stepsCompleted: [1, 2, 3]` before loading next step
- 🚫 FORBIDDEN to load next step until results are collected and user confirms

## CONTEXT BOUNDARIES:

- Variables from workflow.md and steps 1-2 are available in memory
- Previous context = what's in output document + frontmatter
- Configuration from step-02 is binding — follow DAL and tool selections exactly
- Don't assume knowledge from other steps

## YOUR TASK:

Run the structural coverage analysis according to the configuration established in step-02, collect results per module/component, and record them in the coverage report.

## ANALYSIS SEQUENCE:

### 1. Execute Coverage Collection

Guide the user through coverage collection based on the configured tool and instrumentation:

**For each collection mode (unit/integration/system):**

1. Confirm the test execution environment is set up correctly
2. Verify instrumentation is active and collecting data
3. Execute the test suite(s) in the configured mode
4. Collect raw coverage data output from the tool

**Coverage Data Collection Checklist:**

- [ ] Unit test coverage data collected
- [ ] Integration test coverage data collected (if configured)
- [ ] System test coverage data collected (if configured)
- [ ] On-target coverage data collected (if applicable)
- [ ] Raw coverage data files saved and checksummed

### 2. Process Coverage Results

For each module/component under analysis:

**Statement Coverage (SC) — DAL C/D:**
- Total statements in module
- Executed statements in module
- SC percentage = (executed / total) × 100

**Decision Coverage (DC) — DAL B:**
- Total decisions in module
- Decision outcomes taken (both True and False)
- DC percentage = (outcomes taken / (2 × total decisions)) × 100

**Modified Condition/Decision Coverage (MCDC) — DAL A:**
- Total conditions within decisions
- Condition outcomes demonstrated independently
- MCDC percentage = (independently verified conditions / total conditions) × 100
- For each condition: document the independent effect verification

### 3. Record Results Per Module

Create a results summary table:

```markdown
## Results Summary

### Coverage Results by Module

| Module | DAL | Coverage Type | Total Elements | Covered Elements | Coverage % | Status |
|--------|-----|--------------|---------------|-----------------|-----------|--------|
| [module] | [A/B/C] | [SC/DC/MCDC] | [n] | [m] | [p%] | [PASS/FAIL/PARTIAL] |

### Overall Coverage Summary
- **Total modules analyzed:** [n]
- **Modules passing coverage target:** [n]
- **Modules failing coverage target:** [n]
- **Overall project coverage:** [p%]
- **Target coverage:** [100% for configured coverage type]
```

### 4. Document Raw Data References

Record where raw coverage data files are stored for audit trail:

```markdown
### Raw Coverage Data References

| File | Module | Collection Mode | Checksum | Date |
|------|--------|----------------|----------|------|
```

### 5. Present Results to User

Show the complete results summary and ask:

"I've collected and recorded the coverage results for all configured modules. Here's the summary:

[Present results table]

**Key observations:**
- [Observation about modules passing]
- [Observation about modules failing]
- [Observation about overall coverage percentage]

Would you like to adjust any results or provide additional coverage data before we proceed to gap analysis?

[C] Continue to gap analysis"

## SUCCESS METRICS:

✅ Coverage data collected for all configured collection modes
✅ Results recorded per module with coverage type matching DAL
✅ Coverage percentages calculated correctly (SC, DC, or MCDC as applicable)
✅ Pass/Fail status assigned per module based on target
✅ Raw data references documented with checksums
✅ User confirmed results before proceeding

## FAILURE MODES:

❌ Collecting coverage data for wrong coverage type (e.g., SC when MCDC is required)
❌ Not recording raw data references for audit trail
❌ Not separating results by collection mode
❌ Proceeding without user confirming collected results
❌ Not identifying which modules fail coverage targets

❌ **CRITICAL**: Reading only partial step file - leads to incomplete analysis
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file
❌ **CRITICAL**: Accepting coverage results without verifying collection mode coverage (e.g., unit test coverage alone may not meet system-level requirements)

## NEXT STEP:

After user selects [C] to continue, load `./step-04-gaps.md` to identify uncovered code, classify gaps, and document justifications.