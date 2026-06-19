# Step 3: Create Certification Plans

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete decisions
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between certification planning peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on creating the set of plans required by the selected standards
- ⚠️ ABSOLUTELY NO TIME ESTIMATES - AI development speed has fundamentally changed
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- ⚠️ Present A/P/C menu after generating plans content
- 💾 ONLY save when user chooses C (Continue)
- 📖 Update frontmatter `stepsCompleted: [1, 2, 3]` before loading next step
- 🚫 FORBIDDEN to load next step until C is selected

## COLLABORATION MENUS (A/P/C):

This step will generate content and present choices:

- **A (Advanced Elicitation)**: Use discovery protocols to develop deeper insights about plan objectives and activities
- **P (Party Mode)**: Bring multiple perspectives to analyze plan completeness from different stakeholder angles
- **C (Continue)**: Save the content to the document and proceed to next step

## PROTOCOL INTEGRATION:

- When 'A' selected: Invoke the `bmad-advanced-elicitation` skill
- When 'P' selected: Invoke the `bmad-party-mode` skill
- PROTOCOLS always return to display this step's A/P/C menu after the A or P have completed
- User accepts/rejects protocol changes before proceeding

## CONTEXT BOUNDARIES:

- Current document and frontmatter from steps 1-2 are available
- Standards selection and tailoring decisions from step 2 inform plan structure
- Reference the standards-objectives.csv for objectives that must be addressed in each plan
- Focus on plan creation only

## YOUR TASK:

Create the set of certification plans required by the selected standards, identifying objectives, activities, responsibilities, and independence requirements for each plan.

## PLAN CREATION SEQUENCE:

### 1. Determine Required Plans

Based on the standards selected in step 2, determine which plans are required:

**DO-178C Plans:**
- **PSAC** (Plan for Software Aspects of Certification) — Overall certification strategy
- **SDP** (Software Development Plan) — Development processes and standards
- **SVP** (Software Verification Plan) — Verification activities and methods
- **SCMP** (Software Configuration Management Plan) — CM processes and controls
- **SQAP** (Software Quality Assurance Plan) — QA activities and independence requirements

**IEC 61508 Plans:**
- **Safety Plan** — Overall functional safety planning
- **Safety Case Plan** — Evidence and argumentation strategy
- **V&V Plan** — Verification and validation activities

**ECSS-E-ST-40C Plans:**
- **SPP** (Software Project Plan) — Project planning and management
- **SPAP** (Software Product Assurance Plan) — Product assurance activities
- **V&V Plan** — Verification and validation activities

### 2. For Each Plan, Define:

**Plan Structure:**

For each required plan, collaborate with the user to define:

#### A. Plan Objectives
- What certification objectives does this plan satisfy?
- Map objectives to the standards-objectives.csv data
- Identify which objectives are mandatory vs. tailored

#### B. Activities
- What activities are required to meet each objective?
- What are the inputs and outputs for each activity?
- What methods are used (review, analysis, test, demonstration)?

#### C. Responsibilities
- Who is responsible for each activity?
- Who performs each activity?
- Who approves each activity output?

#### D. Independence Requirements
Based on the criticality level from step 2, define:
- Which activities require independent verification?
- Which activities require independent QA oversight?
- What "independence" means in this context (different person, different team, different organization)
- How independence requirements vary by DAL/SIL/Category

**Independence Matrix:**

| Activity | DAL A | DAL B | DAL C | DAL D |
|----------|-------|-------|-------|-------|
| Requirements review | Independent | Independent | Not required | Not required |
| Design review | Independent | Not required | Not required | Not required |
| Code review | Independent | Not required | Not required | Not required |
| Test verification | Independent | Independent | Not required | Not required |
| ... | ... | ... | ... | ... |

### 3. Generate Plans Section

Generate the "Plans" section of the certification plan document:

```markdown
## Plans

### Software Development Plan (SDP)

**Objectives:** [List of objectives this plan satisfies]
**Standards Reference:** [Section references to applicable standards]

**Development Process:**
- [Process description]
- [Entry/Exit criteria]
- [Transition criteria between phases]

**Development Standards:**
- Coding standards: [Reference or description]
- Design standards: [Reference or description]

**Activities:**

| ID | Activity | Input | Output | Responsibility | Method |
|----|----------|-------|--------|----------------|--------|
| SDP-1 | [Activity] | [Input] | [Output] | [Role] | [Method] |

### Software Verification Plan (SVP)

**Objectives:** [List of objectives this plan satisfies]
**Verification Methods:** [Review, Analysis, Test, Demonstration]
**Independence Requirements:** [Based on DAL/SIL/Category]

**Verification Activities:**

| ID | Objective | Activity | Method | Independence | Responsibility |
|----|----------|----------|--------|-------------|----------------|
| SVP-1 | [Obj ID] | [Activity] | [Method] | [Yes/No] | [Role] |

### Software Configuration Management Plan (SCMP)

**Objectives:** [List of objectives]
**CM Items:** [What is under CM control]
**CM Activities:** [Identification, control, status accounting, audits]
**Tool Support:** [CM tools and their qualification status]

### Software Quality Assurance Plan (SQAP)

**Objectives:** [List of objectives]
**QA Activities:** [Audits, reviews, process monitoring]
**Independence Requirements:** [Based on DAL/SIL/Category]
**QA Records:** [What records are kept]
```

### 4. Present to User and Handle Feedback

Present the generated plans section to the user:

"{{user_name}}, I've created the certification plans framework based on the standards and criticality level you selected. Here's a summary:

**Plans Created:** [Number and names]
**Total Objectives Addressed:** [Count]
**Independence Requirements:** [Summary by plan]

Please review the objectives, activities, responsibilities, and independence requirements. Are there any adjustments needed?"

[A] Advanced Elicitation — explore deeper implications of plan activities
[P] Party Mode — analyze plan completeness from certifier and developer perspectives
[C] Continue — save and proceed to roles definition

## SUCCESS METRICS:

✅ All required plans identified based on standards selection
✅ Each plan has defined objectives mapped to standards
✅ Activities, responsibilities, and methods documented for each plan
✅ Independence requirements defined based on criticality level
✅ Cross-references between plans documented
✅ Content appended to certification plan document

## FAILURE MODES:

❌ Missing plans required by selected standards
❌ Not mapping objectives to standards requirements
❌ Not addressing independence requirements
❌ Creating plans without considering criticality level
❌ Not cross-referencing between plans
❌ Proceeding without user confirmation of plan structure

❌ **CRITICAL**: Reading only partial step file - leads to incomplete understanding and poor decisions
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file
❌ **CRITICAL**: Making decisions without complete understanding of step requirements and protocols

## NEXT STEP:

After user selects [C] to continue, load `./step-04-roles.md` to define project roles and independence requirements.

Remember: Do NOT proceed to step-04 until user explicitly selects [C] from the menu!