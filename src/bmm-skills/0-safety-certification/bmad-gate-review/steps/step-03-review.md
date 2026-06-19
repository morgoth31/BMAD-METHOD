# Step 3: Conduct Review

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete review
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative review between facilitator and stakeholders
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on reviewing each criterion against evidence - action items happen in the next step
- 🚫 FORBIDDEN to mark a criterion as PASS without confirmed evidence
- ⚠️ ABSOLUTELY NO TIME ESTIMATES

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- 💾 Update document and frontmatter as you conduct the review
- 📖 Set up frontmatter `stepsCompleted: [1, 2, 3]` before loading next step
- 🚫 FORBIDDEN to load next step until review is complete

## CONTEXT BOUNDARIES:

- Variables from workflow.md are available in memory
- Previous context = what's in output document + frontmatter + loaded input documents
- Review criteria were loaded and confirmed in step-02
- Do not re-load criteria in this step

## YOUR TASK:

Conduct the gate review by checking each criterion against the available evidence. Document findings as PASS, CONCERN, or FAIL with rationale.

## REVIEW SEQUENCE:

### 1. Review Each Criterion

For each criterion loaded in step-02, conduct the review:

**Review Process:**

1. State the criterion and what it requires
2. Identify the evidence document(s) that should demonstrate compliance
3. Examine the evidence against the criterion
4. Make a finding determination:

| Finding | Definition |
|---------|-----------|
| **PASS** | Criterion is fully satisfied with sufficient evidence |
| **CONCERN** | Criterion is partially satisfied; evidence exists but has weaknesses or gaps |
| **FAIL** | Criterion is not satisfied; evidence is missing or fundamentally inadequate |

5. Document the rationale for each finding

<critical>For each criterion, discuss the evidence with the user. Do not make finding determinations unilaterally. The user's input is essential for accurate assessment.</critical>

### 2. Document Findings

For each criterion, document:

- **Criterion ID**: From the review criteria (e.g., PDR-01, TRR-05)
- **Criterion Description**: Brief description of what's being checked
- **Finding**: PASS / CONCERN / FAIL
- **Rationale**: Why this finding was made — be specific about what evidence was or wasn't sufficient
- **Evidence Referenced**: Which document(s) and section(s) were examined
- **Applicable Standards**: Which standard(s) this criterion relates to

### 3. Handle Different Finding Types

**PASS Findings:**
- Briefly document what evidence satisfied the criterion
- No further action needed

**CONCERN Findings:**
- Document what is partially satisfactory
- Document what is weak or incomplete
- Note what additional evidence or clarification would change this to PASS
- These will generate action items in step-04

**FAIL Findings:**
- Document what is missing or fundamentally inadequate
- Note the impact on the project if not resolved
- These will generate high-priority action items in step-04

### 4. Review Summary Statistics

After reviewing all criteria, produce a summary:

| Metric | Count |
|--------|-------|
| Total Criteria | X |
| PASS | X |
| CONCERN | X |
| FAIL | X |
| Pass Rate | X% |

**Gate Health Assessment:**

- **GREEN**: All criteria PASS, no concerns — project is on track
- **YELLOW**: Some CONCERN findings, no FAIL — project needs attention but can continue
- **RED**: Any FAIL findings — project has significant issues that must be addressed

### 5. Confirm Findings with User

Present the complete findings to the user and confirm:

- Does each finding accurately reflect the evidence state?
- Are there any criteria that need re-evaluation?
- Is the overall gate health assessment fair?
- Are there any additional observations or context the user wants documented?

## REVIEW RULES:

1. **Evidence-Based**: Every finding must reference specific evidence or the lack thereof
2. **Be Honest**: Don't inflate PASS counts to make things look better
3. **Be Constructive**: CONCERN findings should include what would make them PASS
4. **Be Consistent**: Apply the same rigor to all criteria
5. **No Surprises**: The user should understand and agree with each finding

## SUCCESS METRICS:

✅ Every criterion has a documented finding (PASS, CONCERN, or FAIL)
✅ Every finding has a clear rationale referencing evidence
✅ CONCERN and FAIL findings include what would resolve them
✅ Review findings section populated in gate review report
✅ Summary statistics calculated and reported
✅ Gate health assessment provided (GREEN / YELLOW / RED)
✅ User has reviewed and confirmed the findings
✅ Frontmatter updated with `stepsCompleted: [1, 2, 3]`

## FAILURE MODES:

❌ Marking criteria as PASS without confirmed evidence
❌ Vague rationale that doesn't reference specific evidence
❌ Not distinguishing between CONCERN and FAIL appropriately
❌ Proceeding without user review of findings
❌ Not updating frontmatter progress

❌ **CRITICAL**: Inflating PASS counts to make the review look better
❌ **CRITICAL**: Making findings without discussing evidence with the user
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file

## NEXT STEP:

After user confirms the findings and selects [C] to continue, load `./step-04-action-items.md` to generate action items for any CONCERN or FAIL findings.