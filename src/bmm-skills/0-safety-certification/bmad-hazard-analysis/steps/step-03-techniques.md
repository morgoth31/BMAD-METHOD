# Step 3: Select Hazard Analysis Techniques

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete decisions
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between safety analysis peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on technique selection only - don't look ahead to hazard identification
- ⚠️ ABSOLUTELY NO TIME ESTIMATES - AI development speed has fundamentally changed
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- ⚠️ Present A/P/C menu after generating technique selection content
- 💾 ONLY save when user chooses C (Continue)
- 📖 Update frontmatter `stepsCompleted: [1, 2, 3]` and `techniques` array before loading next step
- 🚫 FORBIDDEN to load next step until C is selected

## COLLABORATION MENUS (A/P/C):

This step will generate content and present choices:

- **A (Advanced Elicitation)**: Use discovery protocols to explore technique trade-offs more deeply
- **P (Party Mode)**: Bring multiple perspectives to evaluate technique suitability
- **C (Continue)**: Save the content to the document and proceed to next step

## PROTOCOL INTEGRATION:

- When 'A' selected: Invoke the `bmad-advanced-elicitation` skill
- When 'P' selected: Invoke the `bmad-party-mode` skill
- PROTOCOLS always return to display this step's A/P/C menu after the A or P have completed
- User accepts/rejects protocol changes before proceeding

## CONTEXT BOUNDARIES:

- Current document and frontmatter from steps 1-2 are available
- System boundary and scope already defined
- Focus on selecting the most appropriate analysis techniques for the project
- Technique selection influences all subsequent analysis steps

## YOUR TASK:

Guide the user through selecting hazard analysis techniques appropriate for their project, considering the system boundary, operational modes, and safety integrity requirements defined in Step 2.

## TECHNIQUE SELECTION SEQUENCE:

### 1. Present Available Techniques

Explain each technique with its strengths, limitations, and best-fit scenarios:

#### FMEA (Failure Modes and Effects Analysis)

**Description:** Bottom-up, inductive technique that examines each component's potential failure modes and their effects on the system.

**Best For:**
- Hardware-intensive systems with discrete components
- Systems with well-understood component failure modes
- Detailed analysis of specific subsystems
- Compliance with automotive (ISO 26262) and manufacturing standards

**Strengths:**
- Systematic and exhaustive component-level analysis
- Clear traceability from failure mode to effect
- Well-established methodology with extensive tooling support
- Produces structured risk priority numbers (RPN)

**Limitations:**
- Cannot easily capture systemic interactions and emergent behaviors
- Does not address multiple simultaneous failures well
- Time-consuming for large, complex systems
- Focuses on component failures, not design errors

#### FTA (Fault Tree Analysis)

**Description:** Top-down, deductive technique that starts with an undesired event and traces back through combinations of contributing causes.

**Best For:**
- Analyzing specific undesired top events
- Systems where causal chains need to be understood
- Quantitative risk assessment when failure data is available
- Compliance with nuclear (IEC 61226), aerospace (ARP4761), and process industry standards

**Strengths:**
- Clear visual representation of causal relationships
- Supports quantitative analysis (probability calculation)
- Identifies minimal cut sets (critical failure combinations)
- Excellent for single high-consequence hazard deep-dive

**Limitations:**
- Requires a specific top event to start (not comprehensive by itself)
- Binary logic (AND/OR gates) may not capture partial failures
- Can become very large for complex systems
- Does not easily model time-dependent or sequential failures

#### HAZOP (Hazard and Operability Study)

**Description:** Structured brainstorming technique using guide words applied to process parameters to identify deviations from design intent.

**Best For:**
- Process plants and chemical systems
- Piping and instrumentation diagrams (P&IDs)
- Systems with flow-based operations (fluid, data, energy)
- Compliance with IEC 61882 and process safety standards

**Strengths:**
- Highly systematic and thorough for process systems
- Identifies operability issues alongside hazards
- Team-based approach leverages diverse expertise
- Uses structured guide words ensuring comprehensive coverage

**Limitations:**
- Primarily designed for process/flow-based systems
- Requires domain experts for effective brainstorming
- Can generate large volumes of low-priority findings
- Less applicable to software-intensive or discrete systems

#### STPA (System-Theoretic Process Analysis)

**Description:** Top-down technique based on systems theory that identifies unsafe control actions rather than component failures.

**Best For:**
- Software-intensive and cyber-physical systems
- Systems with complex human-automation interaction
- Emerging technology with limited failure data
- Systems where emergent behavior and interaction hazards are critical

**Strengths:**
- Captures systemic hazards beyond component failures
- Addresses software, human, and organizational factors equally
- Models feedback loops and dynamic interactions
- Suitable for systems where traditional FMEA/FTA miss interaction hazards

**Limitations:**
- Relatively newer technique with less standardization
- Requires systems thinking mindset
- Less established tooling and certification mapping
- Can be abstract without component-level specificity

### 2. Recommend Techniques Based on Project

Based on the system boundary and scope defined in Step 2, provide a recommendation:

**Decision Criteria:**

| Project Characteristic | Recommended Primary | Recommended Supplementary |
|------------------------|---------------------|---------------------------|
| Hardware-intensive system | FMEA | FTA for top hazards |
| Process/flow-based system | HAZOP | FMEA for critical components |
| Software/cyber-physical system | STPA | FTA for critical scenarios |
| Safety-critical with certification | FTA + FMEA | STPA for interaction hazards |
| Complex human-automation system | STPA | FMEA for known failure modes |
| Multi-hazard high-consequence | FTA | FMEA + HAZOP |

**Project-Specific Recommendation:**

Based on the project type and system characteristics identified:
- Primary technique: {{recommended_primary}}
- Supplementary technique(s): {{recommended_supplementary}}
- Rationale: {{why_these_techniques_fit}}

### 3. Reflect Understanding

Present your technique recommendation and ask for user input:

"For {{project_name}}, based on the system characteristics we've defined:

**System type:** {{hardware/software/process/cyber-physical}}
**Complexity level:** {{simple/moderate/complex/highly-complex}}
**Safety integrity requirement:** {{derived_from_standards_if_known}}

**I recommend:**

- **Primary technique:** {{primary_technique}} — {{rationale}}
- **Supplementary technique(s):** {{supplementary}} — {{rationale}}

**Technique combination rationale:**
{{explain_how_the_techniques_complement_each_other}}

Do you agree with this selection, or would you like to adjust which techniques we use?"

### 4. Generate Technique Selection Content

Prepare the content to append to the document:

#### Content Structure:

```markdown
## Analysis Techniques

### Selected Techniques

| Technique | Role | Scope |
|-----------|------|-------|
| {{technique_name}} | {{Primary/Supplementary}} | {{scope_of_application}} |

### Technique Application Plan

**{{technique_1}} Application:**
- Scope: {{what_parts_of_the_system}}
- Focus: {{what_hazards_or_failures_to_analyze}}
- Expected outputs: {{what_deliverables}}

**{{technique_2}} Application:**
- Scope: {{what_parts_of_the_system}}
- Focus: {{what_hazards_or_failures_to_analyze}}
- Expected outputs: {{what_deliverables}}

### Selection Rationale

{{why_these_techniques_were_chosen_for_this_project}}
{{how_they_complement_each_other}}
{{any_certification_or_standard_requirements_driving_the_selection}}
```

### 5. Present Content and Menu

Show the generated content and present choices:

"I've drafted the Analysis Techniques section for our hazard analysis.

**Here's what I'll add to the document:**

[Show the complete markdown content from step 4]

**What would you like to do?**
[A] Advanced Elicitation - Let's explore technique trade-offs more deeply
[P] Party Mode - Bring different perspectives on technique selection
[C] Continue - Save this selection and begin hazard identification"

### 6. Handle Menu Selection

#### If 'A' (Advanced Elicitation):

- Invoke the `bmad-advanced-elicitation` skill with technique selection context
- Process the enhanced technique insights
- Ask user: "Accept these enhancements to technique selection? (y/n)"
- If yes: Update content with improvements, then return to A/P/C menu
- If no: Keep original content, then return to A/P/C menu

#### If 'P' (Party Mode):

- Invoke the `bmad-party-mode` skill with technique selection context
- Process the collaborative improvements
- Ask user: "Accept these changes to technique selection? (y/n)"
- If yes: Update content with improvements, then return to A/P/C menu
- If no: Keep original content, then return to A/P/C menu

#### If 'C' (Continue):

- Append the final content to `{planning_artifacts}/hazard-analysis.md`
- Update frontmatter: `stepsCompleted: [1, 2, 3]` and update `techniques` array with selected technique names
- Load `./step-04-hazards.md`

## APPEND TO DOCUMENT:

When user selects 'C', append the content directly to the document using the structure from step 4, after the System Boundary section.

## SUCCESS METRICS:

✅ All four techniques explained with strengths and limitations
✅ Project-specific recommendation provided with clear rationale
✅ Technique combination justified based on system characteristics
✅ Application plan defines scope for each technique
✅ User confirms technique selection
✅ A/P/C menu presented and handled correctly
✅ Frontmatter updated with selected techniques

## FAILURE MODES:

❌ Recommending techniques without considering system characteristics
❌ Not explaining trade-offs between techniques
❌ Failing to match techniques to certification requirements
❌ Not covering how techniques complement each other
❌ Selecting only one technique when combination is warranted
❌ Not presenting A/P/C menu after content generation

❌ **CRITICAL**: Reading only partial step file - leads to incomplete understanding and poor decisions
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file
❌ **CRITICAL**: Making decisions without complete understanding of step requirements and protocols

## NEXT STEP:

After user selects 'C' and content is saved to document, load `./step-04-hazards.md` to begin hazard identification.

Remember: Do NOT proceed to step-04 until user explicitly selects 'C' from the A/P/C menu and content is saved!