# Step 6: Mitigation Planning and Safety Requirements

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete decisions
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between safety analysis peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on mitigation and safety requirements derivation - this is the core value step
- ⚠️ ABSOLUTELY NO TIME ESTIMATES - AI development speed has fundamentally changed
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- ⚠️ Present A/P/C menu after generating mitigation content
- 💾 ONLY save when user chooses C (Continue)
- 📖 Update frontmatter `stepsCompleted: [1, 2, 3, 4, 5, 6]` before loading next step
- 🚫 FORBIDDEN to load next step until C is selected

## COLLABORATION MENUS (A/P/C):

This step will generate content and present choices:

- **A (Advanced Elicitation)**: Use discovery protocols to develop more robust mitigation strategies
- **P (Party Mode)**: Bring multiple perspectives to challenge mitigation effectiveness
- **C (Continue)**: Save the content to the document and proceed to next step

## PROTOCOL INTEGRATION:

- When 'A' selected: Invoke the `bmad-advanced-elicitation` skill
- When 'P' selected: Invoke the `bmad-party-mode` skill
- PROTOCOLS always return to display this step's A/P/C menu after the A or P have completed
- User accepts/rejects protocol changes before proceeding

## CONTEXT BOUNDARIES:

- Current document and frontmatter from steps 1-5 are available
- Hazard log with identified hazards from Step 4
- Risk assessment with severity, likelihood, and risk levels from Step 5
- Focus on mitigating risks and deriving safety requirements
- Safety requirements must be verifiable and traceable to hazards

## YOUR TASK:

Identify safety barriers and mitigation measures for each hazard. Derive preliminary safety requirements from the mitigation strategies. Document safety architecture constraints that will guide implementation.

## MITIGATION PLANNING SEQUENCE:

### 1. Mitigation Strategy Hierarchy

Apply the safety mitigation hierarchy (most to least preferred):

1. **Elimination** — Remove the hazard entirely by design change
2. **Substitution** — Replace with a less hazardous design or material
3. **Engineering Controls** — Add safety barriers, redundancy, or fail-safe design
4. **Administrative Controls** — Procedures, training, warning labels, operational restrictions
5. **Personal Protective Equipment** — Last resort protection for residual risk

For each hazard, prioritize higher-order controls. Never rely solely on administrative controls or warnings for High or Medium risk hazards.

### 2. Identify Mitigations for Each Hazard

For each hazard in the risk assessment, identify:

**For High Risk Hazards (Mandatory formal mitigation):**

- Primary mitigation: Engineering control or design change
- Secondary mitigation: Additional barrier for defense-in-depth
- Verification method: How to confirm the mitigation is effective
- Safety requirement: Derived requirement that the system must satisfy

**For Medium Risk Hazards (Documented mitigation required):**

- Mitigation approach: Engineering or administrative control
- Verification method: How to confirm effectiveness
- Safety requirement: Derived requirement

**For Low Risk Hazards (Monitoring acceptable):**

- Monitoring approach: How to track whether risk increases
- Acceptance criteria: Conditions under which risk remains acceptable

**For Negligible Risk Hazards (Acceptable as-is):**

- Acceptance statement: Acknowledged with no additional mitigation needed

### 3. Derive Safety Requirements

For each mitigation measure, derive a safety requirement:

**Safety Requirement Format:**

```
SR-ID: SR-001
Derived From: H-001
Requirement: {{clear_verifiable_statement}}
Verification Method: {{test/analysis/demonstration/inspection}}
Verification Criterion: {{pass_fail_criteria}}
SIL/DAL Target: {{integrity_level_from_risk_assessment}}
Traceability: H-001 → SR-001
```

**Safety Requirement Quality Criteria:**

- Each requirement must be verifiable (can you test it?)
- Each requirement must be traceable (which hazard does it address?)
- Each requirement must be unambiguous (only one interpretation)
- Each requirement must be achievable (within technical feasibility)
- High/Medium risk hazards must have at least one safety requirement

### 4. Document Safety Architecture Constraints

Identify architectural constraints imposed by the safety requirements:

**Types of Constraints:**

- **Independence requirements:** Which safety functions must be independent?
- **Redundancy requirements:** What level of redundancy is needed?
- **Timing requirements:** Maximum response times for safety actions
- **Partitioning requirements:** Separation between safety and non-safety functions
- **Monitoring requirements:** Continuous health monitoring or watchdog needs
- **Fail-safe requirements:** Defined safe states for each failure mode

**Constraint Format:**

```
Constraint-ID: SC-001
Derived From: SR-001 (and related hazards)
Type: {{Independence/Redundancy/Timing/Partitioning/Monitoring/Fail-safe}}
Description: {{clear_constraint_statement}}
Rationale: {{why_this_constraint_is_needed}}
Impacted Subsystems: {{list}}
```

### 5. Build Mitigation Traceability Matrix

Create a traceability matrix linking hazards → mitigations → safety requirements:

| H-ID | Risk Level | Mitigation Strategy | SR-ID | SIL/DAL Target | Verification |
|------|------------|---------------------|-------|----------------|--------------|
| H-001 | High | {{strategy}} | SR-001 | {{SIL/DAL}} | {{method}} |

### 6. Reflect Understanding

Present your mitigation plan to the user for validation:

"I've developed mitigation strategies and safety requirements for all {{hazard_count}} identified hazards.

**Mitigation Summary:**
- Elimination/Substitution: {{count}} hazards
- Engineering Controls: {{count}} hazards
- Administrative Controls: {{count}} hazards
- Accepted (Low/Negligible): {{count}} hazards

**Safety Requirements Derived:** {{sr_count}} requirements
- At SIL/DAL {{max_level}}: {{count}}
- At SIL/DAL {{next_level}}: {{count}}
- At lower levels: {{count}}

**Architecture Constraints Identified:** {{constraint_count}}

**Key Mitigation Themes:**
{{common_patterns_or_approaches}}

Does this mitigation plan adequately address all identified hazards?"

### 7. Generate Mitigation Content

Prepare the content to append to the document:

#### Content Structure:

```markdown
## Mitigation Summary

### Mitigation Hierarchy Application

**Elimination/Substitution:**
{{hazards_where_hazard_was_removed_or_substituted}}

**Engineering Controls:**
{{hazards_addressed_by_engineering_controls}}

**Administrative Controls:**
{{hazards_addressed_by_administrative_controls}}

**Accepted Risks:**
{{low_and_negligible_risks_accepted_with_rationale}}

### Mitigation Details

#### H-001: {{Hazard Title}} — {{Risk Level}}

- **Primary Mitigation:** {{mitigation_approach}}
- **Secondary Mitigation (if applicable):** {{defense_in_depth}}
- **Verification Method:** {{how_to_verify}}
- **Residual Risk:** {{risk_after_mitigation}}

{{repeat_for_each_hazard}}

### Safety Requirements Derived

| SR-ID | Requirement | Derived From | SIL/DAL Target | Verification Method |
|-------|-------------|-------------|----------------|---------------------|
| SR-001 | {{requirement}} | H-001 | {{SIL_DAL}} | {{method}} |

#### Detailed Safety Requirements

##### SR-001: {{Requirement Summary}}

- **Derived From:** H-{{id}}
- **Full Requirement:** {{complete_requirement_statement}}
- **Verification Method:** {{test/analysis/demonstration/inspection}}
- **Verification Criterion:** {{pass_fail_criteria}}
- **SIL/DAL Target:** {{integrity_level}}
- **Traceability:** H-{{id}} → SR-001

{{repeat_for_each_requirement}}

### Safety Architecture Constraints

| SC-ID | Type | Description | Impacted Subsystems |
|-------|------|-------------|---------------------|
| SC-001 | {{type}} | {{description}} | {{subsystems}} |

#### Detailed Constraints

##### SC-001: {{Constraint Title}}

- **Type:** {{Independence/Redundancy/Timing/Partitioning/Monitoring/Fail-safe}}
- **Derived From:** SR-{{id}}
- **Description:** {{constraint_statement}}
- **Rationale:** {{why_needed}}
- **Impacted Subsystems:** {{list}}

{{repeat_for_each_constraint}}

### Hazard-Requirement Traceability Matrix

| H-ID | Risk Level | Mitigation | SR-ID | SIL/DAL | Verification |
|------|------------|------------|-------|---------|--------------|
| H-001 | {{risk}} | {{mitigation}} | SR-001 | {{SIL_DAL}} | {{method}} |
```

### 8. Present Content and Menu

Show the generated content and present choices:

"I've developed the mitigation strategies and safety requirements for all hazards.

**Here's what I'll add to the document:**

[Show the complete markdown content from step 7]

**What would you like to do?**
[A] Advanced Elicitation - Let's develop more robust mitigation strategies
[P] Party Mode - Challenge mitigation effectiveness from different perspectives
[C] Continue - Save mitigations and proceed to workflow completion"

### 9. Handle Menu Selection

#### If 'A' (Advanced Elicitation):

- Invoke the `bmad-advanced-elicitation` skill with mitigation context
- Process enhanced mitigation strategies
- Ask user: "Accept these enhancements to mitigations and requirements? (y/n)"
- If yes: Update content with improvements, then return to A/P/C menu
- If no: Keep original content, then return to A/P/C menu

#### If 'P' (Party Mode):

- Invoke the `bmad-party-mode` skill with mitigation context
- Process the collaborative challenge to mitigation effectiveness
- Ask user: "Accept these changes to mitigations and requirements? (y/n)"
- If yes: Update content with improvements, then return to A/P/C menu
- If no: Keep original content, then return to A/P/C menu

#### If 'C' (Continue):

- Append the final content to `{planning_artifacts}/hazard-analysis.md`
- Update frontmatter: `stepsCompleted: [1, 2, 3, 4, 5, 6]`
- Load `./step-07-complete.md`

## APPEND TO DOCUMENT:

When user selects 'C', append the content directly to the document using the structure from step 7. Replace the "_(To be populated in Step 6)_" placeholders under "## Mitigation Summary" and "## Safety Requirements Derived".

## SUCCESS METRICS:

✅ Mitigation hierarchy applied correctly (preferring elimination over administrative controls)
✅ Each High and Medium risk hazard has at least one mitigation measure
✅ Safety requirements are verifiable, traceable, and unambiguous
✅ Architecture constraints clearly identified and justified
✅ Traceability matrix links all hazards to requirements to mitigations
✅ User confirms mitigation plan addresses all hazards
✅ A/P/C menu presented and handled correctly

## FAILURE MODES:

❌ Relying on administrative controls for High risk hazards
❌ Safety requirements that are not verifiable or testable
❌ Missing traceability from hazard to requirement to mitigation
❌ Not considering defense-in-depth for critical hazards
❌ Ignoring architectural constraints imposed by safety requirements
❌ Not presenting A/P/C menu after content generation

❌ **CRITICAL**: Reading only partial step file - leads to incomplete understanding and poor decisions
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file
❌ **CRITICAL**: Making decisions without complete understanding of step requirements and protocols

## NEXT STEP:

After user selects 'C' and content is saved to document, load `./step-07-complete.md` to finalize the hazard analysis document.

Remember: Do NOT proceed to step-07 until user explicitly selects 'C' from the A/P/C menu and content is saved!