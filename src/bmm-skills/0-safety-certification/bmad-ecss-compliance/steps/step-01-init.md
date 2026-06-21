# Step 1: ECSS Compliance Workflow Initialization

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete decisions
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between ECSS compliance analyst peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on initialization and setup only - don't look ahead to future steps
- 🚪 DETECT existing workflow state and handle continuation properly
- ⚠️ ABSOLUTELY NO TIME ESTIMATES - compliance timelines depend on project specifics

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

Initialize the ECSS Compliance workflow by detecting continuation state, discovering input documents, identifying applicable ECSS standards, and setting up the document for collaborative compliance mapping.

## INITIALIZATION SEQUENCE:

### 1. Check for Existing Workflow

First, check if the output document already exists:

- Look for existing {planning_artifacts}/`*ecss-compliance-matrix*.md`
- If exists, read the complete file(s) including frontmatter
- If not exists, this is a fresh workflow

### 2. Handle Continuation (If Document Exists)

If the document exists and has frontmatter with `stepsCompleted`:

- **STOP here** and inform the user that an existing ECSS compliance matrix was found
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

Also - when searching - documents can be a single markdown file, or a folder with an index and multiple files. For example, if searching for `*foo*.md` and not found, also search for a folder called *foo*/index.md (which indicates sharded content)

Try to discover the following:
- Certification Plan (`*certification-plan*.md`, `*cert-plan*.md`)
- Product Assurance Plan (`*product-assurance*.md`, `*pa-plan*.md`)
- Software Project Plan (`*software-project-plan*.md`, *spp*.md`)
- Hazard Analysis (`*hazard*.md`, `*hazard-analysis*.md`)
- Architecture Documents (`*architecture*.md`)
- V&V Results (`*vv*.md`, `*verification*.md`, `*validation*.md`)
- Safety Assessment (`*safety*.md`, `*safety-assessment*.md`)
- Requirements (`*requirements*.md`, `*prd*.md`)
- Software Criticality Assessment (`*criticality*.md`, `*criticality-assessment*.md`)
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

**Product Assurance Plan or Certification Plan Validation:**

- If no product assurance plan or certification plan found: "ECSS compliance matrix requires a product assurance plan or certification plan to work from. Please run the certification plan workflow first or provide the product assurance plan file path."
- Do NOT proceed without at least one of these plans

**Other Input that might exist:**

- Software Criticality Assessment: "Determines the software criticality category (A/B/C/D) which affects applicable ECSS objectives"
- Hazard Analysis: "Provides safety objectives and risk classifications"
- Architecture: "Provides design evidence traceability"
- V&V Results: "Provides verification and validation evidence"

#### C. Determine Applicable ECSS Standards and Criticality

Based on the product assurance plan, certification plan, and project context, identify which ECSS standards apply:

**ECSS Standards to Evaluate:**

- **ECSS-E-ST-40C** — Space Engineering: Software Engineering (software development process, requirements, design, implementation, verification, validation, delivery)
- **ECSS-Q-ST-80C** — Space Product Assurance: Software Product Assurance (product assurance planning, criticality assessment, verification, configuration management, quality, reliability, maintainability)
- **ECSS-Q-ST-20C** — Space Product Assurance: Risk Assessment (risk management applicable to software — optional, included if risk assessment is a project concern)

**Software Criticality Category:**

Determine the software criticality category which drives the depth of compliance required:

| Category | Description | Impact on Compliance |
|----------|-------------|---------------------|
| **Cat. A** | Catastrophic — software failure could cause loss of life or mission | All ECSS objectives apply at full rigour |
| **Cat. B** | Critical — software failure could cause major mission degradation | Most ECSS objectives apply, some tailoring permitted |
| **Cat. C** | Major — software failure could cause minor mission degradation | Subset of ECSS objectives, significant tailoring |
| **Cat. D** | Minor/Negligible — software failure has negligible impact | Minimal ECSS objectives, maximum tailoring |

Confirm with the user which standards apply and which software criticality category applies.

#### D. Create Initial Document

Copy the template from `../templates/ecss-compliance-matrix-template.md` to `{planning_artifacts}/ecss-compliance-matrix.md`

#### E. Complete Initialization and Report

Complete setup and report to user:

**Document Setup:**

- Created: `{planning_artifacts}/ecss-compliance-matrix.md` from template
- Initialized frontmatter with workflow state

**Input Documents Discovered:**
Report what was found:

"Welcome {{user_name}}! I've set up your ECSS Compliance Matrix workspace for {{project_name}}.

**Documents Found:**

- Product Assurance Plan: {number of files loaded or "None found - REQUIRED"}
- Software Criticality Assessment: {number of files loaded or "None found"}
- Hazard Analysis: {number of files loaded or "None found"}
- Architecture: {number of files loaded or "None found"}
- V&V Results: {number of files loaded or "None found"}
- Safety Assessment: {number of files loaded or "None found"}

**Applicable ECSS Standards:** {E-ST-40C, Q-ST-80C, and/or Q-ST-20C}

**Software Criticality Category:** {Cat. A/B/C/D}

**Files loaded:** {list of specific file names or "No additional documents found"}

Ready to begin ECSS objective mapping. Do you have any other documents you'd like me to include?

**[C]** Continue to objective mapping"

## SUCCESS METRICS:

✅ Existing workflow detected and handed off correctly
✅ Fresh workflow initialized with template and frontmatter
✅ Input documents discovered and loaded using sharded-first logic
✅ All discovered files tracked in frontmatter `inputDocuments`
✅ Product assurance plan / certification plan requirement validated and communicated
✅ Applicable ECSS standards identified and confirmed with user
✅ Software criticality category identified and confirmed with user
✅ User confirmed document setup and can proceed

## FAILURE MODES:

❌ Proceeding with fresh initialization when existing workflow exists
❌ Not updating frontmatter with discovered input documents
❌ Creating document without proper template
❌ Not checking sharded folders first before whole files
❌ Not reporting what documents were found to user
❌ Proceeding without validating product assurance plan requirement
❌ Not confirming applicable ECSS standards and criticality category with user before proceeding

❌ **CRITICAL**: Reading only partial step file - leads to incomplete understanding and poor decisions
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file
❌ **CRITICAL**: Making decisions without complete understanding of step requirements and protocols

## NEXT STEP:

After user selects [C] to continue, only after ensuring all the template output has been created, then load `./step-02-map.md` to begin mapping each ECSS objective to evidence artifacts.