# Step 4: Identify and Classify Coverage Gaps

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative analysis between certification peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on gap analysis only - don't look ahead to future steps
- ⚠️ ABSOLUTELY NO TIME ESTIMATES

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- 💾 Update document frontmatter and append gaps section
- 📖 Set up frontmatter `stepsCompleted: [1, 2, 3, 4]` before loading next step
- 🚫 FORBIDDEN to load next step until gap analysis is complete and user confirms

## CONTEXT BOUNDARIES:

- Variables from workflow.md and steps 1-3 are available in memory
- Previous context = what's in output document + frontmatter
- Results from step-03 are the basis for gap analysis
- Don't assume knowledge from other steps

## YOUR TASK:

Identify all uncovered code in modules that did not meet coverage targets, classify each gap as reachable or unreachable, and document justification for every uncovered element.

## GAP ANALYSIS SEQUENCE:

### 1. Identify Uncovered Elements

For every module with a FAIL or PARTIAL status from step-03:

**Statement Coverage Gaps (SC):**
- List every uncovered statement with file path and line number
- Group by module and function

**Decision Coverage Gaps (DC):**
- List every decision with incomplete outcomes (missing True or False)
- Include the decision expression and missing outcome

**MCDC Gaps:**
- List every condition lacking independent effect verification
- For each condition: identify which independent effect test is missing
- Document the required coupling pairs that are not demonstrated

### 2. Classify Each Gap

For each uncovered element, classify into one of the following categories:

**Category A — Reachable Code (Requires Action):**
- Code that is theoretically reachable but not exercised by existing tests
- **Action Required:** Add or modify tests to exercise this code
- **Justification:** None — must be covered

**Category B — Unreachable Code (Deactivation Code):**
- Code that cannot be reached under normal operating conditions
- Example: Defensive code for hardware failures, error handlers for impossible states
- **Action Required:** Document justification for exclusion
- **Justification Required:** Technical rationale why code cannot be reached

**Category C — Unreachable Code (Dead Code):**
- Code that is never executed under any conditions
- Example: Obsolete functions, commented-out code left compiled
- **Action Required:** Remove dead code or provide explicit justification
- **Justification Required:** Reason for retention if not removed

**Category D — Non-Deterministic / Environment-Dependent:**
- Code whose execution depends on specific runtime conditions
- Example: Interrupt handlers, OS-specific code, hardware-specific branches
- **Action Required:** Document alternative verification method
- **Justification Required:** Alternative means of verification (analysis, inspection)

### 3. Document Justifications

For every uncovered element NOT in Category A, document:

```markdown
### Uncovered Code Analysis

| ID | Module | File:Line | Coverage Type | Category | Description | Justification | Alternative Verification |
|----|--------|-----------|--------------|----------|-------------|---------------|--------------------------|
| GAP-001 | [module] | [path:line] | [SC/DC/MCDC] | [A/B/C/D] | [description] | [justification] | [if applicable] |
```

**Justification Requirements (DO-178C):**
- Category B (Deactivation): Must explain why the code cannot be reached and why it must remain
- Category C (Dead): Must explain why it cannot be removed OR why removal is deferred
- Category D (Non-deterministic): Must specify alternative verification method (analysis, inspection, demonstration)

### 4. Gap Severity Assessment

For each Category A gap (reachable, uncovered code), assess severity:

- **Critical:** Uncovered code in a DAL A module (MCDC gap)
- **High:** Uncovered code in a DAL B module (DC gap)
- **Medium:** Uncovered code in a DAL C module (SC gap)
- **Low:** Uncovered code in a DAL D module (SC gap)

### 5. Present Gap Analysis to User

Show the complete gap analysis and ask:

"I've identified and classified all coverage gaps. Here's the summary:

**Gap Summary:**
- Category A (Reachable — Requires Test Action): [n] gaps
- Category B (Unreachable — Deactivation Code): [n] gaps
- Category C (Dead Code): [n] gaps
- Category D (Non-Deterministic): [n] gaps

**Severity Breakdown:**
- Critical: [n] gaps
- High: [n] gaps
- Medium: [n] gaps
- Low: [n] gaps

Please review the gap classifications. For Categories B, C, and D — are the justifications acceptable? For Category A — shall we proceed to remediation recommendations?

[C] Continue to final report"

## SUCCESS METRICS:

✅ Every uncovered element identified with file path and line number
✅ Each gap classified into the correct category (A/B/C/D)
✅ Justifications documented for all Category B, C, and D gaps
✅ Alternative verification methods specified for Category D gaps
✅ Severity assessed for all Category A gaps
✅ User confirmed gap classifications and justifications

## FAILURE MODES:

❌ Leaving uncovered elements unclassified
❌ Accepting "dead code" without requiring justification for retention
❌ Not documenting alternative verification for non-deterministic code
❌ Proceeding without user reviewing gap classifications
❌ Treating deactivation code as dead code (different DO-178C treatment)

❌ **CRITICAL**: Reading only partial step file - leads to incomplete gap classification
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file
❌ **CRITICAL**: Not requiring justification for any uncovered code — DO-178C requires justification for all structural coverage gaps

## NEXT STEP:

After user selects [C] to continue, load `./step-05-complete.md` to produce the final coverage report with pass/fail assessment and remediation recommendations.