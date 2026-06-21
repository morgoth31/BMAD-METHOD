# Step 2: Map ECSS Objectives to Evidence

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete mapping
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between ECSS compliance analyst peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on objective-to-evidence mapping only - gap analysis happens in the next step
- 🚫 FORBIDDEN to skip objectives or mark them as covered without evidence
- ⚠️ ABSOLUTELY NO TIME ESTIMATES

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- 💾 Update document and frontmatter as you map objectives
- 📖 Set up frontmatter `stepsCompleted: [1, 2]` before loading next step
- 🚫 FORBIDDEN to load next step until mapping is complete

## CONTEXT BOUNDARIES:

- Variables from workflow.md are available in memory
- Previous context = what's in output document + frontmatter + loaded input documents
- Don't assume knowledge from other steps
- Mapping relies on evidence discovered in step-01

## YOUR TASK:

Map each objective from the applicable ECSS standard(s) to the evidence artifacts that demonstrate compliance. This is the core traceability work of the ECSS compliance matrix.

## MAPPING SEQUENCE:

### 1. Load ECSS Objectives

Based on the applicable ECSS standards and software criticality category identified in step-01, load the relevant objectives:

**For ECSS-E-ST-40C (Space Engineering — Software):**
- Load objectives from `../data/ecss-e-st-40c-objectives.csv` (in bmad-compliance-matrix/data/)
- All 16 objectives covering the full software development lifecycle:
  - Software development process (E40-1)
  - Requirements analysis (E40-2)
  - Architectural design (E40-3)
  - Detailed design (E40-4)
  - Coding and unit testing (E40-5)
  - Integration and integration testing (E40-6)
  - System testing (E40-7)
  - Verification (E40-8)
  - Validation (E40-9)
  - Transfer and delivery (E40-10)
  - Configuration management (E40-11)
  - Dependability and safety analysis (E40-12)
  - Maintenance (E40-13, conditional)
  - Reuse of existing software (E40-14, conditional)
  - Assessment of off-the-shelf software (E40-15, conditional)
  - Software product assurance (E40-16, links to Q-ST-80C)
- Tailor based on criticality category: Cat. A = all objectives, Cat. B = most, Cat. C = subset, Cat. D = minimal
- Conditional objectives (E40-13, E40-14, E40-15) apply only when maintenance, reuse, or OTS software are in scope

**For ECSS-Q-ST-80C (Space Product Assurance — Software):**
- Load objectives from `../data/ecss-q-st-80c-objectives.csv` (in bmad-compliance-matrix/data/)
- All 20 objectives covering software product assurance:
  - Product assurance planning (Q80-1)
  - Software criticality assessment (Q80-2)
  - Requirements verification (Q80-3)
  - Design verification (Q80-4)
  - Code verification (Q80-5)
  - Integration verification (Q80-6)
  - System testing (Q80-7)
  - Acceptance and delivery (Q80-8)
  - Configuration identification (Q80-9)
  - Configuration control (Q80-10)
  - Configuration status accounting (Q80-11)
  - Configuration verification (Q80-12)
  - Nonconformance control (Q80-13)
  - Corrective action (Q80-14)
  - Quality records (Q80-15)
  - Reliability assessment (Q80-16, conditional)
  - Maintainability assessment (Q80-17, conditional)
  - Reused software product assurance (Q80-18, conditional)
  - OTS software product assurance (Q80-19, conditional)
  - Open source software product assurance (Q80-20, conditional)
- Tailor based on criticality category
- Conditional objectives (Q80-16 through Q80-20) apply based on project scope

**For ECSS-Q-ST-20C (Space Product Assurance — Risk Assessment):**
- No pre-loaded CSV — map manually based on project context
- Key requirements include:
  - Risk management planning
  - Risk identification and analysis
  - Risk evaluation and assessment
  - Risk reduction and control
  - Risk monitoring and communication
- Apply only if risk assessment scope was confirmed in step-01

### 2. Map Each Objective to Evidence

For each objective, collaboratively determine:

- **Objective ID**: The ECSS-specific identifier (e.g., "E40-1", "Q80-3")
- **Objective Name**: The short description of what must be achieved
- **ECSS Standard**: Which standard the objective belongs to (E-ST-40C, Q-ST-80C, or Q-ST-20C)
- **Requirement Level**: required or conditional (from CSV data)
- **Evidence Artifact**: Which project document/artifact demonstrates compliance
- **Evidence Location**: Where in the artifact the evidence can be found
- **Evidence Status**: FULL | PARTIAL | NOT_STARTED | NOT_APPLICABLE
- **Criticality Tailoring**: How the objective is tailored for the project's criticality category (Cat. A/B/C/D)

<critical>For each objective, discuss with the user what evidence exists. Do not assume evidence exists without confirmation. If the user is unsure, mark the status as PARTIAL or NOT_STARTED rather than guessing. Pay special attention to conditional objectives — confirm with the user whether each conditional objective is applicable to the project.</critical>

### 3. Document the Mapping

Update the ECSS compliance matrix document with the Objectives Mapping Table section:

- Group objectives by ECSS standard (E-ST-40C first, then Q-ST-80C, then Q-ST-20C)
- Include all required fields for each mapping entry
- Clearly indicate requirement level (required vs. conditional)
- Clearly indicate criticality tailoring applied
- Mark objectives where evidence is uncertain for follow-up in gap analysis

### 4. Review Mapping Completeness

After mapping all objectives:

- Count total objectives per standard
- Count mapped objectives (FULL evidence)
- Count partially mapped objectives (PARTIAL evidence)
- Count unmapped objectives (NOT_STARTED)
- Count NOT_APPLICABLE objectives (with justification)
- Verify the mapping covers all applicable standards and objective categories

Report the mapping summary to the user and ask for confirmation before proceeding.

## MAPPING RULES:

1. **One-to-Many is OK**: One evidence artifact can satisfy multiple objectives
2. **Many-to-One is OK**: One objective may require multiple evidence artifacts
3. **Be Specific**: Reference specific sections, clauses, or artifacts — not just "see documentation"
4. **Honesty Over Completeness**: Better to mark PARTIAL/NOT_STARTED than to overclaim compliance
5. **Respect Criticality Tailoring**: Higher criticality categories require more rigorous evidence
6. **Conditional Objectives**: Clearly note which conditional objectives apply and which do not, with justification
7. **Cross-Standard Links**: Note when E-ST-40C objectives link to Q-ST-80C (e.g., E40-16)

## SUCCESS METRICS:

✅ All applicable ECSS standard objectives loaded and listed
✅ Each objective has at least a status entry (FULL, PARTIAL, NOT_STARTED, or NOT_APPLICABLE)
✅ FULL and PARTIAL objectives have evidence artifacts referenced
✅ Criticality tailoring documented for each objective
✅ Conditional objectives evaluated for applicability
✅ Mapping table grouped by ECSS standard
✅ User has reviewed and confirmed the mapping
✅ Frontmatter updated with `stepsCompleted: [1, 2]`

## FAILURE MODES:

❌ Skipping objectives that seem "obvious"
❌ Marking objectives as FULL without confirmed evidence
❌ Not covering all applicable ECSS standards
❌ Not documenting criticality tailoring decisions
❌ Not evaluating conditional objectives for applicability
❌ Proceeding without user review of the mapping
❌ Not updating frontmatter progress

❌ **CRITICAL**: Reading only partial step file - leads to incomplete mapping
❌ **CRITICAL**: Claiming compliance without evidence or user confirmation
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file

## NEXT STEP:

After user confirms the mapping and selects [C] to continue, load `./step-03-gaps.md` to identify ECSS compliance gaps and classify their severity.