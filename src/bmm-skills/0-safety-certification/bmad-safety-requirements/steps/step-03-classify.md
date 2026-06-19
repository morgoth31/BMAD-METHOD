# Step 3: Classify Safety Requirements by Criticality

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete decisions
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between safety engineering peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on assigning criticality levels based on hazard severity and risk classification
- 🎯 APPLY safety standards (IEC 61508, ISO 26262, DO-178C) consistently
- ⚠️ ABSOLUTELY NO TIME ESTIMATES - AI development speed has fundamentally changed
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- ⚠️ Present A/P/C menu after generating criticality classifications
- 💾 ONLY save when user chooses C (Continue)
- 📖 Update frontmatter `stepsCompleted: [1, 2, 3]` before loading next step
- 🚫 FORBIDDEN to load next step until C is selected

## COLLABORATION MENUS (A/P/C):

This step will generate content and present choices:

- **A (Advanced Elicitation)**: Use discovery protocols to develop deeper insights about criticality assignments and standards implications
- **P (Party Mode)**: Bring multiple perspectives (safety assessor, certification authority, project manager) to review criticality from different angles
- **C (Continue)**: Save the content to the document and proceed to next step

## PROTOCOL INTEGRATION:

- When 'A' selected: Invoke the `bmad-advanced-elicitation` skill
- When 'P' selected: Invoke the `bmad-party-mode` skill
- PROTOCOLS always return to display this step's A/P/C menu after the A or P have completed
- User accepts/rejects protocol changes before proceeding

## CONTEXT BOUNDARIES:

- Safety requirements from step 2 are in the document
- Hazard analysis with severity and likelihood is available
- Reference data in `../data/sil-requirements.csv` for technique mapping
- Focus on criticality classification only

## YOUR TASK:

Assign criticality levels (SIL/DAL/Category) to each safety requirement based on the severity and risk classification of the source hazard. Apply the appropriate safety standards consistently.

## CLASSIFICATION SEQUENCE:

### 1. Review Hazard Severity and Risk

For each hazard in the hazard analysis:
- Confirm the severity rating (catastrophic, critical, marginal, negligible)
- Confirm the likelihood/probability rating
- Confirm the risk classification derived from severity × likelihood
- Map the risk classification to the appropriate integrity level framework

### 2. Determine Applicable Standard Framework

Based on the domain and project context:

**IEC 61508 (General/Industrial):**
- SIL 4: Catastrophic risk — highest integrity techniques required
- SIL 3: Critical risk — high integrity techniques required
- SIL 2: Marginal risk — moderate integrity techniques recommended
- SIL 1: Negligible risk — basic integrity techniques recommended

**ISO 26262 (Automotive):**
- ASIL D: Most critical — catastrophic injury risk
- ASIL C: High — severe injury risk
- ASIL B: Medium — moderate injury risk
- ASIL A: Low — minor injury risk

**DO-178C (Avionics):**
- DAL A: Catastrophic — loss of life
- DAL B: Hazardous — large safety margin reduction
- DAL C: Major — significant safety margin reduction
- DAL D: Minor — small safety margin reduction
- DAL E: No effect — no safety effect

**IEC 62443 (Cybersecurity):**
- SL 4: High — potential for catastrophic physical harm
- SL 3: Medium-High — potential for serious harm
- SL 2: Medium — potential for minor harm
- SL 1: Low — no direct safety impact

### 3. Assign Criticality Per Requirement

For each safety requirement:
- Map the source hazard's risk classification to the integrity level
- Document the classification rationale
- Identify the applicable techniques from `../data/sil-requirements.csv`
- Note any classification that requires user judgment (borderline cases)

**Classification Template:**

| SR ID | Source Hazard | Hazard Risk | Assigned Level | Rationale | Applicable Techniques |
|-------|--------------|-------------|----------------|-----------|----------------------|
| SR-1.1 | H-1 | Catastrophic | SIL 3 | Hazard involves uncontrolled motion that could cause serious injury | See Annex A techniques for SIL 3 |

### 4. Present Classification and Get Validation

"I've assigned criticality levels to all safety requirements based on hazard severity:

**Criticality Distribution:**
- SIL 3 / ASIL D / DAL A: {count} requirements (highest integrity)
- SIL 2 / ASIL C / DAL B: {count} requirements (high integrity)
- SIL 1 / ASIL B / DAL C: {count} requirements (moderate integrity)
- Low / ASIL A / DAL D: {count} requirements (basic integrity)

**Borderline Classifications requiring your judgment:**
{List any requirements where the classification could go either way}

Does this criticality assignment match your understanding of the risk levels?"

### 5. Generate Criticality Assignment Content

Prepare the content to append to the document:

```markdown
## Criticality Assignment

### Classification Framework

**Applicable Standard:** {IEC 61508 / ISO 26262 / DO-178C / IEC 62443}
**Rationale:** {why this standard applies to the project}

### Criticality Assignment Table

| SR ID | Safety Requirement | Source Hazard | Hazard Severity | Hazard Likelihood | Risk Classification | Assigned Level | Classification Rationale |
|-------|-------------------|--------------|----------------|-------------------|-------------------|----------------|--------------------------|
| SR-{id}.1 | {requirement text} | H-{id} | {severity} | {likelihood} | {risk} | {SIL/DAL/ASIL} | {rationale} |

### Criticality Distribution Summary

| Criticality Level | Count | Percentage | Implications |
|------------------|-------|------------|--------------|
| {Level 4} | {n} | {p}% | Highest rigor, most techniques required |
| {Level 3} | {n} | {p}% | High rigor, significant techniques required |
| {Level 2} | {n} | {p}% | Moderate rigor |
| {Level 1} | {n} | {p}% | Basic rigor |

### Applicable Techniques per Criticality

{Reference to sil-requirements.csv techniques for each assigned level}
```

### 6. Present Content and Menu

Show the generated content and present choices:

"I've drafted the Criticality Assignment for all safety requirements. This determines the rigor of development and verification techniques required.

**What would you like to do?**
[A] Advanced Elicitation - Let's examine specific classification decisions more deeply
[P] Party Mode - Bring certification and safety assessment perspectives
[C] Continue - Save this classification and proceed to requirement allocation"

### 7. Handle Menu Selection

(Standard A/P/C handling as in previous steps)

## APPEND TO DOCUMENT:

When user selects 'C', append the content directly to the document.

## SUCCESS METRICS:

✅ Every safety requirement has an assigned criticality level
✅ Classification rationale documented for each assignment
✅ Applicable safety standard framework identified and justified
✅ Criticality distribution reflects the hazard risk profile
✅ Borderline classifications identified and user-validated
✅ Reference to technique requirements per criticality level included
✅ A/P/C menu presented and handled correctly

## FAILURE MODES:

❌ Missing criticality assignment for any safety requirement
❌ Using wrong standard framework for the domain
❌ Not documenting classification rationale
❌ Not identifying borderline cases for user judgment
❌ Assigning criticality without considering both severity and likelihood
❌ Not referencing technique requirements per SIL/DAL level

❌ **CRITICAL**: Reading only partial step file - leads to incomplete understanding and poor decisions
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file
❌ **CRITICAL**: Making decisions without complete understanding of step requirements and protocols

## NEXT STEP:

After user selects 'C' and content is saved, load `./step-04-allocate.md` to allocate safety requirements to system components and software modules.

Remember: Do NOT proceed to step-04 until user explicitly selects 'C' from the A/P/C menu and content is saved!