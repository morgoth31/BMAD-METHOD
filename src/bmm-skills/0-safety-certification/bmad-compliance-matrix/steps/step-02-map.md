# Step 2: Map Objectives to Evidence

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete mapping
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between compliance analyst peers
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

Map each objective from the applicable standard(s) to the evidence artifacts that demonstrate compliance. This is the core traceability work of the compliance matrix.

## MAPPING SEQUENCE:

### 1. Load Standard Objectives

Based on the applicable standards identified in step-01, load the relevant objectives:

**For DO-178C:**
- Load objectives from `../data/do178c-objectives.csv`
- Filter by the applicable DAL level(s) (A through D)
- Cover Tables A-2 through A-9 as applicable:
  - A-2: Software Development Processes
  - A-3: Verification of Outputs of Software Development Processes
  - A-4: Verification of Verification Process Results
  - A-5: Software Configuration Management
  - A-6: Software Quality Assurance
  - A-7: Certification Liaison Process
  - A-8: Certification-Specific Considerations
  - A-9: Tool Qualification

**For IEC 61508:**
- Map applicable requirements based on SIL level (1-4)
- Cover functional safety requirements from Parts 2, 3, and 7

**For ECSS:**
- Map requirements from ECSS-Q-ST-80C
- Cover software product assurance requirements

### 2. Map Each Objective to Evidence

For each objective, collaboratively determine:

- **Objective ID**: The standard-specific identifier (e.g., "DO-178C A-2.1")
- **Objective Name**: The short description of what must be achieved
- **Evidence Artifact**: Which project document/artifact demonstrates compliance
- **Evidence Location**: Where in the artifact the evidence can be found
- **Evidence Status**: FULL | PARTIAL | NOT_STARTED | NOT_APPLICABLE
- **Independence**: Whether independence of evaluation is required and satisfied

<critical>For each objective, discuss with the user what evidence exists. Do not assume evidence exists without confirmation. If the user is unsure, mark the status as PARTIAL or NOT_STARTED rather than guessing.</critical>

### 3. Document the Mapping

Update the compliance matrix document with the Objectives Mapping Table section:

- Group objectives by standard and table/chapter
- Include all required fields for each mapping entry
- Clearly indicate independence requirements
- Mark objectives where evidence is uncertain for follow-up in gap analysis

### 4. Review Mapping Completeness

After mapping all objectives:

- Count total objectives per standard
- Count mapped objectives (FULL evidence)
- Count partially mapped objectives (PARTIAL evidence)
- Count unmapped objectives (NOT_STARTED)
- Verify the mapping covers all applicable tables/chapters

Report the mapping summary to the user and ask for confirmation before proceeding.

## MAPPING RULES:

1. **One-to-Many is OK**: One evidence artifact can satisfy multiple objectives
2. **Many-to-One is OK**: One objective may require multiple evidence artifacts
3. **Be Specific**: Reference specific sections, clauses, or artifacts — not just "see documentation"
4. **Honesty Over Completeness**: Better to mark PARTIAL/NOT_STARTED than to overclaim compliance
5. **Track Independence**: If the standard requires independent verification, note whether the evidence satisfies that requirement

## SUCCESS METRICS:

✅ All applicable standard objectives loaded and listed
✅ Each objective has at least a status entry (FULL, PARTIAL, NOT_STARTED, or NOT_APPLICABLE)
✅ FULL and PARTIAL objectives have evidence artifacts referenced
✅ Independence requirements identified and tracked
✅ Mapping table grouped by standard and table/chapter
✅ User has reviewed and confirmed the mapping
✅ Frontmatter updated with `stepsCompleted: [1, 2]`

## FAILURE MODES:

❌ Skipping objectives that seem "obvious"
❌ Marking objectives as FULL without confirmed evidence
❌ Not covering all applicable standard tables
❌ Not tracking independence requirements
❌ Proceeding without user review of the mapping
❌ Not updating frontmatter progress

❌ **CRITICAL**: Reading only partial step file - leads to incomplete mapping
❌ **CRITICAL**: Claiming compliance without evidence or user confirmation
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file

## NEXT STEP:

After user confirms the mapping and selects [C] to continue, load `./step-03-gaps.md` to identify compliance gaps and classify their severity.