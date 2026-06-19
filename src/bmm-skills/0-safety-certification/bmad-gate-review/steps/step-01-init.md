# Step 1: Gate Review Workflow Initialization

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete decisions
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between review facilitator peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on initialization and setup only - don't look ahead to future steps
- 🚪 DETECT existing workflow state and handle continuation properly
- ⚠️ ABSOLUTELY NO TIME ESTIMATES - review timelines depend on project specifics

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- 💾 Initialize document and update frontmatter
- 📖 Set up frontmatter `stepsCompleted: [1]` before loading next step
- 🚫 FORBIDDEN to load next step until setup is complete

## CONTEXT BOUNDARIES:

- Variables from workflow.md are available in memory
- Previous context = what's in output document + frontmatter
- Don't assume knowledge from other steps
- Input document discovery happens in this step

## YOUR TASK:

Initialize the Gate Review workflow by detecting continuation state, discovering input documents, determining the gate review type, and setting up the document for collaborative gate review.

## INITIALIZATION SEQUENCE:

### 1. Check for Existing Workflow

First, check if the output document already exists:

- Look for existing {planning_artifacts}/`*gate-review*.md`
- If exists, read the complete file(s) including frontmatter
- If not exists, this is a fresh workflow

### 2. Handle Continuation (If Document Exists)

If the document exists and has frontmatter with `stepsCompleted`:

- **STOP here** and inform the user that an existing gate review was found
- Offer to continue from the last completed step or start fresh
- Do not proceed with any initialization tasks until the user decides

### 3. Fresh Workflow Setup (If No Document)

If no document exists or no `stepsCompleted` in frontmatter:

#### A. Input Document Discovery

Discover and load context documents using smart discovery. Documents can be in the following locations:
- {planning_artifacts}/**
- {output_folder}/**
- {project_knowledge}/**
- {project-root}/docs/**

Also - when searching - documents can be a single markdown file, or a folder with an index and multiple files. For Example, if searching for `*foo*.md` and not found, also search for a folder called *foo*/index.md (which indicates sharded content)

Try to discover the following:
- Certification Plan (`*certification-plan*.md`, `*cert-plan*.md`)
- Compliance Matrix (`*compliance-matrix*.md`)
- Architecture Documents (`*architecture*.md`)
- V&V Results (`*vv*.md`, `*verification*.md`, `*validation*.md`)
- Safety Assessment (`*safety*.md`, `*safety-assessment*.md`)
- Hazard Analysis (`*hazard*.md`, `*hazard-analysis*.md`)
- Requirements (`*requirements*.md`, `*prd*.md`)
- Test Plans and Reports (`*test*.md`)
- Project Context (`**/project-context.md`)

<critical>Confirm what you have found with the user, along with asking if the user wants to provide anything else. Only after this confirmation will you proceed to follow the loading rules</critical>

**Loading Rules:**

- Load ALL discovered files completely that the user confirmed or provided (no offset/limit)
- If there is a project context, whatever is relevant should try to be biased in the remainder of this whole workflow process
- For sharded folders, load ALL files to get complete picture, using the index first to potentially know the potential of each document
- index.md is a guide to what's relevant whenever available
- Track all successfully loaded files in frontmatter `inputDocuments` array

#### B. Validate Required Inputs

Before proceeding, verify we have the essential inputs:

**Minimum Input Validation:**

- At least one project artifact must be available to review (architecture, requirements, test results, etc.)
- If no artifacts are found at all: "Gate review requires project artifacts to review. Please provide the relevant project documents."

**Other Input that might exist:**

- Compliance Matrix: "Provides compliance gap status for the review"
- Certification Plan: "Provides certification strategy context"
- V&V Results: "Provides verification evidence for the review"

#### C. Determine Gate Review Type

Based on the project phase and available artifacts, determine which gate review type applies:

| Gate Type | Full Name | Purpose | Key Focus |
|-----------|-----------|---------|-----------|
| **PDR** | Preliminary Design Review | Verify design completeness before detailed design | Architecture, requirements allocation, design decisions |
| **TRR** | Test Readiness Review | Verify readiness to begin formal testing | Test plans, test environment, V&V procedures |
| **QR** | Qualification Review | Verify qualification test results meet requirements | Test results, compliance evidence, traceability |
| **FQR** | Formal Qualification Review | Verify operational readiness for certification submission | Complete evidence package, compliance closure, certification submission |

Ask the user to confirm the gate review type and explain the focus areas.

#### D. Create Initial Document

Copy the template from `../templates/gate-review-template.md` to `{planning_artifacts}/gate-review-report.md`

#### E. Complete Initialization and Report

Complete setup and report to user:

**Document Setup:**

- Created: `{planning_artifacts}/gate-review-report.md` from template
- Initialized frontmatter with workflow state
- Gate review type: {PDR/TRR/QR/FQR}

**Input Documents Discovered:**
Report what was found:

"Welcome {{user_name}}! I've set up your Gate Review workspace for {{project_name}}.

**Gate Review Type:** {PDR/TRR/QR/FQR}
**Review Focus:** {focus areas based on gate type}

**Documents Found:**

- Certification Plan: {number of files loaded or "None found"}
- Compliance Matrix: {number of files loaded or "None found"}
- Architecture: {number of files loaded or "None found"}
- V&V Results: {number of files loaded or "None found"}
- Safety Assessment: {number of files loaded or "None found"}
- Test Plans/Reports: {number of files loaded or "None found"}

**Files loaded:** {list of specific file names or "No additional documents found"}

Ready to begin the gate review. Do you have any other documents you'd like me to include?

[C] Continue to review criteria

## SUCCESS METRICS:

✅ Existing workflow detected and handed off correctly
✅ Fresh workflow initialized with template and frontmatter
✅ Input documents discovered and loaded using sharded-first logic
✅ All discovered files tracked in frontmatter `inputDocuments`
✅ Gate review type determined and confirmed with user
✅ User confirmed document setup and can proceed

## FAILURE MODES:

❌ Proceeding with fresh initialization when existing workflow exists
❌ Not updating frontmatter with discovered input documents
❌ Creating document without proper template
❌ Not checking sharded folders first before whole files
❌ Not reporting what documents were found to user
❌ Proceeding without confirming gate review type
❌ Not validating minimum artifact requirements

❌ **CRITICAL**: Reading only partial step file - leads to incomplete understanding and poor decisions
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file
❌ **CRITICAL**: Making decisions without complete understanding of step requirements and protocols

## NEXT STEP:

After user selects [C] to continue, only after ensuring all the template output has been created, then load `./step-02-criteria.md` to load the review criteria for the selected gate type.