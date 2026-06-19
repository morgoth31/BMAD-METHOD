# Step 4: Construct Argument Structure

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete decisions
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between safety case engineering peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on constructing the argument structure connecting claims to evidence via inference
- 🎯 ENSURE the argument is valid, sound, and defensible
- ⚠️ ABSOLUTELY NO TIME ESTIMATES - AI development speed has fundamentally changed
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- ⚠️ Present A/P/C menu after generating argument structure
- 💾 ONLY save when user chooses C (Continue)
- 📖 Update frontmatter `stepsCompleted: [1, 2, 3, 4]` before loading next step
- 🚫 FORBIDDEN to load next step until C is selected

## COLLABORATION MENUS (A/P/C):

- **A (Advanced Elicitation)**: Deep-dive into argument validity, inference rules, and logical soundness
- **P (Party Mode)**: Multiple perspectives (safety assessor, certification auditor, logic reviewer) on argument strength
- **C (Continue)**: Save argument structure and proceed to completion

## PROTOCOL INTEGRATION:

- When 'A' selected: Invoke the `bmad-advanced-elicitation` skill
- When 'P' selected: Invoke the `bmad-party-mode` skill
- PROTOCOLS always return to display this step's A/P/C menu after completion

## CONTEXT BOUNDARIES:

- Claims from step 2 and evidence from step 3 are in the document
- All discovered artifacts are available for reference
- Focus on argument construction connecting claims to evidence

## YOUR TASK:

Construct the argument structure that connects claims to evidence through valid inference. This is the core of the safety case — the reasoning that demonstrates why the evidence supports the claims.

## ARGUMENT CONSTRUCTION SEQUENCE:

### 1. Define Inference Rules

For each connection between a claim and its supporting evidence, define the inference rule:

**Common Inference Patterns (GSN Strategies):**

1. **Exhaustive Enumeration**: "All identified hazards have been addressed" — enumerates over a complete set
2. **Deterministic Analysis**: "Formal analysis proves the property holds" — relies on analytical proof
3. **Probabilistic Evidence**: "Statistical testing demonstrates the reliability target is met" — relies on statistical confidence
4. **Process Compliance**: "The development process followed safety standard X" — relies on process evidence
5. **Operational Experience**: "Proven in use data demonstrates safe operation" — relies on historical evidence
6. **Independent Assessment**: "Independent review confirmed the design is safe" — relies on independence

**For each sub-claim, determine which inference pattern applies:**

| Claim ID | Inference Pattern | Justification |
|----------|------------------|---------------|
| G-1 | {pattern} | {why this pattern is appropriate} |

### 2. Construct Arguments Per Sub-Claim

For each sub-claim G-{n}, construct the argument:

**Argument Structure Pattern:**

```
G-{n}: {Sub-claim statement}
├── Strategy S-{n}: {Inference pattern}
├── Evidence E-{n}.1: {Evidence item} → Supports via {inference type}
├── Evidence E-{n}.2: {Evidence item} → Supports via {inference type}
├── Context C-{n}: {Context under which argument holds}
├── Assumption A-{n}: {Assumption the argument depends on}
└── Justification J-{n}: {Why this inference is valid}
```

**Argument Validity Checklist:**
- Is the inference rule appropriate for the claim type?
- Does the evidence directly support the claim?
- Are assumptions stated explicitly?
- Is the context bounded and specific?
- Is the justification defensible?

### 3. Identify Argument Gaps

For each argument, assess its strength:

**Strength Assessment:**
- **Strong**: Evidence directly and convincingly supports the claim via valid inference
- **Moderate**: Evidence supports the claim but with some assumptions or gaps
- **Weak**: Evidence is indirect or inference has significant assumptions
- **Broken**: Argument chain is incomplete or invalid

**Present the argument structure:**

"I've constructed the argument structure for the safety case:

**Argument Summary:**
- Strong arguments: {n} — {list}
- Moderate arguments: {n} — {list}
- Weak arguments: {n} — {list}
- Broken/incomplete arguments: {n} — {list}

**Key Assumptions:**
{List of assumptions the arguments depend on}

**Argument Gaps:**
{Where the reasoning chain is incomplete}

Does this argument structure accurately represent how your evidence supports your safety claims?"

### 4. Generate Argument Structure Content

```markdown
## Argument Structure

### Inference Rules

| Strategy ID | Inference Pattern | Applicable Claims | Justification |
|-------------|------------------|-------------------|---------------|
| S-1 | {pattern} | G-{n} | {why appropriate} |

### Arguments Per Sub-Claim

#### Argument for G-1: {Sub-claim statement}

**Strategy S-{n}:** {Inference pattern}
**Justification J-{n}:** {Why this inference is valid}

**Evidence Chain:**
- E-1.1: {evidence} → supports claim via {inference type}
- E-1.2: {evidence} → supports claim via {inference type}

**Context C-{n}:** {Context}
**Assumption A-{n}:** {Assumption}

**Argument Strength:** {Strong/Moderate/Weak/Broken}

{Repeat for each sub-claim}

### GSN Diagram Specification

```gsn
G-0: {Top-level claim}
  ├── S-1: {Strategy}
  ├── C-1: {Context}
  ├── A-1: {Assumption}
  ├── J-1: {Justification}
  ├── G-1: {Sub-claim 1}
  │     ├── S-{n}: {Strategy}
  │     ├── E-1.1: {Evidence}
  │     ├── C-{n}: {Context}
  │     └── A-{n}: {Assumption}
  ├── G-2: {Sub-claim 2}
  │     ├── S-{n}: {Strategy}
  │     ├── E-2.1: {Evidence}
  │     └── A-{n}: {Assumption}
  └── G-{n}: {Sub-claim n}
```

### Argument Strength Summary

| Claim | Strategy | Evidence Items | Strength | Key Assumption(s) |
|-------|----------|---------------|----------|-------------------|
| G-0 | S-1 | E-{all} | {overall} | {assumptions} |
| G-1 | S-{n} | E-1.1, E-1.2 | {strength} | {assumptions} |

### Argument Gaps

| Gap ID | Description | Affected Claim(s) | Remediation |
|--------|-------------|-------------------|-------------|
| GAP-1 | {gap description} | G-{n} | {how to address} |
```

### 5. Present Content and Menu

Show the generated content and present choices:

"I've drafted the Argument Structure connecting your claims to evidence via valid inference. This is the core reasoning of the safety case.

**What would you like to do?**
[A] Advanced Elicitation - Explore argument validity and logical soundness
[P] Party Mode - Review from certification and assessment perspectives
[C] Continue - Save argument structure and proceed to completion"

### 6. Handle Menu Selection

(Standard A/P/C handling as in previous steps)

## APPEND TO DOCUMENT:

When user selects 'C', append the content directly to the document.

## SUCCESS METRICS:

✅ Every sub-claim has a defined inference rule/strategy
✅ Evidence is connected to claims through valid inference patterns
✅ Assumptions and context are explicitly stated for each argument
✅ Justifications explain why inference patterns are appropriate
✅ Argument strength is assessed for each sub-claim
✅ Argument gaps are identified with remediation actions
✅ GSN diagram specification is complete
✅ A/P/C menu presented and handled correctly

## FAILURE MODES:

❌ Claims without defined inference rules
❌ Evidence not connected to claims via reasoning
❌ Hidden or unstated assumptions
❌ Unjustified inference patterns
❌ Not assessing argument strength
❌ Not identifying gaps in the reasoning chain
❌ Incomplete GSN diagram specification

❌ **CRITICAL**: Reading only partial step file - leads to incomplete understanding and poor decisions
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file
❌ **CRITICAL**: Making decisions without complete understanding of step requirements and protocols

## NEXT STEP:

After user selects 'C' and content is saved, load `./step-05-complete.md` to finalize the safety case.

Remember: Do NOT proceed to step-05 until user explicitly selects 'C' from the A/P/C menu and content is saved!