# Step 5: Risk Assessment

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete decisions
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between safety analysis peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on risk assessment only - mitigation strategies come in the next step
- ⚠️ ABSOLUTELY NO TIME ESTIMATES - AI development speed has fundamentally changed
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- ⚠️ Present A/P/C menu after generating risk assessment content
- 💾 ONLY save when user chooses C (Continue)
- 📖 Update frontmatter `stepsCompleted: [1, 2, 3, 4, 5]` before loading next step
- 🚫 FORBIDDEN to load next step until C is selected

## COLLABORATION MENUS (A/P/C):

This step will generate content and present choices:

- **A (Advanced Elicitation)**: Use discovery protocols to refine likelihood assessments and safety integrity levels
- **P (Party Mode)**: Bring multiple perspectives to challenge risk classifications
- **C (Continue)**: Save the content to the document and proceed to next step

## PROTOCOL INTEGRATION:

- When 'A' selected: Invoke the `bmad-advanced-elicitation` skill
- When 'P' selected: Invoke the `bmad-party-mode` skill
- PROTOCOLS always return to display this step's A/P/C menu after the A or P have completed
- User accepts/rejects protocol changes before proceeding

## CONTEXT BOUNDARIES:

- Current document and frontmatter from steps 1-4 are available
- Hazard log with identified hazards and initial severity from Step 4
- System boundary and selected techniques from earlier steps
- Focus on assessing risk - not designing mitigations yet

## REFERENCE DATA:

Use the risk matrix and severity levels from:
- `../data/risk-matrix.csv` — Severity × Likelihood risk classification
- `../data/hazard-severity-levels.csv` — Severity level definitions with standard mappings

## YOUR TASK:

Assess risk for each identified hazard using a severity × likelihood matrix. Determine appropriate safety integrity levels (SIL/DAL/Category) for each hazard based on applicable standards. Document the complete risk classification.

## RISK ASSESSMENT SEQUENCE:

### 1. Establish Likelihood Framework

Define the likelihood levels for the project:

| Level | Description | Frequency | Example |
|-------|-------------|-----------|---------|
| Frequent | Likely to occur frequently | >1 per year | Common failure in regular operation |
| Probable | Likely to occur several times | 1 per 1-10 years | Expected failure over system lifetime |
| Occasional | Likely to occur sometime | 1 per 10-100 years | Unusual but plausible failure |
| Remote | Unlikely but possible | 1 per 100-1000 years | Rare failure requiring multiple conditions |
| Improbable | Very unlikely | 1 per 1000-10000 years | Extremely rare combination of events |
| Incredible | Extremely unlikely | <1 per 10000 years | Practically impossible |

Collaborate with the user to confirm or adjust likelihood definitions for their domain and operating context.

### 2. Assess Each Hazard

For each hazard in the hazard log (H-001, H-002, etc.):

**Likelihood Assessment:**
- Review the causes identified in Step 4
- Assess how likely each cause is to occur
- Consider operating environment and conditions
- Factor in existing safeguards (but do not credit future mitigations)
- Assign likelihood level: Frequent / Probable / Occasional / Remote / Improbable / Incredible

**Risk Matrix Lookup:**
- Use severity (from Step 4) × likelihood (from above) to determine risk level
- Cross-reference `../data/risk-matrix.csv` for the risk classification
- Record: Risk Level (High/Medium/Low/Negligible) and recommended integrity level

**Safety Integrity Determination:**

Based on the applicable standard(s) for the project:

| Standard | Integrity Level | Applies To |
|----------|----------------|------------|
| IEC 61508 | SIL 1-4 | Electrical/electronic/programmable safety systems |
| DO-178C / DO-254 | DAL A-E | Aerospace software and hardware |
| ISO 26262 | ASIL A-D | Automotive functional safety |
| ECSS | Category A-D | European space systems |
| IEC 62304 | Class A-C | Medical device software |

For each hazard, determine:
- Required integrity level based on risk classification
- Applicable standard based on domain
- Whether the hazard requires formal safety requirements derivation

### 3. Build Risk Assessment Table

Compile all hazards into a structured risk assessment:

**Risk Assessment Table Format:**

| H-ID | Hazard Title | Severity | Likelihood | Risk Level | Required SIL/DAL | Standard |
|------|---------------|----------|------------|------------|------------------|----------|
| H-001 | {{title}} | {{severity}} | {{likelihood}} | {{High/Med/Low}} | {{SIL_x/DAL_x}} | {{standard}} |
| H-002 | {{title}} | {{severity}} | {{likelihood}} | {{High/Med/Low}} | {{SIL_x/DAL_x}} | {{standard}} |

### 4. Risk Prioritization

Rank hazards by risk level and identify:

**High Risk (Requires Immediate Mitigation):**
- List all hazards classified as High risk
- These require formal safety requirements and verification

**Medium Risk (Requires Mitigation):**
- List all hazards classified as Medium risk
- These require documented mitigations and validation

**Low Risk (Acceptable with Monitoring):**
- List all hazards classified as Low risk
- These may be accepted with appropriate monitoring

**Negligible Risk (Acceptable):**
- List all hazards classified as Negligible risk
- These may be accepted without additional mitigation

### 5. Reflect Understanding

Present your risk assessment to the user for validation:

"I've completed the risk assessment for {{hazard_count}} identified hazards.

**Risk Distribution Summary:**
- High Risk: {{count}} hazards (require immediate mitigation)
- Medium Risk: {{count}} hazards (require documented mitigation)
- Low Risk: {{count}} hazards (acceptable with monitoring)
- Negligible Risk: {{count}} hazards (acceptable as-is)

**Highest Priority Hazards:**
{{list_of_high_risk_hazards_with_brief_descriptions}}

**Safety Integrity Requirements:**
- Highest required: {{max_SIL_or_DAL}}
- Applicable standards: {{list_standards}}

Does this risk assessment accurately reflect the hazard landscape for {{project_name}}?"

### 6. Generate Risk Assessment Content

Prepare the content to append to the document:

#### Content Structure:

```markdown
## Risk Assessment

### Likelihood Framework

| Level | Description | Frequency Range |
|-------|-------------|-----------------|
| Frequent | {{description}} | >{{freq}} |
| Probable | {{description}} | {{freq_range}} |
| Occasional | {{description}} | {{freq_range}} |
| Remote | {{description}} | {{freq_range}} |
| Improbable | {{description}} | {{freq_range}} |
| Incredible | {{description}} | <{{freq}} |

### Risk Matrix

(Reference: risk-matrix.csv)

| Severity \ Likelihood | Frequent | Probable | Occasional | Remote | Improbable | Incredible |
|------------------------|----------|----------|------------|--------|------------|------------|
| Catastrophic | High/SIL4 | High/SIL4 | High/SIL3 | High/SIL3 | Medium/SIL2 | Medium/SIL2 |
| Critical | High/SIL4 | High/SIL3 | Medium/SIL2 | Medium/SIL2 | Medium/SIL1 | Low/SIL1 |
| Major | Medium/SIL3 | Medium/SIL2 | Medium/SIL1 | Low/SIL1 | Low/NoSIL | Low/NoSIL |
| Minor | Medium/SIL2 | Low/SIL1 | Low/NoSIL | Low/NoSIL | Low/NoSIL | Negligible |
| Negligible | Low/SIL1 | Low/NoSIL | Negligible | Negligible | Negligible | Negligible |

### Hazard Risk Classification

| H-ID | Hazard Title | Severity | Likelihood | Risk Level | SIL/DAL | Standard |
|------|-------------|----------|------------|------------|---------|----------|
| H-001 | {{title}} | {{severity}} | {{likelihood}} | {{risk}} | {{integrity}} | {{standard}} |

### Risk Prioritization

**High Risk (Immediate Mitigation Required):**
{{high_risk_hazards}}

**Medium Risk (Mitigation Required):**
{{medium_risk_hazards}}

**Low Risk (Monitoring Acceptable):**
{{low_risk_hazards}}

**Negligible Risk (Acceptable):**
{{negligible_risk_hazards}}

### Safety Integrity Requirements

- **Highest required integrity level:** {{max_SIL_DAL}}
- **Applicable standards:** {{standards_list}}
- **Hazards requiring formal safety requirements:** {{count}}
```

### 7. Present Content and Menu

Show the generated content and present choices:

"I've completed the risk assessment for all identified hazards.

**Here's what I'll add to the document:**

[Show the complete markdown content from step 6]

**What would you like to do?**
[A] Advanced Elicitation - Let's refine likelihood assessments or integrity levels
[P] Party Mode - Challenge risk classifications from different perspectives
[C] Continue - Save risk assessment and proceed to mitigation planning"

### 8. Handle Menu Selection

#### If 'A' (Advanced Elicitation):

- Invoke the `bmad-advanced-elicitation` skill with risk assessment context
- Process refined likelihood or integrity level assessments
- Ask user: "Accept these refinements to the risk assessment? (y/n)"
- If yes: Update content with refinements, then return to A/P/C menu
- If no: Keep original content, then return to A/P/C menu

#### If 'P' (Party Mode):

- Invoke the `bmad-party-mode` skill with risk assessment context
- Process the collaborative challenge to risk classifications
- Ask user: "Accept these changes to the risk assessment? (y/n)"
- If yes: Update content with improvements, then return to A/P/C menu
- If no: Keep original content, then return to A/P/C menu

#### If 'C' (Continue):

- Append the final content to `{planning_artifacts}/hazard-analysis.md`
- Update frontmatter: `stepsCompleted: [1, 2, 3, 4, 5]` and update `maxSeverity` if changed
- Load `./step-06-mitigation.md`

## APPEND TO DOCUMENT:

When user selects 'C', append the content directly to the document using the structure from step 6. Replace the "_(To be populated in Step 5)_" placeholder under "## Risk Assessment".

## SUCCESS METRICS:

✅ Likelihood framework defined and agreed with user
✅ Each hazard assessed with severity × likelihood
✅ Risk level determined for every hazard using risk matrix
✅ Safety integrity levels (SIL/DAL/Category) assigned per applicable standards
✅ Risk prioritization clearly categorizes hazards
✅ High risk hazards identified for immediate mitigation
✅ A/P/C menu presented and handled correctly
✅ Frontmatter updated with max severity

## FAILURE MODES:

❌ Assessing likelihood without considering operating environment
❌ Not using a consistent risk matrix across all hazards
❌ Crediting future mitigations in likelihood assessment (double-counting)
❌ Not mapping to applicable safety integrity standards
❌ Treating all medium risks equally without prioritization
❌ Not presenting A/P/C menu after content generation

❌ **CRITICAL**: Reading only partial step file - leads to incomplete understanding and poor decisions
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file
❌ **CRITICAL**: Making decisions without complete understanding of step requirements and protocols

## NEXT STEP:

After user selects 'C' and content is saved to document, load `./step-06-mitigation.md` to identify mitigation measures and derive safety requirements.

Remember: Do NOT proceed to step-06 until user explicitly selects 'C' from the A/P/C menu and content is saved!