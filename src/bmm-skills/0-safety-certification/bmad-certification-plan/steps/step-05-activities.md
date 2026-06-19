# Step 5: Define Certification Activities & Timeline

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete decisions
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between certification planning peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on defining certification activities timeline and gate reviews only
- ⚠️ ABSOLUTELY NO TIME ESTIMATES - AI development speed has fundamentally changed
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- ⚠️ Present A/P/C menu after generating activities content
- 💾 ONLY save when user chooses C (Continue)
- 📖 Update frontmatter `stepsCompleted: [1, 2, 3, 4, 5]` before loading next step
- 🚫 FORBIDDEN to load next step until C is selected

## COLLABORATION MENUS (A/P/C):

This step will generate content and present choices:

- **A (Advanced Elicitation)**: Use discovery protocols to develop deeper insights about certification activities and gate criteria
- **P (Party Mode)**: Bring multiple perspectives to analyze timeline feasibility from project management, QA, and certifier perspectives
- **C (Continue)**: Save the content to the document and proceed to next step

## PROTOCOL INTEGRATION:

- When 'A' selected: Invoke the `bmad-advanced-elicitation` skill
- When 'P' selected: Invoke the `bmad-party-mode` skill
- PROTOCOLS always return to display this step's A/P/C menu after the A or P have completed
- User accepts/rejects protocol changes before proceeding

## CONTEXT BOUNDARIES:

- Current document and frontmatter from steps 1-4 are available
- Standards, plans, and roles from steps 2-4 inform activity definitions
- Gate review requirements depend on selected standards and criticality
- Focus on activities timeline and gate reviews only

## YOUR TASK:

Define the certification activities timeline including gate reviews, certification coordination points, and mapping of activities to project phases.

## ACTIVITIES DEFINITION SEQUENCE:

### 1. Define Gate Reviews Based on Standards

Based on the standards selected in step 2, define the required gate reviews:

**ECSS-E-ST-40C Gate Reviews:**
- **PDR** (Preliminary Design Review) — Review of preliminary design against requirements
- **TRR** (Test Readiness Review) — Confirmation that testing can begin
- **QR** (Qualification Review) — Review of qualification test results
- **FQR** (Final Qualification Review) — Final review before delivery

**DO-178C Certification Coordination Points:**
- **PSAC Agreement** — Agreement with certification authority on PSAC
- **In-Process Reviews** — Development and verification reviews
- **Software Verification Reviews** — Formal verification evidence reviews
- **Software Configuration Audit** — Formal CM audit
- **Final Certification Submissions** — Complete certification package

**IEC 61508 Functional Safety Assessments (FSAs):**
- **FSA 1** — After hazard and risk analysis
- **FSA 2** — After safety requirements specification
- **FSA 3** — After design and implementation
- **FSA 4** — After validation and verification
- **FSA 5** — Final assessment before operation

### 2. Map Activities to Project Phases

For each gate review, define the activities that must be completed before the gate:

**Activity-to-Phase Mapping:**

```markdown
## Certification Activities Schedule

### Phase 1: Planning & Requirements

| Activity ID | Activity | Standard Objective | Gate | Responsibility | Deliverable |
|-------------|----------|-------------------|------|----------------|-------------|
| CA-01 | Develop PSAC/Safety Plan | [Obj ID] | PDR/FSA1 | [Role] | [Deliverable] |
| CA-02 | Develop SDP | [Obj ID] | PDR | [Role] | [Deliverable] |
| CA-03 | Develop SVP | [Obj ID] | PDR | [Role] | [Deliverable] |
| CA-04 | Develop SCMP | [Obj ID] | PDR | [Role] | [Deliverable] |
| CA-05 | Develop SQAP | [Obj ID] | PDR | [Role] | [Deliverable] |
| CA-06 | Software requirements review | [Obj ID] | PDR | [Role] | [Deliverable] |

### Phase 2: Design & Implementation

| Activity ID | Activity | Standard Objective | Gate | Responsibility | Deliverable |
|-------------|----------|-------------------|------|----------------|-------------|
| CA-07 | Software design review | [Obj ID] | [Gate] | [Role] | [Deliverable] |
| CA-08 | Source code review | [Obj ID] | [Gate] | [Role] | [Deliverable] |
| CA-09 | Unit testing | [Obj ID] | TRR/FSA3 | [Role] | [Deliverable] |
| CA-10 | Integration testing | [Obj ID] | TRR | [Role] | [Deliverable] |

### Phase 3: Verification & Validation

| Activity ID | Activity | Standard Objective | Gate | Responsibility | Deliverable |
|-------------|----------|-------------------|------|----------------|-------------|
| CA-11 | Software verification | [Obj ID] | QR/FSA4 | [Role] | [Deliverable] |
| CA-12 | System integration testing | [Obj ID] | QR | [Role] | [Deliverable] |
| CA-13 | Software validation | [Obj ID] | QR | [Role] | [Deliverable] |

### Phase 4: Certification & Delivery

| Activity ID | Activity | Standard Objective | Gate | Responsibility | Deliverable |
|-------------|----------|-------------------|------|----------------|-------------|
| CA-14 | Configuration audit | [Obj ID] | FQR/FSA5 | [Role] | [Deliverable] |
| CA-15 | Final certification submission | [Obj ID] | FQR | [Role] | [Deliverable] |
| CA-16 | Certification authority review | [Obj ID] | FQR | [Role] | [Deliverable] |
```

### 3. Define Gate Review Criteria

For each gate review, define entry and exit criteria:

**Gate Review Template:**

```markdown
### [Gate Name]

**Purpose:** [What this gate review accomplishes]
**Standards Reference:** [Applicable standard section]

**Entry Criteria:**
- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion N]

**Exit Criteria:**
- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion N]

**Participants:** [Roles involved in the review]
**Independence Requirements:** [What independence is required for reviewers]

**Deliverables:**
- [Deliverable 1]
- [Deliverable 2]

**Approval Authority:** [Who approves gate passage]
```

### 4. Define Certification Deliverables Schedule

Map all certification deliverables to their completion phase:

```markdown
## Certification Deliverables Schedule

| Deliverable | Plan Reference | Phase | Gate | Status |
|-------------|---------------|-------|------|--------|
| PSAC / Safety Plan | [Plan Ref] | Phase 1 | PDR/FSA1 | Planned |
| SDP | [Plan Ref] | Phase 1 | PDR | Planned |
| SVP | [Plan Ref] | Phase 1 | PDR | Planned |
| SCMP | [Plan Ref] | Phase 1 | PDR | Planned |
| SQAP | [Plan Ref] | Phase 1 | PDR | Planned |
| Software Requirements Data | [Plan Ref] | Phase 1 | PDR/FSA2 | Planned |
| Design Description | [Plan Ref] | Phase 2 | [Gate] | Planned |
| Source Code | [Plan Ref] | Phase 2 | TRR | Planned |
| Test Cases & Procedures | [Plan Ref] | Phase 2 | TRR/FSA3 | Planned |
| Test Results | [Plan Ref] | Phase 3 | QR/FSA4 | Planned |
| Verification Results | [Plan Ref] | Phase 3 | QR | Planned |
| Configuration Index | [Plan Ref] | Phase 4 | FQR/FSA5 | Planned |
| Certification Summary | [Plan Ref] | Phase 4 | FQR | Planned |
```

### 5. Present to User and Handle Feedback

Present the generated activities timeline to the user:

"{{user_name}}, I've defined the certification activities timeline based on your selected standards and criticality level. Here's a summary:

**Gate Reviews Defined:** [Number and names]
**Certification Activities:** [Total count]
**Project Phases:** [Count and names]
**Deliverables:** [Total count]

Please review the activities, gate criteria, and deliverables schedule. Are there any adjustments needed for your project timeline?"

[A] Advanced Elicitation — explore deeper implications of gate review criteria
[P] Party Mode — analyze timeline feasibility from project management and certifier perspectives
[C] Continue — save and proceed to finalization

## SUCCESS METRICS:

✅ All required gate reviews identified based on standards
✅ Activities mapped to project phases with clear dependencies
✅ Gate review entry and exit criteria defined
✅ Certification deliverables schedule created
✅ Activities mapped to standard objectives
✅ Content appended to certification plan document

## FAILURE MODES:

❌ Missing gate reviews required by selected standards
❌ Not mapping activities to standard objectives
❌ Not defining gate review entry/exit criteria
❌ Creating unrealistic activity sequences
❌ Not considering independence requirements in gate reviews
❌ Proceeding without user confirmation of activities timeline

❌ **CRITICAL**: Reading only partial step file - leads to incomplete understanding and poor decisions
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file
❌ **CRITICAL**: Making decisions without complete understanding of step requirements and protocols

## NEXT STEP:

After user selects [C] to continue, load `./step-06-complete.md` to finalize the certification plan document.

Remember: Do NOT proceed to step-06 until user explicitly selects [C] from the menu!