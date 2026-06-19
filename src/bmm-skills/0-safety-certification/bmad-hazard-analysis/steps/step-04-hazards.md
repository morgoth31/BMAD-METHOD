# Step 4: Hazard Identification

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete decisions
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between safety analysis peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on hazard identification only - risk assessment comes in the next step
- ⚠️ ABSOLUTELY NO TIME ESTIMATES - AI development speed has fundamentally changed
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- ⚠️ Present A/P/C menu after generating hazard identification content
- 💾 ONLY save when user chooses C (Continue)
- 📖 Update frontmatter `stepsCompleted: [1, 2, 3, 4]` before loading next step
- 🚫 FORBIDDEN to load next step until C is selected

## COLLABORATION MENUS (A/P/C):

This step will generate content and present choices:

- **A (Advanced Elicitation)**: Use discovery protocols to identify additional hazards or refine hazard descriptions
- **P (Party Mode)**: Bring multiple perspectives to challenge hazard completeness
- **C (Continue)**: Save the content to the document and proceed to next step

## PROTOCOL INTEGRATION:

- When 'A' selected: Invoke the `bmad-advanced-elicitation` skill
- When 'P' selected: Invoke the `bmad-party-mode` skill
- PROTOCOLS always return to display this step's A/P/C menu after the A or P have completed
- User accepts/rejects protocol changes before proceeding

## CONTEXT BOUNDARIES:

- Current document and frontmatter from steps 1-3 are available
- System boundary, scope, and selected techniques are defined
- Focus on identifying hazards - severity and likelihood assessment comes later
- Each hazard should be traceable to system boundary elements

## YOUR TASK:

Conduct hazard identification using the selected techniques. Enumerate hazards, describe failure modes, identify causes, and assess initial severity for each hazard within the defined system boundary.

## HAZARD IDENTIFICATION SEQUENCE:

### 1. Apply Selected Techniques

Based on the techniques selected in Step 3, systematically apply each one:

#### If FMEA Selected:

For each subsystem/component identified in the system boundary:

- **Identify failure modes:** How can each component fail? (Complete failure, partial failure, intermittent, premature activation, failure on demand, etc.)
- **Describe effects:** What happens when this failure mode occurs? (Local effect, subsystem effect, system-level effect)
- **Identify causes:** What can cause this failure mode? (Hardware failure, software error, human error, environmental stress)
- **Detect means:** How would this failure be detected? (Alarms, monitoring, inspections)

#### If FTA Selected:

For each top-level undesired event:

- **Define top event:** What is the undesired system-level outcome?
- **Identify contributing causes:** What combinations of failures lead to this top event?
- **Map causal chains:** How do failures propagate through the system?
- **Identify minimal cut sets:** What are the minimum combinations of failures that cause the top event?

#### If HAZOP Selected:

For each process parameter and guide word combination:

- **Apply guide words:** NONE, MORE, LESS, AS WELL AS, PART OF, REVERSE, EARLY, LATE, BEFORE, AFTER
- **Identify deviations:** What meaningful deviations from design intent exist?
- **Assess consequences:** What happens if this deviation occurs?
- **Identify causes:** What could cause this deviation?
- **Evaluate safeguards:** What existing protections address this deviation?

#### If STPA Selected:

For each control action in the system:

- **Identify unsafe control actions (UCAs):**
  - Control action not provided when needed
  - Control action provided when not needed
  - Control action provided incorrectly (wrong timing, magnitude, duration)
  - Control action stopped too soon or applied too long
- **Identify causal factors:** Why might each UCA occur? (Controller issues, feedback issues, actuator issues, model process issues)
- **Map controller constraints:** What safety constraints must the controller enforce?

### 2. Compile Hazard Log Entries

For each identified hazard, create a structured entry:

**Hazard Log Entry Format:**

```
H-ID: H-001
Hazard Title: {{concise_descriptive_name}}
Subsystem: {{which_subsystem}}
Technique: {{FMEA/FTA/HAZOP/STPA}}
Description: {{detailed_hazard_description}}
Failure Mode / UCA / Deviation: {{specific_mechanism}}
Causes:
  - {{cause_1}}
  - {{cause_2}}
  - {{cause_n}}
Effects:
  - Local: {{effect_at_component_level}}
  - Subsystem: {{effect_at_subsystem_level}}
  - System: {{effect_at_system_level}}
Existing Safeguards: {{any_existing_protections}}
Initial Severity Assessment: {{Catastrophic/Critical/Major/Minor/Negligible}}
```

### 3. Organize Hazards by Subsystem

Group identified hazards by subsystem for traceability:

- Subsystem 1 hazards → list of H-IDs
- Subsystem 2 hazards → list of H-IDs
- Cross-cutting hazards → list of H-IDs
- Interface hazards → list of H-IDs

### 4. Reflect Understanding

Present your hazard identification to the user for validation:

"For {{project_name}}, I've identified {{hazard_count}} hazards using the selected techniques:

**Hazard Summary by Subsystem:**
{{summary_by_subsystem}}

**Hazard Summary by Severity:**
- Catastrophic: {{count}}
- Critical: {{count}}
- Major: {{count}}
- Minor: {{count}}
- Negligible: {{count}}

**Key hazard themes I'm noticing:**
{{patterns_or_clusters_across_hazards}}

Are there any hazards you believe are missing, or any descriptions that need correction?"

### 5. Generate Hazard Identification Content

Prepare the content to append to the document:

#### Content Structure:

```markdown
## Hazard Identification

### Hazard Log

| H-ID | Hazard Title | Subsystem | Technique | Severity |
|------|-------------|-----------|-----------|----------|
| H-001 | {{title}} | {{subsystem}} | {{technique}} | {{severity}} |
| H-002 | {{title}} | {{subsystem}} | {{technique}} | {{severity}} |

### Detailed Hazard Entries

#### H-001: {{Hazard Title}}

- **Subsystem:** {{subsystem}}
- **Technique:** {{technique_used}}
- **Description:** {{detailed_description}}
- **Failure Mode / UCA / Deviation:** {{specific_mechanism}}
- **Causes:** {{list_of_causes}}
- **Effects:**
  - Local: {{local_effect}}
  - Subsystem: {{subsystem_effect}}
  - System: {{system_effect}}
- **Existing Safeguards:** {{safeguards}}
- **Initial Severity:** {{severity_level}}

{{repeat_for_each_hazard}}

### Hazard Distribution

**By Subsystem:**
{{hazard_count_per_subsystem}}

**By Severity:**
{{hazard_count_per_severity_level}}

**Cross-Cutting Hazards:**
{{hazards_spanning_multiple_subsystems}}
```

### 6. Present Content and Menu

Show the generated content and present choices:

"I've completed the hazard identification for {{project_name}}.

**Here's what I'll add to the document:**

[Show the complete markdown content from step 5]

**What would you like to do?**
[A] Advanced Elicitation - Let's explore additional hazards or refine descriptions
[P] Party Mode - Challenge hazard completeness from different perspectives
[C] Continue - Save hazard identification and proceed to risk assessment"

### 7. Handle Menu Selection

#### If 'A' (Advanced Elicitation):

- Invoke the `bmad-advanced-elicitation` skill with hazard identification context
- Process any additional hazards or refined descriptions
- Ask user: "Accept these additions to the hazard log? (y/n)"
- If yes: Update content with additions, then return to A/P/C menu
- If no: Keep original content, then return to A/P/C menu

#### If 'P' (Party Mode):

- Invoke the `bmad-party-mode` skill with hazard identification context
- Process the collaborative challenge to hazard completeness
- Ask user: "Accept these changes to the hazard log? (y/n)"
- If yes: Update content with improvements, then return to A/P/C menu
- If no: Keep original content, then return to A/P/C menu

#### If 'C' (Continue):

- Append the final content to `{planning_artifacts}/hazard-analysis.md`
- Update frontmatter: `stepsCompleted: [1, 2, 3, 4]` and update `hazardCount` with total hazard count and `maxSeverity` with highest severity found
- Load `./step-05-risk-assessment.md`

## APPEND TO DOCUMENT:

When user selects 'C', append the content directly to the document using the structure from step 5. Replace the "_(To be populated in Step 4)_" placeholder under "## Hazard Identification".

## SUCCESS METRICS:

✅ All selected techniques systematically applied
✅ Each hazard has a unique H-ID and complete entry
✅ Hazards traceable to subsystems in system boundary
✅ Initial severity assessed for each hazard
✅ Hazard distribution summary provides clear overview
✅ User confirms hazard identification is complete
✅ A/P/C menu presented and handled correctly
✅ Frontmatter updated with hazard count and max severity

## FAILURE MODES:

❌ Missing hazards by not applying techniques thoroughly
❌ Confusing hazard identification with risk assessment (assessing likelihood too early)
❌ Not tracing hazards to system boundary elements
❌ Duplicate or overlapping hazards
❌ Vague hazard descriptions that are not actionable
❌ Not presenting A/P/C menu after content generation

❌ **CRITICAL**: Reading only partial step file - leads to incomplete understanding and poor decisions
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file
❌ **CRITICAL**: Making decisions without complete understanding of step requirements and protocols

## NEXT STEP:

After user selects 'C' and content is saved to document, load `./step-05-risk-assessment.md` to assess risk for each identified hazard.

Remember: Do NOT proceed to step-05 until user explicitly selects 'C' from the A/P/C menu and content is saved!