# Step 2: Define Traceability Links Structure

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete decisions
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between traceability engineering peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on defining the traceability links structure — what links to what
- 🎯 ENSURE the structure covers the full lifecycle chain
- ⚠️ ABSOLUTELY NO TIME ESTIMATES - AI development speed has fundamentally changed
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- ⚠️ Present A/P/C menu after generating structure definition
- 💾 ONLY save when user chooses C (Continue)
- 📖 Update frontmatter `stepsCompleted: [1, 2]` before loading next step
- 🚫 FORBIDDEN to load next step until C is selected

## COLLABORATION MENUS (A/P/C):

- **A (Advanced Elicitation)**: Deep-dive into traceability standards and best practices
- **P (Party Mode)**: Multiple perspectives (safety engineer, certification authority, project manager) on traceability structure
- **C (Continue)**: Save structure definition and proceed to seeding

## PROTOCOL INTEGRATION:

- When 'A' selected: Invoke the `bmad-advanced-elicitation` skill
- When 'P' selected: Invoke the `bmad-party-mode` skill
- PROTOCOLS always return to display this step's A/P/C menu after completion

## CONTEXT BOUNDARIES:

- Current document and frontmatter from step 1 are available
- Discovered artifacts are in memory for reference
- Focus on defining the traceability structure only

## YOUR TASK:

Define the traceability links structure: what artifact types link to what other artifact types, the direction of each link, and the cardinality (one-to-one, one-to-many, many-to-many) of each link.

## STRUCTURE DEFINITION SEQUENCE:

### 1. Identify Artifact Types in the Traceability Chain

Based on the discovered documents and the safety-critical development lifecycle, identify the artifact types that exist in the project:

**Standard Traceability Chain:**

```
Hazard Analysis
    ↓ (mitigates)
Safety Requirements
    ↓ (refines)
Software Requirements
    ↓ (implements)
Design / Architecture
    ↓ (realizes)
Source Code
    ↓ (verifies)
Tests / V&V Results
```

**Artifact Type Discovery:**

For each level in the chain, identify:
- Does this artifact type exist in the project?
- What is the naming/ID convention? (e.g., H-1, SR-1.1, REQ-42, ARCH-DEC-5, TC-101)
- Where are these artifacts stored/documented?

### 2. Define Link Types and Cardinality

For each pair of connected artifact types, define:

**Link Types:**
- **mitigates**: Safety requirement mitigates a hazard
- **refines**: Software requirement refines a safety requirement
- **implements**: Design element implements a requirement
- **realizes**: Code unit realizes a design element
- **verifies**: Test case verifies a requirement

**Cardinality Rules:**
- One hazard → Many safety requirements (one-to-many, 1:N)
- One safety requirement → Many software requirements (1:N)
- One software requirement → Many design elements (1:N)
- One design element → Many code units (1:N)
- One test case → One or more requirements (N:1 or N:M)
- One requirement → Many test cases (1:N)

**Present the structure to the user:**

"I've identified the following traceability chain based on your project artifacts:

**Artifact Types Found:**
- {List of artifact types with their ID conventions}

**Link Types:**
- {mitigates}: Hazard → Safety Requirement (1:N)
- {refines}: Safety Requirement → Software Requirement (1:N)
- {implements}: Software Requirement → Design Element (1:N)
- {realizes}: Design Element → Code Unit (1:N)
- {verifies}: Test Case → Requirement (N:M)

**Gaps in the Chain:**
- {Any levels where artifacts don't exist yet}

Does this structure capture your project's traceability needs?"

### 3. Generate Links Structure Content

```markdown
## Traceability Links Structure

### Artifact Types

| Level | Artifact Type | ID Convention | Source Document | Status |
|-------|--------------|---------------|----------------|--------|
| 1 | Hazard | H-{n} | {hazard analysis doc} | {Exists/Planned} |
| 2 | Safety Requirement | SR-{n}.{m} | {safety reqs doc} | {Exists/Planned} |
| 3 | Software Requirement | REQ-{n} | {PRD/spec doc} | {Exists/Planned} |
| 4 | Architecture Decision | ARCH-DEC-{n} | {architecture doc} | {Exists/Planned} |
| 5 | Design Element | DES-{n} | {design doc} | {Exists/Planned} |
| 6 | Source Code Unit | {module path} | {repository} | {Exists/Planned} |
| 7 | Test Case | TC-{n} | {test plan doc} | {Exists/Planned} |

### Link Definitions

| Source Level | Target Level | Link Type | Cardinality | Rationale |
|-------------|-------------|-----------|-------------|-----------|
| Hazard | Safety Requirement | mitigates | 1:N | One hazard may require multiple safety requirements |
| Safety Requirement | Software Requirement | refines | 1:N | One safety requirement may spawn multiple software requirements |
| Software Requirement | Design Element | implements | 1:N | One requirement may be implemented across multiple design elements |
| Design Element | Source Code Unit | realizes | 1:N | One design element may be realized by multiple code units |
| Test Case | Requirement | verifies | N:M | One test may verify multiple requirements and vice versa |

### ID Convention Rules

{Define how IDs are assigned, formatted, and referenced across documents}
```

### 4. Present Content and Menu

Show the generated content and present choices:

"I've drafted the Traceability Links Structure defining how your project artifacts connect. This establishes the foundation for seeding traceability links.

**What would you like to do?**
[A] Advanced Elicitation - Explore traceability standards and structure options
[P] Party Mode - Review from certification and project perspectives
[C] Continue - Save this structure and proceed to seeding initial links"

### 5. Handle Menu Selection

(Standard A/P/C handling as in previous steps)

## APPEND TO DOCUMENT:

When user selects 'C', append the content directly to the document.

## SUCCESS METRICS:

✅ All relevant artifact types identified with ID conventions
✅ Link types defined with clear semantics
✅ Cardinality rules established for each link type
✅ Gaps in the chain identified (artifacts that don't exist yet)
✅ ID conventions are consistent and documented
✅ Structure aligns with safety standards traceability requirements
✅ A/P/C menu presented and handled correctly

## FAILURE MODES:

❌ Not identifying all artifact types in the chain
❌ Using vague or inconsistent ID conventions
❌ Not defining cardinality rules
❌ Missing link types that are important for certification
❌ Not identifying gaps where artifacts don't exist yet
❌ Not validating the structure with the user

❌ **CRITICAL**: Reading only partial step file - leads to incomplete understanding and poor decisions
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file
❌ **CRITICAL**: Making decisions without complete understanding of step requirements and protocols

## NEXT STEP:

After user selects 'C' and content is saved, load `./step-03-seed.md` to seed initial traceability links from existing artifacts.

Remember: Do NOT proceed to step-03 until user explicitly selects 'C' from the A/P/C menu and content is saved!