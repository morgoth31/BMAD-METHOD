# Step 1: Formal Methods Workflow Initialization

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete decisions
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between formal methods engineer and certification analyst peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on initialization and setup only - don't look ahead to future steps
- 🚪 DETECT existing workflow state and handle continuation properly
- ⚠️ ABSOLUTELY NO TIME ESTIMATES - formal verification timelines depend on project specifics

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

Initialize the Formal Methods workflow by detecting continuation state, discovering input documents, and setting up the document for collaborative formal verification planning.

## INITIALIZATION SEQUENCE:

### 1. Check for Existing Workflow

First, check if the output document already exists:

- Look for existing {planning_artifacts}/`*formal-methods*.md`
- If exists, read the complete file(s) including frontmatter
- If not exists, this is a fresh workflow

### 2. Handle Continuation (If Document Exists)

If the document exists and has frontmatter with `stepsCompleted`:

- **STOP here** and inform the user that an existing formal methods report was found
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
- Software Requirements (`*requirements*.md`, `*prd*.md`, `*srs*.md`)
- Architecture Documents (`*architecture*.md`)
- Safety Assessment (`*safety*.md`, `*safety-assessment*.md`)
- Compliance Matrix (`*compliance-matrix*.md`)
- V&V Results (`*vv*.md`, `*verification*.md`, `*validation*.md`)
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

**Certification Plan Validation:**

- If no certification plan found: "Formal methods report requires a certification plan context. Please run the certification plan workflow first or provide the certification plan file path."
- Do NOT proceed without certification plan context

**Other Input that might exist:**

- Software Requirements: "Provides the formal specification basis and property definitions"
- Architecture: "Provides design structure for model checking scope"
- Safety Assessment: "Provides safety objectives and DAL classification"
- Compliance Matrix: "Provides verification objectives that formal methods will address"

#### C. Determine Formal Verification Scope

Based on the certification plan and project context, identify:

- **Component(s) to be formally verified**: Which software components require formal verification
- **Design Assurance Level (DAL)**: DAL A, B, C, or D — determines rigor requirements
- **Applicable DO-178C objectives**: Which objectives formal methods will address (primarily A-5, A-6)
- **Formal method type**: Which formal methods are applicable

Load the formal methods reference data from `../data/do333-formal-methods-types.csv` and discuss with the user which formal method(s) will be applied:

| Method | Applicability | Key Characteristics |
|--------|--------------|---------------------|
| Model Checking | DAL-A/B | Exhaustive state space exploration; counterexamples generated |
| Theorem Proving | DAL-A | Mathematical proof of properties; requires expertise |
| Abstract Interpretation | DAL-A/B/C | Static analysis of runtime properties; sound over-approximation |
| Static Analysis | DAL-A/B/C/D | Automated code analysis; may be unsound |
| SMT-Based Verification | DAL-A/B | SMT solver for program verification |
| Runtime Verification | DAL-B/C/D | Monitor properties at runtime; not exhaustive |

Confirm with the user:
1. Which component(s) will be formally verified?
2. What is the target DAL?
3. Which formal method(s) will be applied?
4. Are there specific safety properties or requirements to verify?

#### D. Create Initial Document

Copy the template from `../templates/formal-methods-report-template.md` to `{planning_artifacts}/formal-methods-verification-report.md`

#### E. Complete Initialization and Report

Complete setup and report to user:

**Document Setup:**
- Created: `{planning_artifacts}/formal-methods-verification-report.md` from template
- Initialized frontmatter with workflow state

**Input Documents Discovered:**
Report what was found:

"Welcome {{user_name}}! I've set up your Formal Methods Verification workspace for {{project_name}}.

**Documents Found:**

- Certification Plan: {number of files loaded or "None found - REQUIRED"}
- Software Requirements: {number of files loaded or "None found"}
- Architecture: {number of files loaded or "None found"}
- Safety Assessment: {number of files loaded or "None found"}
- Compliance Matrix: {number of files loaded or "None found"}

**Formal Verification Scope:**

- Component(s): {identified components}
- DAL Level: {identified DAL}
- Formal Method(s): {selected methods}
- Applicable DO-178C Objectives: {identified objectives}

Ready to begin formal specification. Do you have any other documents you'd like me to include?

[C] Continue to formal specification

## SUCCESS METRICS:

✅ Existing workflow detected and handed off correctly
✅ Fresh workflow initialized with template and frontmatter
✅ Input documents discovered and loaded using sharded-first logic
✅ All discovered files tracked in frontmatter `inputDocuments`
✅ Certification plan requirement validated and communicated
✅ Formal verification scope identified and confirmed with user (component, DAL, method type)
✅ User confirmed document setup and can proceed

## FAILURE MODES:

❌ Proceeding with fresh initialization when existing workflow exists
❌ Not updating frontmatter with discovered input documents
❌ Creating document without proper template
❌ Not checking sharded folders first before whole files
❌ Not reporting what documents were found to user
❌ Proceeding without confirming formal verification scope with user
❌ Not confirming applicable formal methods with user before proceeding

❌ **CRITICAL**: Reading only partial step file - leads to incomplete understanding and poor decisions
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file
❌ **CRITICAL**: Making decisions without complete understanding of step requirements and protocols

## NEXT STEP:

After user selects [C] to continue, only after ensuring all the template output has been created, then load `./step-02-specify.md` to begin translating requirements into formal specifications.