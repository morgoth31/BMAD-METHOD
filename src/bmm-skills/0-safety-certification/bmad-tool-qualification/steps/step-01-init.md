# Step 1: Tool Qualification Workflow Initialization

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete decisions
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between tool qualification peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on initialization and setup only - don't look ahead to future steps
- 🚪 DETECT existing workflow state and handle continuation properly
- ⚠️ ABSOLUTELY NO TIME ESTIMATES - qualification timelines depend on project specifics

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

Initialize the Tool Qualification workflow by detecting continuation state, discovering input documents, identifying the tool, and setting up the document for collaborative qualification.

## INITIALIZATION SEQUENCE:

### 1. Check for Existing Workflow

First, check if the output document already exists:

- Look for existing {planning_artifacts}/`*tool-qualification*.md`
- If exists, read the complete file(s) including frontmatter
- If not exists, this is a fresh workflow

### 2. Handle Continuation (If Document Exists)

If the document exists and has frontmatter with `stepsCompleted`:

- **STOP here** and inform the user that an existing tool qualification document was found
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
- PSAC (`*psac*.md`, `*plan-software-aspects-certification*.md`)
- Software Development Plan (`*sdp*.md`, `*development-plan*.md`)
- Tool Qualification Plan (`*tqp*.md`, `*tool-qual*.md`) — may already exist
- Compliance Matrix (`*compliance-matrix*.md`)
- Project Context (`**/project-context.md`)
- Existing Tool Documentation (`*tool*.md`, `*qualification*.md`)

<critical>Confirm what you have found with the user, along with asking if the user wants to provide anything else. Only after this confirmation will you proceed to follow the loading rules</critical>

**Loading Rules:**

- Load ALL discovered files completely that the user confirmed or provided (no offset/limit)
- If there is a project context, whatever is relevant should try to be biased in the remainder of this whole workflow process
- For sharded folders, load ALL files to get complete picture, using the index first to potentially know the potential of each document
- Track all successfully loaded files in frontmatter `inputDocuments` array

#### B. Tool Identification

With the user, identify and document the following about the tool to be qualified:

**Tool Identification:**
- **Tool Name**: Official name and version of the tool
- **Tool Vendor/Developer**: Who develops and maintains the tool
- **Tool Category**: COTS (Commercial Off-The-Shelf) | Bespoke (Custom-built) | Open-Source
- **Tool Version**: Specific version(s) to be qualified
- **Tool Description**: Brief description of what the tool does

**Tool Usage Classification:**
- **Usage Type**: Verification tool | Development tool | Both
- **Tool Purpose**: Specific functions the tool will perform on the project
- **DAL Impact**: What DAL level(s) of software will the tool's output affect (A through D)
- **Certification Credit**: Will the tool's output be used for certification credit? (Yes/No)
- **Output Verification**: Is the tool's output independently verified for each use? (Yes/No)

**Tool Environment:**
- **Host Platform**: Operating system and hardware environment
- **Target Platform**: The target environment for the software being verified/developed
- **Integration Points**: How the tool integrates with the development workflow

<critical>Discuss each classification with the user. The usage type and DAL impact directly determine the qualification criteria level (step-02). Do not proceed without confirming these classifications.</critical>

#### C. Determine Applicable Standards

Based on the certification plan and project context, identify which standards apply:

- DO-178C (Airborne Systems Software) — always the primary context
- DO-330 (Tool Qualification) — always applicable for this workflow
- DO-331 (Model-Based Development) — if applicable
- DO-332 (Object-Oriented Technology) — if applicable
- DO-333 (Formal Methods) — if applicable
- ED-215 (European equivalent of DO-330) — if European certification
- Other standards as identified

Confirm with the user which standards and which DAL levels apply.

#### D. Create Initial Document

Copy the template from `../templates/tool-qualification-report-template.md` to `{planning_artifacts}/tool-qualification-report.md`

#### E. Complete Initialization and Report

Complete setup and report to user:

**Document Setup:**
- Created: `{planning_artifacts}/tool-qualification-report.md` from template
- Initialized frontmatter with workflow state

**Input Documents Discovered:**
Report what was found:

"Welcome {{user_name}}! I've set up your Tool Qualification workspace for {{project_name}}.

**Documents Found:**
- Certification Plan: {number of files loaded or "None found"}
- PSAC: {number of files loaded or "None found"}
- Existing TQP: {number of files loaded or "None found"}
- Compliance Matrix: {number of files loaded or "None found"}
- Tool Documentation: {number of files loaded or "None found"}

**Tool Identified:**
- Tool: {tool name and version}
- Category: {COTS / Bespoke / Open-Source}
- Usage: {verification tool / development tool}
- DAL Impact: {DAL level(s)}
- Certification Credit: {Yes/No}

**Applicable Standards:** {list of identified standards and DAL levels}

Ready to begin qualification criteria determination. Do you have any other documents you'd like me to include?

[C] Continue to qualification criteria determination"

## SUCCESS METRICS:

✅ Existing workflow detected and handed off correctly
✅ Fresh workflow initialized with template and frontmatter
✅ Input documents discovered and loaded using sharded-first logic
✅ All discovered files tracked in frontmatter `inputDocuments`
✅ Tool identified with name, version, category, and usage classification
✅ DAL impact determined and confirmed with user
✅ Applicable standards identified and confirmed with user
✅ User confirmed document setup and can proceed

## FAILURE MODES:

❌ Proceeding with fresh initialization when existing workflow exists
❌ Not updating frontmatter with discovered input documents
❌ Creating document without proper template
❌ Not checking sharded folders first before whole files
❌ Not reporting what documents were found to user
❌ Proceeding without confirming tool usage classification and DAL impact
❌ Not confirming applicable standards with user before proceeding

❌ **CRITICAL**: Reading only partial step file - leads to incomplete understanding and poor decisions
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file
❌ **CRITICAL**: Making decisions without complete understanding of step requirements and protocols

## NEXT STEP:

After user selects [C] to continue, only after ensuring all the template output has been created, then load `./step-02-criteria.md` to determine the qualification criteria level.