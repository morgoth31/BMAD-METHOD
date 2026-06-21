# Step 2: Formal Specification

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete specifications
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between formal methods engineer and certification analyst peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on formal specification only - verification execution happens in the next step
- 🚫 FORBIDDEN to skip properties or assume requirements are correctly formalized without user confirmation
- ⚠️ ABSOLUTELY NO TIME ESTIMATES

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- 💾 Update document and frontmatter as you formalize specifications
- 📖 Set up frontmatter `stepsCompleted: [1, 2]` before loading next step
- 🚫 FORBIDDEN to load next step until specification is complete

## CONTEXT BOUNDARIES:

- Variables from workflow.md are available in memory
- Previous context = what's in output document + frontmatter + loaded input documents
- Don't assume knowledge from other steps
- Specification relies on requirements and component scope identified in step-01

## YOUR TASK:

Translate the identified requirements and safety properties into formal specifications suitable for the selected formal method(s). Define the properties to be verified and choose the appropriate formalism.

## SPECIFICATION SEQUENCE:

### 1. Load and Analyze Requirements

Based on the component scope and formal method(s) identified in step-01:

- Load the software requirements for the identified component(s)
- Identify which requirements will be formally verified
- Classify each requirement by type:
  - **Safety properties**: "Nothing bad happens" (e.g., thrust must never exceed max limit)
  - **Liveness properties**: "Something good eventually happens" (e.g., system will eventually respond)
  - **Invariants**: Properties that must always hold (e.g., sum of inputs equals output)
  - **Functional correctness**: Input-output relationships (e.g., if input > threshold then output = ACTIVE)

<critical>For each requirement being formally specified, discuss with the user what the intended behavior is. Do not assume you understand the requirement without confirmation. Ambiguous requirements must be clarified before formalization.</critical>

### 2. Choose the Formalism

Based on the formal method(s) selected and the nature of the properties, recommend and confirm the formalism:

| Formalism | Best For | Common Tools | DO-333 Notes |
|-----------|----------|--------------|--------------|
| **Z Notation** | Specification of data types and operations | Community/Z3 | Well-established; primarily specification |
| **B Method / Event-B** | Refinement-based development and proof | Atelier-B/ProB/Rodin | Strong DO-333 credit; supports refinement |
| **Coq** | Higher-order properties and proofs | Coq IDE | Strong credit; requires significant expertise |
| **TLA+** | Concurrent and distributed system properties | TLA+ Toolbox | Good for liveness/safety; model checking + proof |
| **Alloy** | Lightweight specification and analysis | Alloy Analyzer | Good for structural properties; bounded analysis |
| **Isabelle/HOL** | Complex mathematical properties | Isabelle/jEdit | Strong credit; similar expertise level as Coq |

Confirm with the user which formalism will be used for each property type.

### 3. Define Formal Properties

For each requirement to be formally verified, produce:

**Property Specification Fields:**

| Field | Description |
|-------|-------------|
| **Property ID** | Unique identifier (e.g., PROP-001) |
| **Requirement Reference** | Trace to source requirement ID |
| **Property Type** | Safety / Liveness / Invariant / Functional |
| **Formal Expression** | Mathematical/logical expression of the property |
| **Formalism** | Which formal notation/language used |
| **Component Scope** | Which component(s) this property applies to |
| **Verification Method** | Which formal method will verify this property |
| **Assumptions** | Under what conditions this property holds |
| **Expected Result** | What constitutes a pass (proved / no counterexample / etc.) |

<critical>Each property must be traceable to a specific requirement. Do not create "orphan" properties that don't map back to documented requirements. If a property doesn't trace to a requirement, it must be justified as an additional safety property identified during formal analysis.</critical>

### 4. Define the Formal Model Scope

For model checking or theorem proving, define the scope of the formal model:

- **System boundary**: What is included and excluded from the formal model
- **Abstraction level**: What details are abstracted away and why
- **Environment assumptions**: Assumptions about inputs and external behavior
- **State space**: Key state variables and their domains
- **Initial conditions**: Starting state assumptions

<critical>Discuss abstraction decisions with the user. Overly detailed models may be intractable; overly abstract models may miss important behaviors. The abstraction must be justified for certification credit.</critical>

### 5. Document the Specification

Update the formal methods report with the Formal Specification section:

- List all properties with their complete specification fields
- Group properties by type (Safety, Liveness, Invariant, Functional)
- Include the formal expressions in the chosen notation
- Document all assumptions explicitly
- Note any requirements that could not be formally specified and why

### 6. Review Specification Completeness

After specifying all properties:

- Count total properties by type
- Verify all identified requirements have corresponding properties
- Verify all properties trace to requirements
- List any unformalizable requirements with justification
- Confirm the formal model scope is appropriate

Report the specification summary to the user and ask for confirmation before proceeding.

## SPECIFICATION RULES:

1. **Traceability First**: Every formal property must trace to a documented requirement
2. **Be Precise**: Formal specifications must be unambiguous — use mathematical notation appropriately
3. **State Assumptions**: Every property has assumptions; make them explicit
4. **Choose the Right Tool**: Match formalism to property type and verification method
5. **Abstraction Must Be Justified**: For certification, every abstraction decision needs rationale

## SUCCESS METRICS:

✅ All target requirements have corresponding formal properties
✅ Each property has a unique ID and complete specification fields
✅ Formal expressions are provided in the chosen notation
✅ Assumptions are explicitly documented for every property
✅ Formal model scope is defined with boundary and abstraction decisions
✅ Unformalizable requirements are identified with justification
✅ User has reviewed and confirmed all specifications
✅ Frontmatter updated with `stepsCompleted: [1, 2]`

## FAILURE MODES:

❌ Creating formal properties without requirement traceability
❌ Ambiguous formal specifications that could be interpreted multiple ways
❌ Choosing a formalism that doesn't match the verification method
❌ Not documenting assumptions — certification authorities will challenge unstated assumptions
❌ Proceeding without user review of the formal specification
❌ Not updating frontmatter progress

❌ **CRITICAL**: Reading only partial step file - leads to incomplete specification
❌ **CRITICAL**: Skipping the abstraction justification — this is critical for DO-333 certification credit
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file

## NEXT STEP:

After user confirms the specification and selects [C] to continue, load `./step-03-verify.md` to execute the formal verification and analyze results.