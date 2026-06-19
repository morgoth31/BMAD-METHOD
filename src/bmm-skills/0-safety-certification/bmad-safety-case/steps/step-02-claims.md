# Step 2: Define Safety Claims

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete decisions
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between safety case engineering peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on defining the top-level safety claim and decomposing into sub-claims
- 🎯 USE GSN (Goal Structuring Notation) patterns for claim structuring
- ⚠️ ABSOLUTELY NO TIME ESTIMATES - AI development speed has fundamentally changed
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- ⚠️ Present A/P/C menu after generating claims
- 💾 ONLY save when user chooses C (Continue)
- 📖 Update frontmatter `stepsCompleted: [1, 2]` before loading next step
- 🚫 FORBIDDEN to load next step until C is selected

## COLLABORATION MENUS (A/P/C):

- **A (Advanced Elicitation)**: Deep-dive into claim structuring, GSN patterns, and argument strength
- **P (Party Mode)**: Multiple perspectives (safety assessor, certification authority, systems engineer) on claim completeness
- **C (Continue)**: Save claims and proceed to evidence mapping

## PROTOCOL INTEGRATION:

- When 'A' selected: Invoke the `bmad-advanced-elicitation` skill
- When 'P' selected: Invoke the `bmad-party-mode` skill
- PROTOCOLS always return to display this step's A/P/C menu after completion

## CONTEXT BOUNDARIES:

- All discovered artifacts are available for reference
- Hazard analysis and safety requirements provide the basis for claims
- Focus on claim definition and decomposition only

## YOUR TASK:

Define the top-level safety claim for the system, then decompose it into sub-claims following GSN (Goal Structuring Notation) patterns. Each claim must be specific, measurable, and supported by evidence in later steps.

## CLAIM DEFINITION SEQUENCE:

### 1. Establish the Top-Level Safety Claim

The top-level claim (GSN "Goal") expresses the overall safety argument:

**Top-Level Claim Pattern:**

"[System Name] is adequately safe for [intended operation/use] in [defined context/environment]"

**The top-level claim must be:**
- **Specific**: Names the system, the operation, and the context
- **Measurable**: Can be supported by evidence
- **Bounded**: Defines the scope of the safety argument
- **Defensible**: Can be broken down into sub-claims with evidence

**Derive the top-level claim from:**
- System name and description from the PRD/architecture
- Intended use from the hazard analysis (operational context)
- Safety requirements that define "adequately safe"
- Domain-specific safety standards that define acceptance criteria

### 2. Decompose into Sub-Claims

Using GSN decomposition strategies, break the top-level claim into sub-claims:

**Decomposition Strategies:**

- **By Hazard**: One sub-claim per hazard addressed (most common for safety)
- **By Function**: One sub-claim per safety-relevant function
- **By Component**: One sub-claim per safety-critical component
- **By Property**: One sub-claim per safety property (reliability, robustness, etc.)

**Recommended approach**: Start with decomposition by hazard, then refine by property.

**For each sub-claim:**
- Assign a unique ID (G-1, G-2, etc. for Goals)
- Define the claim statement (what is being asserted)
- Identify the strategy (S-1, S-2 etc.) that connects sub-claims to parent
- Note the context (C-1, C-2 etc.) and assumptions (A-1, A-2 etc.) that apply

**GSN Element Types:**
- **Goal (G)**: A claim to be demonstrated (e.g., "The system detects hazardous condition X within Y seconds")
- **Strategy (S)**: The reasoning approach (e.g., "Argument over all identified hazards")
- **Context (C)**: Relevant context information (e.g., "System operates in environment E")
- **Assumption (A)**: Assumptions made (e.g., "Operators follow procedure P")
- **Justification (J)**: Why a strategy is appropriate (e.g., "Industry standard approach per IEC 61508")

### 3. Present Claims Structure

"I've defined the safety claims structure for {{project_name}}:

**Top-Level Claim (G-0):**
{Top-level safety claim statement}

**Decomposition Strategy (S-1):**
{How the top-level claim is decomposed}

**Sub-Claims:**

G-1: {Sub-claim 1} — addresses H-{id}
G-2: {Sub-claim 2} — addresses H-{id}
G-3: {Sub-claim 3} — addresses H-{id}
...

**Context and Assumptions:**

C-1: {Context for the argument}
A-1: {Assumption being made}

**Is this claim structure complete and appropriate for your system's safety argument?"

### 4. Generate Claims Content

```markdown
## Top-Level Claim

### G-0: {Top-level safety claim}

_System is adequately safe for {intended use} in {defined context}_

**Strategy S-1:** {Decomposition strategy, e.g., "Argument over all identified hazards"}

**Context C-1:** {Relevant context}
**Assumption A-1:** {Assumptions made}
**Justification J-1:** {Why this strategy is appropriate}

## Sub-Claims

### G-1: {Sub-claim statement}

_Addressess hazard H-{id}: {hazard description}_

**Strategy:** {How this sub-claim will be supported}
**Context:** {Relevant context}
**Assumption:** {Assumptions}

### G-2: {Sub-claim statement}

_Addressess hazard H-{id}: {hazard description}_

**Strategy:** {How this sub-claim will be supported}
**Context:** {Relevant context}
**Assumption:** {Assumptions}

{Continue for each sub-claim}

## GSN Diagram Specification

```gsn
G-0: System adequately safe
  ├── S-1: Argument over all hazards
  ├── C-1: System definition and context
  ├── A-1: Operational assumptions
  ├── G-1: {sub-claim 1}
  │     ├── S-{n}: {strategy}
  │     └── {further decomposition}
  ├── G-2: {sub-claim 2}
  │     ├── S-{n}: {strategy}
  │     └── {further decomposition}
  └── G-{n}: {sub-claim n}
        ├── S-{n}: {strategy}
        └── {further decomposition}
```
```

### 5. Present Content and Menu

Show the generated content and present choices:

"I've drafted the Safety Claims structure using GSN notation. This defines what the safety case needs to demonstrate and how it's decomposed.

**What would you like to do?**
[A] Advanced Elicitation - Explore claim structuring and argument patterns
[P] Party Mode - Review from safety assessment and certification perspectives
[C] Continue - Save claims and proceed to evidence mapping"

### 6. Handle Menu Selection

(Standard A/P/C handling as in previous steps)

## APPEND TO DOCUMENT:

When user selects 'C', append the content directly to the document.

## SUCCESS METRICS:

✅ Top-level safety claim is specific, measurable, bounded, and defensible
✅ Sub-claims decompose the top-level claim completely
✅ Each sub-claim traces to a specific hazard or safety concern
✅ GSN elements (Goals, Strategies, Contexts, Assumptions) properly identified
✅ Decomposition strategy is appropriate for the domain
✅ Claims are verifiable through evidence
✅ A/P/C menu presented and handled correctly

## FAILURE MODES:

❌ Top-level claim too vague or unbounded
❌ Sub-claims don't fully cover the top-level claim
❌ Missing GSN element types (strategy, context, assumptions)
❌ Claims that can't be supported by evidence
❌ Not tracing sub-claims to specific hazards
❌ Using decomposition strategy inappropriate for the domain

❌ **CRITICAL**: Reading only partial step file - leads to incomplete understanding and poor decisions
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file
❌ **CRITICAL**: Making decisions without complete understanding of step requirements and protocols

## NEXT STEP:

After user selects 'C' and content is saved, load `./step-03-evidence.md` to map evidence to each sub-claim.

Remember: Do NOT proceed to step-03 until user explicitly selects 'C' from the A/P/C menu and content is saved!