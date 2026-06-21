# Step 3: Identify ECSS Compliance Gaps

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete gap analysis
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between ECSS compliance analyst peers
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

Identify ECSS compliance gaps by analyzing the objective-to-evidence mapping from step-02. Classify each gap by severity and type, with attention to ECSS-specific requirements.

## GAP IDENTIFICATION SEQUENCE:

### 1. Analyze the Objective Mapping

Review the ECSS compliance matrix mapping table from step-02 and identify three categories of gaps:

**Category A: Objectives Without Evidence**
- Objectives marked as NOT_STARTED
- Objectives marked as PARTIAL where evidence is insufficient
- Objectives where the referenced evidence does not actually demonstrate compliance
- Conditional objectives marked as applicable but with no evidence

**Category B: Evidence Without Objectives**
- Evidence artifacts that were created but don't map to any ECSS objective
- These may indicate unnecessary work or missing objective mappings
- Verify whether these artifacts serve a legitimate purpose before flagging

**Category C: Incomplete Evidence**
- Evidence that partially addresses an objective but has known weaknesses
- Evidence artifacts that are drafts, incomplete, or not yet reviewed
- Criticality tailoring not applied or incorrectly applied
- Cross-standard links not satisfied (e.g., E40-16 requires Q-ST-80C compliance)

### 2. Classify Gap Severity

For each identified gap, assign a severity classification based on ECSS criticality context:

| Severity | Definition |
|----------|------------|
| **CRITICAL** | Objective has no evidence; certification cannot proceed without resolution; typically affects Cat. A/B required objectives |
| **MAJOR** | Evidence is significantly incomplete or criticality tailoring not applied; certification at risk; typically affects Cat. A required objectives with partial evidence |
| **MODERATE** | Evidence partially addresses the objective; additional work needed but path is clear; common for conditional objectives |
| **MINOR** | Evidence is substantially complete; minor enhancement or clarification needed; often related to documentation completeness |
| **OBSERVATION** | Not a compliance gap per se; improvement opportunity or best practice suggestion aligned with ECSS guidelines |

**ECSS-Specific Severity Considerations:**
- Gaps in Cat. A required objectives are generally CRITICAL or MAJOR
- Gaps in conditional objectives that are confirmed applicable are MODERATE or higher
- Gaps in criticality assessment (Q80-2) are always CRITICAL — they affect the entire compliance scope
- Gaps in configuration management (Q80-9 through Q80-12) affect traceability and are generally MAJOR for Cat. A/B
- Gaps in nonconformance control (Q80-13) and corrective action (Q80-14) affect quality and are MAJOR for all categories

### 3. Document the Gap Analysis

Update the ECSS compliance matrix with the Gap Analysis section:

- **Gap ID**: Unique identifier (e.g., GAP-001, GAP-002)
- **Related Objective(s)**: Which ECSS objective(s) this gap affects (e.g., E40-1, Q80-3)
- **ECSS Standard**: Which standard the gap relates to (E-ST-40C, Q-ST-80C, or Q-ST-20C)
- **Gap Description**: Clear description of what is missing or insufficient
- **Gap Category**: A (No Evidence), B (Orphaned Evidence), or C (Incomplete)
- **Severity**: CRITICAL, MAJOR, MODERATE, MINOR, or OBSERVATION
- **Criticality Impact**: How this gap impacts compliance for the project's criticality category
- **Current State**: What exists now (even if nothing)
- **Required State**: What needs to exist to close the gap

<critical>Discuss each gap with the user. Do not assume severity without agreement. The user may have context that reduces or increases severity. Pay special attention to ECSS-specific requirements like criticality assessment and cross-standard dependencies.</critical>

### 4. Gap Summary Statistics

Produce a summary of the gap analysis:

- Total gaps identified
- Gaps by severity: CRITICAL: X, MAJOR: X, MODERATE: X, MINOR: X, OBSERVATION: X
- Gaps by category: No Evidence: X, Orphaned Evidence: X, Incomplete: X
- Gaps by standard: E-ST-40C: X, Q-ST-80C: X, Q-ST-20C: X
- Gaps by criticality impact: Cat. A objectives affected: X, Cat. B: X, etc.
- Overall compliance percentage (objectives with FULL evidence / total applicable objectives)

Report this summary to the user and confirm before proceeding.

## GAP ANALYSIS RULES:

1. **Be Honest**: Don't downplay gaps to make things look better
2. **Be Specific**: Reference exact ECSS objective IDs and evidence, not vague descriptions
3. **Be Constructive**: Every gap should have a clear path to resolution
4. **No Surprises**: The user should understand and agree with each gap classification
5. **ECSS Context Matters**: Severity must reflect the criticality category — Cat. A gaps are more severe than Cat. D gaps for the same missing evidence
6. **Cross-Standard Dependencies**: Note when a gap in one standard affects compliance in another (e.g., E40-16 links to Q-ST-80C)
7. **Conditional Objectives**: Clearly flag whether a gap in a conditional objective is applicable or not

## SUCCESS METRICS:

✅ All three gap categories analyzed (No Evidence, Orphaned Evidence, Incomplete)
✅ Every gap has a unique ID and clear description
✅ Severity classified for each gap with user agreement
✅ ECSS-specific criticality impact assessed for each gap
✅ Cross-standard dependencies identified
✅ Gap analysis section populated in compliance matrix
✅ Summary statistics calculated and reported
✅ User has reviewed and confirmed the gap analysis
✅ Frontmatter updated with `stepsCompleted: [1, 2, 3]`

## FAILURE MODES:

❌ Skipping objectives that seem "minor"
❌ Not identifying orphaned evidence
❌ Classifying severity without user agreement
❌ Vague gap descriptions that don't specify what's missing
❌ Not considering criticality category when classifying severity
❌ Ignoring cross-standard dependencies (E-ST-40C ↔ Q-ST-80C)
❌ Proceeding without user review of the gap analysis
❌ Not updating frontmatter progress

❌ **CRITICAL**: Reading only partial step file - leads to incomplete gap analysis
❌ **CRITICAL**: Understating gap severity to make compliance look better than it is
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file

## NEXT STEP:

After user confirms the gap analysis and selects [C] to continue, load `./step-04-remediation.md` to create remediation plans for each identified ECSS compliance gap.