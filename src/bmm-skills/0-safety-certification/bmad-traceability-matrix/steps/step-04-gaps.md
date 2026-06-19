# Step 4: Identify and Classify Orphan Artifacts

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative analysis between certification peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on orphan analysis only - don't look ahead to future steps
- ⚠️ ABSOLUTELY NO TIME ESTIMATES

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- 💾 Update document frontmatter and append orphan analysis section
- 📖 Set up frontmatter `stepsCompleted: [1, 2, 3, 4]` before loading next step
- 🚫 FORBIDDEN to load next step until orphan analysis is complete and user confirms

## CONTEXT BOUNDARIES:

- Variables from workflow.md and steps 1-3 are available in memory
- Previous context = what's in output document + frontmatter
- Forward and reverse traceability from steps 2-3 are the basis for orphan identification
- Don't assume knowledge from other steps

## YOUR TASK:

Identify orphan artifacts in both forward and reverse directions. Orphans are artifacts that exist in the documentation but lack complete traceability in one or both directions. Classify each orphan and determine remediation priority.

## ORPHAN ANALYSIS SEQUENCE:

### 1. Identify Forward Orphans

Artifacts that exist in a higher-level layer but have no trace to a lower-level layer:

**Critical Forward Orphans (DO-178C Violations):**

| Orphan Type | Description | DO-178C Impact | Severity |
|------------|-------------|----------------|----------|
| Hazard without safety requirements | A hazard is identified but no safety requirement addresses it | **Critical** — hazard not mitigated | 🔴 Critical |
| Safety requirement without SW requirements | A safety requirement has no derived software requirement | **Critical** — not implemented in software | 🔴 Critical |
| SW requirement without design | A software requirement has no design element | **Major** — not designed | 🟠 High |
| Design element without source code | A design element has no implementation | **Major** — not implemented | 🟠 High |
| Source code without test cases | A code unit has no test verification | **Critical** — not verified | 🔴 Critical |
| Test case without test results | A test case has been defined but not executed | **Major** — not executed | 🟠 High |

### 2. Identify Reverse Orphans

Artifacts that exist in a lower-level layer but have no trace to a higher-level layer:

**Critical Reverse Orphans (DO-178C Violations):**

| Orphan Type | Description | DO-178C Impact | Severity |
|------------|-------------|----------------|----------|
| Test result without test case | A test result exists with no defined test case | **Major** — undocumented test | 🟠 High |
| Test case without source code | A test case exists but doesn't trace to any code | **Major** — test scope unclear | 🟠 High |
| Source code without design reference | Code exists with no design document | **Major** — undesigned code | 🟠 High |
| Design without SW requirement | A design element has no requirement driving it | **Major** — gold plating | 🟠 High |
| SW requirement without safety requirement | A software requirement exists with no safety basis | **Major** — may be out of scope | 🟡 Medium |
| Safety requirement without hazard | A safety requirement exists with no hazard driving it | **Medium** — verify scope | 🟡 Medium |

### 3. Classify Each Orphan

For each identified orphan, determine:

**Classification:**
- **Genuine Orphan:** Artifact exists but truly has no trace (requires remediation)
- **Documentation Gap:** Trace exists but was not documented (requires documentation update)
- **Scope Decision:** Artifact is intentionally out of traceability scope (requires justification)
- **Error:** Artifact should not exist or is misidentified (requires correction)

**Justification Required:**
- For every genuine orphan: remediation plan
- For every scope decision: documented justification with DER approval
- For every documentation gap: action item to create missing trace
- For every error: correction action

### 4. Create Orphan Analysis Table

```markdown
## Orphan Analysis

### Forward Orphans (Top-Down)

| ID | Orphan Type | Artifact ID | Artifact Name | Classification | Severity | Justification | Remediation |
|----|-----------|-------------|---------------|---------------|----------|---------------|-------------|
| FO-001 | Hazard without SR | H-003 | [name] | Genuine Orphan | Critical | — | Create safety requirement |
| FO-002 | SR without SWR | SR-005 | [name] | Documentation Gap | Critical | — | Document trace to SWR |

### Reverse Orphans (Bottom-Up)

| ID | Orphan Type | Artifact ID | Artifact Name | Classification | Severity | Justification | Remediation |
|----|-----------|-------------|---------------|---------------|----------|---------------|-------------|
| RO-001 | Code without design | SC-util | [name] | Documentation Gap | High | — | Add design reference |
| RO-002 | Test without code | TC-099 | [name] | Scope Decision | Medium | Integration test | Justify in cert plan |

### Orphan Summary

| Classification | Forward | Reverse | Total |
|---------------|---------|---------|-------|
| Genuine Orphan | [n] | [n] | [n] |
| Documentation Gap | [n] | [n] | [n] |
| Scope Decision | [n] | [n] | [n] |
| Error | [n] | [n] | [n] |
| **Total** | **[n]** | **[n]** | **[n]** |
```

### 5. Present Orphan Analysis to User

Show the complete orphan analysis and ask:

"I've identified and classified all orphan artifacts in both directions. Here's the summary:

**Orphan Summary:**
- Genuine Orphans: [n] (require remediation)
- Documentation Gaps: [n] (require trace creation)
- Scope Decisions: [n] (require justification)
- Errors: [n] (require correction)

**Critical Findings:**
- Hazards without safety requirements: [n] (MUST be addressed for DAL A/B)
- Code without test verification: [n] (MUST be addressed for all DALs)
- [Other critical findings]

**Severity Distribution:**
- 🔴 Critical: [n] orphans
- 🟠 High: [n] orphans
- 🟡 Medium: [n] orphans

Please review the orphan classifications. For Scope Decisions — are the justifications acceptable? For Genuine Orphans — shall we proceed to remediation recommendations?

[C] Continue to final report"

## SUCCESS METRICS:

✅ All forward orphans identified and classified
✅ All reverse orphans identified and classified
✅ Each orphan has a classification (Genuine/Documentation Gap/Scope Decision/Error)
✅ Each orphan has a severity assessment
✅ Each orphan has a remediation action (or justification for scope decisions)
✅ User confirmed orphan classifications before proceeding

## FAILURE MODES:

❌ Not identifying orphans in both directions
❌ Treating all orphans as genuine — some may be documentation gaps
❌ Not requiring justification for scope decisions
❌ Not prioritizing critical orphans (hazards without SRs, code without tests)
❌ Proceeding without user confirming orphan classifications

❌ **CRITICAL**: Reading only partial step file - leads to incomplete orphan analysis
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file
❌ **CRITICAL**: Not flagging hazards without safety requirements — this is a DO-178C compliance violation for DAL A/B

## NEXT STEP:

After user selects [C] to continue, load `./step-05-complete.md` to finalize the traceability report with coverage statistics and remediation recommendations.