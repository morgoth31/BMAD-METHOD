# Step 2: Derive Safety Requirements from Hazards

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete decisions
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between safety engineering peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on deriving safety requirements from identified hazards
- 🎯 ANALYZE loaded hazard analysis, don't assume or generate requirements without basis
- ⚠️ ABSOLUTELY NO TIME ESTIMATES - AI development speed has fundamentally changed
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- ⚠️ Present A/P/C menu after generating derived safety requirements
- 💾 ONLY save when user chooses C (Continue)
- 📖 Update frontmatter `stepsCompleted: [1, 2]` before loading next step
- 🚫 FORBIDDEN to load next step until C is selected

## COLLABORATION MENUS (A/P/C):

This step will generate content and present choices:

- **A (Advanced Elicitation)**: Use discovery protocols to develop deeper insights about safety requirements and hazard mitigation strategies
- **P (Party Mode)**: Bring multiple perspectives (safety engineer, systems engineer, certification authority) to analyze requirements from different angles
- **C (Continue)**: Save the content to the document and proceed to next step

## PROTOCOL INTEGRATION:

- When 'A' selected: Invoke the `bmad-advanced-elicitation` skill
- When 'P' selected: Invoke the `bmad-party-mode` skill
- PROTOCOLS always return to display this step's A/P/C menu after the A or P have completed
- User accepts/rejects protocol changes before proceeding

## CONTEXT BOUNDARIES:

- Current document and frontmatter from step 1 are available
- Hazard analysis is loaded and available for reference
- Architecture and PRD may be available for context
- Focus on deriving requirements from identified hazards only

## YOUR TASK:

Systematically derive safety requirements from each hazard identified in the hazard analysis. For each hazard, one or more safety requirements must be created to mitigate or control the risk.

## DERIVATION SEQUENCE:

### 1. Review Hazard Analysis

**Extract all identified hazards:**

- Read through the hazard analysis document completely
- List every hazard with its ID, description, severity, and likelihood
- Note the risk classification for each hazard
- Identify any hazards that already have suggested mitigations

### 2. Derive Safety Requirements Per Hazard

For **each** hazard, derive safety requirements using this protocol:

**Derivation Rules:**

- One hazard may require multiple safety requirements (defense in depth)
- Each safety requirement must be:
  - **Verifiable**: Can be tested or analyzed to confirm compliance
  - **Unambiguous**: Single clear interpretation
  - **Traceable**: Links back to the specific hazard(s) it mitigates
  - **Achievable**: Technically feasible within system constraints
  - **Atomic**: Addresses a single safety concern

**Requirement Template per Hazard:**

For each hazard H-{id}:
- SR-{id}.1: [Primary mitigation requirement]
- SR-{id}.2: [Secondary/backup requirement] (if defense-in-depth needed)
- SR-{id}.3: [Monitoring/detection requirement] (if applicable)

**Requirement Writing Pattern:**

"The system shall [action verb] [object] [condition/constraint] in order to [safety objective]"

### 3. Present Derived Requirements

Present the derived safety requirements to the user for validation:

"I've derived safety requirements from your hazard analysis. Here's the mapping:

**H-{id}: {hazard description}**
- SR-{id}.1: {requirement text}
- SR-{id}.2: {requirement text} (defense in depth)
- Traceability: H-{id} → SR-{id}.1, SR-{id}.2

{repeat for each hazard}

**Total hazards analyzed:** {count}
**Total safety requirements derived:** {count}
**Average requirements per hazard:** {ratio}

Does this cover all the hazards from your analysis?"

### 4. Generate Safety Requirements Content

Prepare the content to append to the document:

#### Content Structure:

```markdown
## Safety Requirements Derivation

### Hazard-to-Requirement Mapping

{For each hazard, list the derived requirements with rationale}

### Safety Requirements Table

| ID | Safety Requirement | Source Hazard | Mitigation Type | Rationale |
|----|-------------------|--------------|-----------------|-----------|
| SR-{id}.1 | {requirement} | H-{id} | {primary/secondary/monitoring} | {why this addresses the hazard} |

### Traceability Matrix (Hazard → Requirements)

| Hazard ID | Hazard Description | Safety Requirement(s) | Mitigation Strategy |
|-----------|-------------------|----------------------|---------------------|
| H-{id} | {description} | SR-{id}.1, SR-{id}.2 | {strategy} |
```

### 5. Present Content and Menu

Show the generated content and present choices:

"I've drafted the Safety Requirements derivation from your hazard analysis. This establishes the foundation for criticality assignment and allocation.

**What would you like to do?**
[A] Advanced Elicitation - Let's dive deeper into specific hazard mitigations
[P] Party Mode - Bring different engineering perspectives to review requirements
[C] Continue - Save this derivation and proceed to criticality classification"

### 6. Handle Menu Selection

#### If 'A' (Advanced Elicitation):
- Invoke the `bmad-advanced-elicitation` skill with the current requirements
- Process the enhanced insights
- Ask user: "Accept these enhancements to the safety requirements? (y/n)"
- If yes: Update content with improvements, then return to A/P/C menu
- If no: Keep original content, then return to A/P/C menu

#### If 'P' (Party Mode):
- Invoke the `bmad-party-mode` skill with the current safety requirements context
- Process the collaborative improvements
- Ask user: "Accept these changes to the safety requirements? (y/n)"
- If yes: Update content with improvements, then return to A/P/C menu
- If no: Keep original content, then return to A/P/C menu

#### If 'C' (Continue):
- Append the final content to `{planning_artifacts}/safety-requirements.md`
- Update frontmatter: `stepsCompleted: [1, 2]`
- Load `./step-03-classify.md`

## APPEND TO DOCUMENT:

When user selects 'C', append the content directly to the document using the structure from step 4.

## SUCCESS METRICS:

✅ Every hazard in the analysis has at least one derived safety requirement
✅ Safety requirements are verifiable, unambiguous, traceable, achievable, and atomic
✅ Defense-in-depth addressed where hazard severity warrants it
✅ Traceability matrix shows complete hazard-to-requirement mapping
✅ User confirmed the derived requirements cover all hazards
✅ A/P/C menu presented and handled correctly
✅ Content properly appended to document when C selected

## FAILURE MODES:

❌ Missing hazards from the derivation (not all hazards addressed)
❌ Safety requirements that are vague, untestable, or ambiguous
❌ One-to-one mapping assumed when defense-in-depth is needed
❌ Not presenting A/P/C menu after content generation
❌ Requirements not traceable to specific hazards
❌ Deriving requirements without referencing the actual hazard analysis

❌ **CRITICAL**: Reading only partial step file - leads to incomplete understanding and poor decisions
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file
❌ **CRITICAL**: Making decisions without complete understanding of step requirements and protocols

## NEXT STEP:

After user selects 'C' and content is saved to document, load `./step-03-classify.md` to assign SIL/DAL/category criticality levels to each safety requirement.

Remember: Do NOT proceed to step-03 until user explicitly selects 'C' from the A/P/C menu and content is saved!