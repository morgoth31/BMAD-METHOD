# Step 2: Define System Boundary and Scope

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete decisions
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between safety analysis peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on defining system boundary and scope only - don't look ahead to future steps
- ⚠️ ABSOLUTELY NO TIME ESTIMATES - AI development speed has fundamentally changed
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- ⚠️ Present A/P/C menu after generating scope content
- 💾 ONLY save when user chooses C (Continue)
- 📖 Update frontmatter `stepsCompleted: [1, 2]` before loading next step
- 🚫 FORBIDDEN to load next step until C is selected

## COLLABORATION MENUS (A/P/C):

This step will generate content and present choices:

- **A (Advanced Elicitation)**: Use discovery protocols to develop deeper insights about system boundary and scope
- **P (Party Mode)**: Bring multiple perspectives to analyze system scope from different stakeholder angles
- **C (Continue)**: Save the content to the document and proceed to next step

## PROTOCOL INTEGRATION:

- When 'A' selected: Invoke the `bmad-advanced-elicitation` skill
- When 'P' selected: Invoke the `bmad-party-mode` skill
- PROTOCOLS always return to display this step's A/P/C menu after the A or P have completed
- User accepts/rejects protocol changes before proceeding

## CONTEXT BOUNDARIES:

- Current document and frontmatter from step 1 are available
- Input documents already loaded are in memory (architecture, PRD, etc.)
- Focus on system boundary definition for hazard analysis
- No hazard identification yet - pure scope definition phase

## YOUR TASK:

Define the system boundary, identify subsystems, interfaces, and operational modes that are in scope for hazard analysis based on the loaded project documents.

## SCOPE DEFINITION SEQUENCE:

### 1. Review System Architecture

**From Architecture Analysis:**

- Extract and analyze the system architecture and component structure
- Identify subsystems and their boundaries
- Map interfaces between subsystems (data, control, physical, energy)
- Note any environmental interactions (sensors, actuators, external systems)
- Identify the system's operating environment and conditions

**From PRD (if available):**

- Extract safety-relevant functional requirements
- Identify intended operational modes (normal, degraded, emergency, maintenance)
- Note any explicit safety requirements or constraints
- Identify user/operator interaction patterns

### 2. Define System Boundary

Collaboratively define:

**System Under Analysis (SUA):**
- What is included in the system boundary?
- What is explicitly excluded from the system boundary?
- Where does the system interact with its environment?

**Subsystem Decomposition:**
- List all subsystems within the boundary
- For each subsystem, note its primary function
- Identify which subsystems are safety-relevant

**Interfaces:**
- Internal interfaces between subsystems
- External interfaces with operators, other systems, and the environment
- Data flows across boundaries
- Energy flows across boundaries
- Physical connections and actuation paths

**Operational Modes:**
- Normal operation mode(s)
- Degraded operation mode(s)
- Emergency/fault operation mode(s)
- Maintenance and service mode(s)
- Startup and shutdown modes

### 3. Reflect Understanding

Present your analysis back to user for validation:

"I'm defining the system boundary for hazard analysis of {{project_name}}.

**System Under Analysis:** {{system_description}}

**Included in boundary:**
- [List subsystems and components included]

**Excluded from boundary:**
- [List what is explicitly out of scope]

**Key Interfaces:**
- [List critical interfaces and their nature]

**Operational Modes:**
- [List modes and their descriptions]

**Safety-relevant subsystems:**
- [List subsystems with safety implications]

Does this boundary definition accurately capture what needs to be analyzed?"

### 4. Generate System Boundary Content

Prepare the content to append to the document:

#### Content Structure:

```markdown
## System Boundary

### System Under Analysis

{{clear_description_of_what_is_in_scope}}

### Included in Boundary

{{list_of_subsystems_components_functions_in_scope}}

### Excluded from Boundary

{{list_of_what_is_explicitly_out_of_scope}}

### Subsystem Decomposition

| Subsystem | Primary Function | Safety-Relevant |
|-----------|-----------------|-----------------|
| {{subsystem_name}} | {{function}} | {{Yes/No}} |

### Interfaces

| Interface | Type | Direction | Description |
|-----------|------|-----------|-------------|
| {{interface_name}} | {{Data/Control/Physical/Energy}} | {{Inbound/Outbound/Bidirectional}} | {{description}} |

### Operational Modes

| Mode | Description | Safety Considerations |
|------|-------------|----------------------|
| {{mode_name}} | {{description}} | {{considerations}} |

### Environmental Conditions

{{relevant_environmental_conditions_affecting_safety}}
```

### 5. Present Content and Menu

Show the generated content and present choices:

"I've drafted the System Boundary definition for hazard analysis. This establishes what is in and out of scope for our analysis.

**Here's what I'll add to the document:**

[Show the complete markdown content from step 4]

**What would you like to do?**
[A] Advanced Elicitation - Let's dive deeper into boundary and interface details
[P] Party Mode - Bring different perspectives to analyze scope
[C] Continue - Save this scope definition and select analysis techniques"

### 6. Handle Menu Selection

#### If 'A' (Advanced Elicitation):

- Invoke the `bmad-advanced-elicitation` skill with the current scope analysis
- Process the enhanced boundary insights that come back
- Ask user: "Accept these enhancements to the system boundary? (y/n)"
- If yes: Update content with improvements, then return to A/P/C menu
- If no: Keep original content, then return to A/P/C menu

#### If 'P' (Party Mode):

- Invoke the `bmad-party-mode` skill with the current system scope
- Process the collaborative improvements to boundary understanding
- Ask user: "Accept these changes to the system boundary? (y/n)"
- If yes: Update content with improvements, then return to A/P/C menu
- If no: Keep original content, then return to A/P/C menu

#### If 'C' (Continue):

- Append the final content to `{planning_artifacts}/hazard-analysis.md`
- Update frontmatter: `stepsCompleted: [1, 2]`
- Load `./step-03-techniques.md`

## APPEND TO DOCUMENT:

When user selects 'C', append the content directly to the document using the structure from step 4. Replace the "_(To be defined in Step 2)_" placeholder under "## System Boundary".

## SUCCESS METRICS:

✅ System boundary clearly defined with in-scope and out-of-scope items
✅ All subsystems identified with safety-relevance noted
✅ Interfaces cataloged with type and direction
✅ Operational modes enumerated with safety considerations
✅ User confirmation of boundary definition
✅ A/P/C menu presented and handled correctly
✅ Content properly appended to document when C selected

## FAILURE MODES:

❌ Defining an overly broad or narrow system boundary
❌ Missing critical interfaces or operational modes
❌ Not identifying safety-relevant subsystems
❌ Not validating scope with user
❌ Including elements without clear justification
❌ Not presenting A/P/C menu after content generation

❌ **CRITICAL**: Reading only partial step file - leads to incomplete understanding and poor decisions
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file
❌ **CRITICAL**: Making decisions without complete understanding of step requirements and protocols

## NEXT STEP:

After user selects 'C' and content is saved to document, load `./step-03-techniques.md` to select hazard analysis techniques.

Remember: Do NOT proceed to step-03 until user explicitly selects 'C' from the A/P/C menu and content is saved!