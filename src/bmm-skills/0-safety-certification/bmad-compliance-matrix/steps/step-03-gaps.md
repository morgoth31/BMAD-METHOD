# Step 3: Identify Compliance Gaps

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete gap analysis
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between compliance analyst peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on gap identification and classification only - remediation planning happens in the next step
- 🚫 FORBIDDEN to dismiss gaps without thorough analysis
- ⚠️ ABSOLUTELY NO TIME ESTIMATES

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- 💾 Update document and frontmatter as you identify gaps
- 📖 Set up frontmatter `stepsCompleted: [1, 2, 3]` before loading next step
- 🚫 FORBIDDEN to load next step until gap analysis is complete

## CONTEXT BOUNDARIES:

- Variables from workflow.md are available in memory
- Previous context = what's in output document + frontmatter + loaded input documents
- Rely on the objective mapping completed in step-02
- Do not re-map objectives in this step

## YOUR TASK:

Identify compliance gaps by analyzing the objective-to-evidence mapping from step-02. Classify each gap by severity and type.

## GAP IDENTIFICATION SEQUENCE:

### 1. Analyze the Objective Mapping

Review the compliance matrix mapping table from step-02 and identify three categories of gaps:

**Category A: Objectives Without Evidence**
- Objectives marked as NOT_STARTED
- Objectives marked as PARTIAL where evidence is insufficient
- Objectives where the referenced evidence does not actually demonstrate compliance

**Category B: Evidence Without Objectives**
- Evidence artifacts that were created but don't map to any standard objective
- These may indicate unnecessary work or missing objective mappings
- Verify whether these artifacts serve a legitimate purpose before flagging

**Category C: Incomplete Evidence**
- Evidence that partially addresses an objective but has known weaknesses
- Evidence artifacts that are drafts, incomplete, or not yet reviewed
- Independence requirements that are not met (e.g., same person developed and verified)

### 2. Classify Gap Severity

For each identified gap, assign a severity classification:

| Severity | Definition |
|----------|-----------|
| **CRITICAL** | Objective has no evidence; certification cannot proceed without resolution |
| **MAJOR** | Evidence is significantly incomplete or independence not met; certification at risk |
| **MODERATE** | Evidence partially addresses the objective; additional work needed but path is clear |
| **MINOR** | Evidence is substantially complete; minor enhancement or clarification needed |
| **OBSERVATION** | Not a compliance gap per se; improvement opportunity or best practice suggestion |

### 3. Document the Gap Analysis

Update the compliance matrix with the Gap Analysis section:

- **Gap ID**: Unique identifier (e.g., GAP-001, GAP-002)
- **Related Objective(s)**: Which standard objective(s) this gap affects
- **Gap Description**: Clear description of what is missing or insufficient
- **Gap Category**: A (No Evidence), B (Orphaned Evidence), or C (Incomplete)
- **Severity**: CRITICAL, MAJOR, MODERATE, MINOR, or OBSERVATION
- **Current State**: What exists now (even if nothing)
- **Required State**: What needs to exist to close the gap

<critical>Discuss each gap with the user. Do not assume severity without agreement. The user may have context that reduces or increases severity.</critical>

### 4. Gap Summary Statistics

Produce a summary of the gap analysis:

- Total gaps identified
- Gaps by severity: CRITICAL: X, MAJOR: X, MODERATE: X, MINOR: X, OBSERVATION: X
- Gaps by category: No Evidence: X, Orphaned Evidence: X, Incomplete: X
- Gaps by standard: DO-178C: X, IEC 61508: X, ECSS: X, Other: X
- Overall compliance percentage (objectives with FULL evidence / total applicable objectives)

Report this summary to the user and confirm before proceeding.

## GAP ANALYSIS RULES:

1. **Be Honest**: Don't downplay gaps to make things look better
2. **Be Specific**: Reference exact objectives and evidence, not vague descriptions
3. **Be Constructive**: Every gap should have a clear path to resolution (even if that path is "need to create artifact X")
4. **No Surprises**: The user should understand and agree with each gap classification
5. **Independence Counts**: Independence failures are real gaps, not just observations

## SUCCESS METRICS:

✅ All three gap categories analyzed (No Evidence, Orphaned Evidence, Incomplete)
✅ Every gap has a unique ID and clear description
✅ Severity classified for each gap with user agreement
✅ Gap analysis section populated in compliance matrix
✅ Summary statistics calculated and reported
✅ User has reviewed and confirmed the gap analysis
✅ Frontmatter updated with `stepsCompleted: [1, 2, 3]`

## FAILURE MODES:

❌ Skipping objectives that seem "minor"
❌ Not identifying orphaned evidence
❌ Classifying severity without user agreement
❌ Vague gap descriptions that don't specify what's missing
❌ Proceeding without user review of the gap analysis
❌ Not updating frontmatter progress

❌ **CRITICAL**: Reading only partial step file - leads to incomplete gap analysis
❌ **CRITICAL**: Understating gap severity to make compliance look better than it is
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file

## NEXT STEP:

After user confirms the gap analysis and selects [C] to continue, load `./step-04-remediation.md` to create remediation plans for each identified gap.