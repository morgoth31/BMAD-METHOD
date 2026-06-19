# Step 2: Identify Applicable Standards & Tailoring

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete decisions
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between certification planning peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on identifying applicable standards and tailoring decisions only
- ⚠️ ABSOLUTELY NO TIME ESTIMATES - AI development speed has fundamentally changed
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- ⚠️ Present A/P/C menu after generating standards analysis
- 💾 ONLY save when user chooses C (Continue)
- 📖 Update frontmatter `stepsCompleted: [1, 2]` before loading next step
- 🚫 FORBIDDEN to load next step until C is selected

## COLLABORATION MENUS (A/P/C):

This step will generate content and present choices:

- **A (Advanced Elicitation)**: Use discovery protocols to develop deeper insights about standards applicability and tailoring implications
- **P (Party Mode)**: Bring multiple perspectives to analyze standards requirements from different stakeholder angles (certifier, developer, QA)
- **C (Continue)**: Save the content to the document and proceed to next step

## PROTOCOL INTEGRATION:

- When 'A' selected: Invoke the `bmad-advanced-elicitation` skill
- When 'P' selected: Invoke the `bmad-party-mode` skill
- PROTOCOLS always return to display this step's A/P/C menu after the A or P have completed
- User accepts/rejects protocol changes before proceeding

## CONTEXT BOUNDARIES:

- Current document and frontmatter from step 1 are available
- Input documents already loaded are in memory (hazard analysis, PRD, etc.)
- Reference the standards-objectives.csv data for objective details
- Focus on standards identification and tailoring only

## YOUR TASK:

Identify which certification standards apply to this project, determine the criticality level, and document tailoring decisions with justifications.

## STANDARDS IDENTIFICATION SEQUENCE:

### 1. Present Standards Selection

Present the user with the applicable standards and ask them to select which apply:

**DO-178C / DO-178C (Airborne Systems):**
- Applicable for: Aviation, aerospace, any system with airborne certification requirements
- Requires selection of Design Assurance Level (DAL):
  - **DAL A** — Catastrophic: Prevent continued safe flight and landing
  - **DAL B** — Hazardous: Large reduction in safety margins or functional capabilities
  - **DAL C** — Major: Significant reduction in safety margins or functional capabilities
  - **DAL D** — Minor: Minor reduction in safety margins or functional capabilities
  - **DAL E** — No Safety Effect: No effect on safety
- Key deliverables: PSAC (Plan for Software Aspects of Certification), SDP, SVP, SCMP, SQAP

**IEC 61508 / IEC 61508 (Functional Safety):**
- Applicable for: Industrial automation, process control, electrical/electronic/programmable electronic safety-related systems
- Requires selection of Safety Integrity Level (SIL):
  - **SIL 4** — Probability of dangerous failure: ≥10⁻⁵ to <10⁻⁴ per year
  - **SIL 3** — Probability of dangerous failure: ≥10⁻⁴ to <10⁻³ per year
  - **SIL 2** — Probability of dangerous failure: ≥10⁻³ to <10⁻² per year
  - **SIL 1** — Probability of dangerous failure: ≥10⁻² to <10⁻¹ per year
- Key deliverables: Safety Plan, Safety Case Plan, V&V Plan

**ECSS-E-ST-40C / ECSS-E-ST-40C (Space Software):**
- Applicable for: European Space Agency projects, space systems
- Requires selection of Software Category:
  - **Category A** — Critical software: Software whose malfunction can cause a catastrophic or critical hazard
  - **Category B** — Significant software: Software whose malfunction can cause a major hazard
  - **Category C** — Minor software: Software whose malfunction can cause a minor hazard
  - **Category D** — Negligible software: Software whose malfunction can cause a negligible hazard
- Key deliverables: SPP (Software Project Plan), SPAP (Software Product Assurance Plan), V&V Plan

### 2. Determine Criticality Level

For each selected standard:
- Ask the user to confirm the criticality level based on:
  - Hazard analysis findings (referencing loaded documents)
  - System safety assessment results
  - Regulatory requirements
  - Customer/contractual obligations

- Document the rationale for the selected level
- If combining standards, explain how criticality levels map between them:
  - DAL A ≈ SIL 4 ≈ Category A
  - DAL B ≈ SIL 3 ≈ Category A/B
  - DAL C ≈ SIL 2 ≈ Category B/C
  - DAL D ≈ SIL 1 ≈ Category C/D

### 3. Document Tailoring Decisions

For each selected standard, identify and document:

**Tailoring Framework:**

- **Standard objectives applicable** — Which objectives from the standard apply to this project
- **Tailored objectives** — Which objectives are being tailored (modified or eliminated) with justification
- **Alternative methods** — Any alternative methods being used in place of standard objectives
- **Tool qualification** — Which tools need qualification and at what level
- **Previously developed software** — Any reuse of existing software and its certification basis
- **Commercial off-the-shelf software** — Any COTS components and their certification credit approach

**For each tailoring decision, document:**
1. The objective being tailored
2. The reason for tailoring
3. The alternative approach (if any)
4. Justification for why the alternative provides equivalent safety assurance
5. Risk assessment of the tailoring decision

### 4. Generate Standards & Tailoring Section

Based on user selections and tailoring decisions, generate the "Applicable Standards" and "Tailoring Decisions" sections of the certification plan:

```markdown
## Applicable Standards

### [Standard Name] — [Criticality Level]

**Applicability:** [Why this standard applies]
**Criticality Level:** [DAL/SIL/Category] — [Description]
**Justification:** [Why this level was selected based on hazard analysis]

**Key Objectives:**
- [Objective 1]
- [Objective 2]
- ...

**Tailoring Decisions:**

| Objective | Tailored? | Alternative | Justification | Risk |
|-----------|-----------|-------------|---------------|------|
| [Obj ID]  | Yes/No    | [Method]    | [Why]         | [Assessment] |

**Tool Qualification Requirements:**
- [Tool 1]: Level [TQL/DAL] — [Justification]
- ...

```

### 5. Present to User and Handle Feedback

Present the generated standards section to the user and ask for confirmation:

"{{user_name}}, I've analyzed the applicable standards based on your project context. Here's what I've identified:

**Standards Selected:** [List]
**Criticality Levels:** [For each standard]
**Key Tailoring Decisions:** [Summary]

Are these selections correct? Would you like to adjust the criticality level, add additional standards, or modify any tailoring decisions?"

[A] Advanced Elicitation — explore deeper implications of standards selection
[P] Party Mode — analyze from certifier, developer, and QA perspectives
[C] Continue — save and proceed to plan creation

## SUCCESS METRICS:

✅ All applicable standards identified and confirmed by user
✅ Criticality levels selected with documented rationale from hazard analysis
✅ Tailoring decisions documented with justifications and risk assessments
✅ Cross-standard criticality mapping documented (if combining standards)
✅ Tool qualification requirements identified
✅ Content appended to certification plan document

## FAILURE MODES:

❌ Selecting standards without understanding project domain
❌ Choosing criticality levels without referencing hazard analysis
❌ Tailoring objectives without proper justification
❌ Missing cross-standard mapping when combining standards
❌ Not identifying tool qualification needs
❌ Proceeding without user confirmation of standards selection

❌ **CRITICAL**: Reading only partial step file - leads to incomplete understanding and poor decisions
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file
❌ **CRITICAL**: Making decisions without complete understanding of step requirements and protocols

## NEXT STEP:

After user selects [C] to continue, load `./step-03-plans.md` to create the set of certification plans (SDP, SVP, SCMP, SQAP).

Remember: Do NOT proceed to step-03 until user explicitly selects [C] from the menu!