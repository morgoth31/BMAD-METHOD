# Step 4: Allocate Safety Requirements to Components

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete decisions
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between safety engineering peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on allocating safety requirements to system components and documenting rationale
- 🎯 ENSURE no safety requirement is left unallocated
- ⚠️ ABSOLUTELY NO TIME ESTIMATES - AI development speed has fundamentally changed
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- ⚠️ Present A/P/C menu after generating allocation
- 💾 ONLY save when user chooses C (Continue)
- 📖 Update frontmatter `stepsCompleted: [1, 2, 3, 4]` before loading next step
- 🚫 FORBIDDEN to load next step until C is selected

## COLLABORATION MENUS (A/P/C):

- **A (Advanced Elicitation)**: Deep-dive into allocation rationale and component responsibility
- **P (Party Mode)**: Multiple perspectives (systems engineer, software architect, safety assessor) on allocation decisions
- **C (Continue)**: Save and proceed to verification

## PROTOCOL INTEGRATION:

- When 'A' selected: Invoke the `bmad-advanced-elicitation` skill
- When 'P' selected: Invoke the `bmad-party-mode` skill
- PROTOCOLS always return to display this step's A/P/C menu after completion

## CONTEXT BOUNDARIES:

- Safety requirements and their criticality levels from steps 2-3 are in the document
- Architecture document (if available) provides component structure
- Focus on allocation and responsibility assignment only

## YOUR TASK:

Allocate each safety requirement to specific system components and software modules. Document the allocation rationale for traceability and certification evidence.

## ALLOCATION SEQUENCE:

### 1. Review System Architecture

**If architecture document is available:**
- Extract the system component structure
- Identify software modules and their responsibilities
- Map hardware/software boundaries
- Identify shared/cross-cutting components

**If no architecture document is available:**
- Collaborate with the user to identify the system decomposition
- Create a component hierarchy based on the system design
- Identify major subsystems and modules

### 2. Allocate Requirements to Components

For each safety requirement:
- Identify which component(s) are responsible for implementing the requirement
- Determine if the requirement spans multiple components (interface requirements)
- Document the allocation rationale
- Identify any derived requirements that emerge from allocation

**Allocation Rules:**

- Each safety requirement MUST be allocated to at least one component
- A single requirement may be allocated to multiple components (shared responsibility)
- Interface requirements between components must be explicitly identified
- Derived requirements from allocation must be captured

**Allocation Template:**

| SR ID | Safety Requirement | Allocated Component(s) | Allocation Type | Rationale |
|-------|-------------------|----------------------|-----------------|-----------|
| SR-1.1 | {requirement} | {component} | {primary/shared/interface} | {why this component} |

### 3. Present Allocation and Validate

"I've allocated safety requirements to system components:

**Allocation Summary:**
- {Component A}: {n} requirements ({list of SR IDs})
- {Component B}: {n} requirements ({list of SR IDs})
- Shared/Interface: {n} requirements ({list of SR IDs})

**Derived Requirements from Allocation:**
{Any new requirements that emerged from cross-component allocation}

**Unallocated Requirements:**
{Should be zero — any unallocated requirements must be resolved}

Does this allocation match your system architecture and component responsibilities?"

### 4. Generate Allocation Content

```markdown
## Requirement Allocation

### System Component Structure

{Component hierarchy or reference to architecture document}

### Allocation Matrix

| SR ID | Safety Requirement | Criticality | Allocated Component(s) | Allocation Type | Rationale |
|-------|-------------------|-------------|----------------------|-----------------|-----------|
| SR-{id}.1 | {requirement} | {SIL/DAL} | {component} | {type} | {rationale} |

### Derived Requirements from Allocation

{Any new requirements that emerge from cross-component allocation}

### Cross-Cutting Safety Concerns

{Components that share responsibility for safety requirements}
```

### 5. Present Content and Menu

Show the generated content and present choices:

"I've drafted the Requirement Allocation matrix mapping safety requirements to system components. This establishes clear responsibility for implementation and verification.

**What would you like to do?**
[A] Advanced Elicitation - Explore allocation rationale and component boundaries
[P] Party Mode - Review from systems engineering and safety assessment perspectives
[C] Continue - Save this allocation and proceed to traceability verification"

### 6. Handle Menu Selection

(Standard A/P/C handling as in previous steps)

## APPEND TO DOCUMENT:

When user selects 'C', append the content directly to the document.

## SUCCESS METRICS:

✅ Every safety requirement allocated to at least one component
✅ Allocation rationale documented for each assignment
✅ Shared responsibilities explicitly identified
✅ Derived requirements from allocation captured
✅ Cross-cutting safety concerns identified
✅ Allocation aligns with system architecture (if available)
✅ No unallocated safety requirements remain

## FAILURE MODES:

❌ Leaving safety requirements unallocated
❌ Not documenting allocation rationale
❌ Missing derived requirements from cross-component allocation
❌ Not aligning allocation with actual system architecture
❌ Not identifying shared responsibility requirements
❌ Allocating to non-existent or vaguely defined components

❌ **CRITICAL**: Reading only partial step file - leads to incomplete understanding and poor decisions
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file
❌ **CRITICAL**: Making decisions without complete understanding of step requirements and protocols

## NEXT STEP:

After user selects 'C' and content is saved, load `./step-05-verify.md` to verify bidirectional traceability completeness.

Remember: Do NOT proceed to step-05 until user explicitly selects 'C' from the A/P/C menu and content is saved!