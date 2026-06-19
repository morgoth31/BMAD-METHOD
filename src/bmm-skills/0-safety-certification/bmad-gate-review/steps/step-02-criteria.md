# Step 2: Load Review Criteria

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete review criteria
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between review facilitator peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on loading and confirming review criteria only - actual review happens in the next step
- 🚫 FORBIDDEN to skip criteria or mark them as not applicable without justification
- ⚠️ ABSOLUTELY NO TIME ESTIMATES

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- 💾 Update document and frontmatter as you load criteria
- 📖 Set up frontmatter `stepsCompleted: [1, 2]` before loading next step
- 🚫 FORBIDDEN to load next step until criteria are confirmed

## CONTEXT BOUNDARIES:

- Variables from workflow.md are available in memory
- Previous context = what's in output document + frontmatter + loaded input documents
- Don't assume knowledge from other steps
- Gate review type was determined in step-01

## YOUR TASK:

Load the review criteria for the gate review type selected in step-01. Review criteria define what must be checked during the gate review.

## CRITERIA LOADING SEQUENCE:

### 1. Load Criteria from Data Source

Load the gate review criteria from `../data/gate-review-criteria.csv` and filter by the gate type selected in step-01:

**PDR (Preliminary Design Review) Criteria:**
- Focus: Design completeness and correctness
- Key areas: Requirements allocation, architecture completeness, design decisions, interface definitions
- Standard reference: DO-178C section 11.2, IEC 61508 Part 3, ECSS-Q-ST-80C

**TRR (Test Readiness Review) Criteria:**
- Focus: Readiness to begin formal testing
- Key areas: Test plans, test environment, V&V procedures, test configuration
- Standard reference: DO-178C section 11.6, IEC 61508 Part 7, ECSS-Q-ST-80C

**QR (Qualification Review) Criteria:**
- Focus: Qualification results meet requirements
- Key areas: Test results, compliance evidence, traceability, non-conformance resolution
- Standard reference: DO-178C section 11.8, IEC 61508 Part 2/3, ECSS-Q-ST-80C

**FQR (Formal Qualification Review) Criteria:**
- Focus: Operational readiness for certification submission
- Key areas: Complete evidence package, compliance closure, certification submission readiness
- Standard reference: DO-178C section 11.9, IEC 61508 Part 1/2/3, ECSS-Q-ST-80C

### 2. Customize Criteria for the Project

Review the loaded criteria with the user and customize:

- Remove criteria that are genuinely not applicable to this project (with justification)
- Add project-specific criteria based on the certification plan and standards
- Adjust evidence requirements based on the project's DAL/SIL/ASIL level
- Confirm which standards are referenced for each criterion

<critical>Every removed criterion must have a documented justification. Do not remove criteria simply because evidence is missing — that's a finding, not a reason to skip the review.</critical>

### 3. Map Criteria to Available Evidence

For each criterion, identify which input document(s) could provide evidence:

- Map each criterion to one or more input documents loaded in step-01
- Note where evidence is expected but not available (these will become potential findings)
- Confirm with the user that the evidence mapping is reasonable

### 4. Document the Review Criteria

Update the gate review report with the Review Criteria section:

- List all applicable criteria with their IDs and descriptions
- Include the applicable standards for each criterion
- Include the evidence required for each criterion
- Include the evidence mapping to available documents

### 5. Confirm with User

Present the complete review criteria to the user and confirm:

- Are all applicable criteria included?
- Are the evidence requirements appropriate for the project's certification level?
- Are there any additional criteria the user wants to add?
- Is the evidence mapping reasonable?

## CRITERIA LOADING RULES:

1. **Comprehensive Coverage**: Load ALL criteria for the selected gate type — filtering happens with user agreement
2. **Justified Removal**: Any removed criterion must have a documented justification
3. **Evidence Mapping**: Map every criterion to at least a potential evidence source
4. **Standard Alignment**: Ensure criteria align with the project's applicable standards
5. **DAL/SIL/ASIL Appropriate**: Adjust rigor of evidence requirements based on certification level

## SUCCESS METRICS:

✅ All criteria for the gate type loaded from data source
✅ Criteria customized with user agreement
✅ Removed criteria have documented justifications
✅ Each criterion mapped to evidence sources
✅ Review criteria section populated in gate review report
✅ User has reviewed and confirmed the criteria
✅ Frontmatter updated with `stepsCompleted: [1, 2]`

## FAILURE MODES:

❌ Skipping criteria without justification
❌ Not adjusting criteria for the project's certification level
❌ Not mapping criteria to available evidence
❌ Proceeding without user review of the criteria
❌ Not updating frontmatter progress

❌ **CRITICAL**: Reading only partial step file - leads to incomplete review criteria
❌ **CRITICAL**: Removing criteria just because evidence is missing — that's a finding
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file

## NEXT STEP:

After user confirms the review criteria and selects [C] to continue, load `./step-03-review.md` to conduct the review by checking each criterion against evidence.