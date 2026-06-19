# Step 3: Seed Initial Traceability Links

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete decisions
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between traceability engineering peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on seeding traceability links from existing artifacts
- 🎯 ENSURE every link is based on actual content in the artifacts, not assumed
- ⚠️ ABSOLUTELY NO TIME ESTIMATES - AI development speed has fundamentally changed
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- ⚠️ Present A/P/C menu after generating seeded links
- 💾 ONLY save when user chooses C (Continue)
- 📖 Update frontmatter `stepsCompleted: [1, 2, 3]` before loading next step
- 🚫 FORBIDDEN to load next step until C is selected

## COLLABORATION MENUS (A/P/C):

- **A (Advanced Elicitation)**: Investigate specific traceability links and their justification
- **P (Party Mode)**: Multiple perspectives on link accuracy and completeness
- **C (Continue)**: Save seeded links and proceed to completion

## PROTOCOL INTEGRATION:

- When 'A' selected: Invoke the `bmad-advanced-elicitation` skill
- When 'P' selected: Invoke the `bmad-party-mode` skill
- PROTOCOLS always return to display this step's A/P/C menu after completion

## CONTEXT BOUNDARIES:

- Traceability structure from step 2 is in the document
- All discovered artifacts are available for cross-referencing
- Focus on seeding actual links from existing content only

## YOUR TASK:

Seed the initial traceability links by analyzing existing artifacts and creating concrete links between them. This populates the traceability matrix with real data from the project.

## SEEDING SEQUENCE:

### 1. Extract Linkable Elements from Each Artifact

For each discovered artifact document, extract the linkable elements:

**From Hazard Analysis:**
- Extract each hazard with its ID and description
- Note severity, likelihood, and risk classification
- Note any existing mitigation references

**From Safety Requirements (if available):**
- Extract each safety requirement with its ID
- Note which hazard(s) it traces to
- Note criticality level assignment
- Note allocated component

**From Architecture (if available):**
- Extract architecture decisions and component definitions
- Note which requirements each component addresses
- Note safety-relevant design decisions

**From PRD (if available):**
- Extract functional requirements
- Note which ones relate to safety requirements
- Note any safety-relevant acceptance criteria

**From Test Plans (if available):**
- Extract test cases
- Note which requirements each test verifies
- Note any safety-specific test strategies

### 2. Create Traceability Links

Using the structure defined in step 2, create concrete links:

**For each pair of connected artifacts, create links:**

**Hazard → Safety Requirement Links:**
| Source ID | Source Description | Target ID | Target Description | Link Type | Confidence |
|-----------|-------------------|-----------|-------------------|-----------|------------|
| H-1 | {hazard description} | SR-1.1 | {requirement} | mitigates | {Confirmed/Inferred/Assumed} |

**Safety Requirement → Software Requirement Links:**
| Source ID | Source Description | Target ID | Target Description | Link Type | Confidence |
|-----------|-------------------|-----------|-------------------|-----------|------------|
| SR-1.1 | {requirement} | REQ-42 | {sw requirement} | refines | {Confirmed/Inferred/Assumed} |

{Continue for each link level where artifacts exist}

### 3. Mark Confidence Levels

Each seeded link should have a confidence level:
- **Confirmed**: Link is explicitly stated in the artifact (e.g., "this requirement mitigates hazard H-1")
- **Inferred**: Link can be reasonably deduced from context but is not explicitly stated
- **Assumed**: Link is assumed based on domain knowledge but needs verification

**Present the seeded links:**

"I've seeded the initial traceability links from your project artifacts:

**Links Seeded:**
- Hazard → Safety Requirement: {n} links
- Safety Requirement → Software Requirement: {n} links
- Software Requirement → Architecture Decision: {n} links
- Architecture Decision → Design: {n} links
- Design → Code: {n} links
- Requirement → Test: {n} links

**Confidence Distribution:**
- Confirmed (explicit in artifacts): {n} links
- Inferred (deduced from context): {n} links
- Assumed (needs verification): {n} links

**Coverage Gaps:**
- {Artifact levels where no links could be seeded because artifacts don't exist yet}

Does this reflect your project's actual traceability?"

### 4. Generate Seeded Links Content

```markdown
## Traceability Links

### Hazard → Safety Requirement

| Hazard ID | Hazard Description | Safety Req ID | Safety Requirement | Link Type | Confidence |
|-----------|-------------------|---------------|-------------------|-----------|------------|
| H-{id} | {description} | SR-{id}.{n} | {requirement} | mitigates | {level} |

### Safety Requirement → Software Requirement

| Safety Req ID | Safety Requirement | SW Req ID | SW Requirement | Link Type | Confidence |
|---------------|-------------------|-----------|---------------|-----------|------------|
| SR-{id}.{n} | {requirement} | REQ-{id} | {sw requirement} | refines | {level} |

### Software Requirement → Architecture Decision

| SW Req ID | SW Requirement | ARCH-DEC ID | Architecture Decision | Link Type | Confidence |
|-----------|---------------|-------------|----------------------|-----------|------------|
| REQ-{id} | {requirement} | ARCH-DEC-{id} | {decision} | implements | {level} |

{Continue for each link level}

### Unlinked Artifacts

{Any artifacts that could not be linked to other artifacts — these are potential gaps}
```

### 5. Present Content and Menu

Show the generated content and present choices:

"I've seeded the initial traceability links from your existing artifacts. This establishes the baseline traceability for your project.

**What would you like to do?**
[A] Advanced Elicitation - Investigate specific links and their justification
[P] Party Mode - Review traceability from different engineering perspectives
[C] Continue - Save seeded links and proceed to completion"

### 6. Handle Menu Selection

(Standard A/P/C handling as in previous steps)

## APPEND TO DOCUMENT:

When user selects 'C', append the content directly to the document.

## SUCCESS METRICS:

✅ All existing artifacts analyzed for linkable elements
✅ Concrete traceability links created with proper IDs
✅ Confidence levels assigned to every link
✅ Unlinked artifacts identified as potential gaps
✅ Links follow the structure defined in step 2
✅ No assumed links presented as confirmed
✅ A/P/C menu presented and handled correctly

## FAILURE MODES:

❌ Not extracting all linkable elements from artifacts
❌ Creating links without basis in actual artifact content
❌ Not marking confidence levels for seeded links
❌ Presenting inferred/assumed links as confirmed
❌ Not identifying artifacts that can't be linked
❌ Not following the structure defined in step 2

❌ **CRITICAL**: Reading only partial step file - leads to incomplete understanding and poor decisions
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file
❌ **CRITICAL**: Making decisions without complete understanding of step requirements and protocols

## NEXT STEP:

After user selects 'C' and content is saved, load `./step-04-complete.md` to finalize the traceability matrix and report coverage gaps.

Remember: Do NOT proceed to step-04 until user explicitly selects 'C' from the A/P/C menu and content is saved!