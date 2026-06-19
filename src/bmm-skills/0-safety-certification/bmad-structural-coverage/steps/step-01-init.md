# Step 1: Structural Coverage Analysis Initialization

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete coverage decisions
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative analysis between certification peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on initialization and discovery only - don't look ahead to future steps
- 🚪 DETECT existing workflow state and handle continuation properly
- ⚠️ ABSOLUTELY NO TIME ESTIMATES - AI development speed has fundamentally changed
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

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

Initialize the Structural Coverage Analysis workflow by detecting continuation state, discovering input documents, and setting up the document for collaborative coverage analysis.

## INITIALIZATION SEQUENCE:

### 1. Check for Existing Workflow

First, check if the output document already exists:

- Look for existing {planning_artifacts}/`*coverage*.md`
- If exists, read the complete file(s) including frontmatter
- If not exists, this is a fresh workflow

### 2. Handle Continuation (If Document Exists)

If the document exists and has frontmatter with `stepsCompleted`:

- **STOP here** and inform the user that a workflow already exists
- Present the current state and ask whether to continue or restart
- Do not proceed with any initialization tasks until user decides

### 3. Fresh Workflow Setup (If No Document)

If no document exists or no `stepsCompleted` in frontmatter:

#### A. Input Document Discovery

Discover and load context documents using smart discovery. Documents can be in the following locations:
- {planning_artifacts}/**
- {output_folder}/**
- {project_knowledge}/**
- {project-root}/docs/**

Also - when searching - documents can be a single markdown file, or a folder with an index and multiple files. For example, if searching for `*architecture*.md` and not found, also search for a folder called *architecture*/index.md (which indicates sharded content).

Try to discover the following:
- Software Architecture (`*architecture*.md`)
- Certification Plan (`*certification*.md`, `*cert-plan*.md`)
- Design Assurance Level Assignment (`*dal*.md`, `*assignment*.md`)
- Test Results (`*test-results*.md`, `*test-report*.md`)
- Source Code Inventory (`*source*.md`, `*code-inventory*.md`)
- Safety Assessment (`*safety*.md`, `*assessment*.md`)
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

**Architecture/Design Validation:**

- If no architecture or design found: "Structural coverage analysis requires architecture and design documentation to identify code modules for coverage analysis. Please provide the architecture document or run the architecture workflow first."
- Do NOT proceed without architecture/design

**DAL Assignment Validation:**

- If no DAL assignment found: "The target Design Assurance Level (DAL) must be known to determine coverage requirements (SC for DAL C, DC for DAL B, MCDC for DAL A). Please provide the DAL assignment."
- Do NOT proceed without DAL

#### C. Create Initial Document

Copy the template from `../templates/coverage-report-template.md` to `{planning_artifacts}/coverage-report.md`

#### D. Complete Initialization and Report

Complete setup and report to user:

**Document Setup:**

- Created: `{planning_artifacts}/coverage-report.md` from template
- Initialized frontmatter with workflow state

**Input Documents Discovered:**
Report what was found:
"Welcome {{user_name}}! I've set up your Structural Coverage Analysis workspace for {{project_name}}.

**Documents Found:**

- Architecture/Design: {number of architecture files loaded or "None found - REQUIRED"}
- Certification Plan: {number of cert-plan files loaded or "None found"}
- DAL Assignment: {DAL level found or "None found - REQUIRED"}
- Test Results: {number of test result files loaded or "None found"}
- Source Code Inventory: {number of source files loaded or "None found"}
- Safety Assessment: {number of safety files loaded or "None found"}
- Project context: {project_context_rules count of rules for AI agents found}

**Files loaded:** {list of specific file names or "No additional documents found"}

Ready to begin structural coverage analysis. Do you have any other documents you'd like me to include?

[C] Continue to coverage configuration"

## SUCCESS METRICS:

✅ Existing workflow detected and handed off correctly
✅ Fresh workflow initialized with template and frontmatter
✅ Input documents discovered and loaded using sharded-first logic
✅ All discovered files tracked in frontmatter `inputDocuments`
✅ Architecture/design and DAL requirements validated and communicated
✅ User confirmed document setup and can proceed

## FAILURE MODES:

❌ Proceeding with fresh initialization when existing workflow exists
❌ Not updating frontmatter with discovered input documents
❌ Creating document without proper template
❌ Not checking sharded folders first before whole files
❌ Not reporting what documents were found to user
❌ Proceeding without validating architecture and DAL requirements

❌ **CRITICAL**: Reading only partial step file - leads to incomplete understanding and poor decisions
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file
❌ **CRITICAL**: Making decisions without complete understanding of step requirements and protocols

## NEXT STEP:

After user selects [C] to continue, only after ensuring all the template output has been created, then load `./step-02-config.md` to configure the coverage analysis tool and instrumentation settings.

Remember: Do NOT proceed to step-02 until user explicitly selects [C] from the menu and setup is confirmed!