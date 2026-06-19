# Step 3: Map Evidence to Sub-Claims

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete decisions
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between safety case engineering peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on mapping evidence to each sub-claim in the safety case
- 🎯 ENSURE every sub-claim has at least one piece of supporting evidence identified
- ⚠️ ABSOLUTELY NO TIME ESTIMATES - AI development speed has fundamentally changed
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- ⚠️ Present A/P/C menu after generating evidence mapping
- 💾 ONLY save when user chooses C (Continue)
- 📖 Update frontmatter `stepsCompleted: [1, 2, 3]` before loading next step
- 🚫 FORBIDDEN to load next step until C is selected

## COLLABORATION MENUS (A/P/C):

- **A (Advanced Elicitation)**: Investigate evidence quality, sufficiency, and independence
- **P (Party Mode)**: Multiple perspectives (V&V engineer, safety assessor, certification auditor) on evidence coverage
- **C (Continue)**: Save evidence mapping and proceed to argument construction

## PROTOCOL INTEGRATION:

- When 'A' selected: Invoke the `bmad-advanced-elicitation` skill
- When 'P' selected: Invoke the `bmad-party-mode` skill
- PROTOCOLS always return to display this step's A/P/C menu after completion

## CONTEXT BOUNDARIES:

- Claims from step 2 are in the document
- All discovered artifacts are available as evidence sources
- Hazard analysis, safety requirements, architecture, and V&V results are evidence
- Focus on evidence identification and mapping only

## YOUR TASK:

Map evidence to each sub-claim in the safety case. Identify what evidence exists, what evidence needs to be created, and assess the quality and sufficiency of each evidence item.

## EVIDENCE MAPPING SEQUENCE:

### 1. Identify Available Evidence Sources

Review all discovered artifacts and identify evidence items:

**Evidence Categories:**

1. **Analysis Evidence** — Results from systematic analysis
   - Hazard analysis results
   - FMEA / FTA reports
   - Safety requirements verification
   - Risk assessment reports

2. **Testing Evidence** — Results from testing activities
   - Unit test results
   - Integration test results
   - System test results
   - Safety-specific test results

3. **Review Evidence** — Results from independent review
   - Design reviews
   - Code reviews
   - Safety assessment reviews
   - Certification audit results

4. **Process Evidence** — Evidence of process compliance
   - Development process records
   - Configuration management records
   - Change management records
   - Quality assurance records

5. **Operational Evidence** — Evidence from operation
   - Field data / operational history
   - Incident reports
   - Maintenance records
   - Proven-in-use data

### 2. Map Evidence to Sub-Claims

For each sub-claim (G-{n}) defined in step 2:

**Evidence Mapping Template:**

| Claim ID | Claim Statement | Evidence ID | Evidence Description | Evidence Type | Status | Quality Assessment |
|----------|----------------|-------------|---------------------|---------------|--------|-------------------|
| G-1 | {claim} | E-1.1 | {evidence item} | {Analysis/Test/Review/Process/Operational} | {Exists/Needed} | {High/Medium/Low/TBD} |

**For each claim, identify:**
- What evidence currently exists that supports the claim
- What evidence needs to be created
- The quality level of each evidence item
- Whether the evidence is direct or indirect

### 3. Assess Evidence Sufficiency

For each sub-claim, assess whether the available evidence is sufficient:

**Sufficiency Assessment:**

- **Sufficient**: Evidence directly and convincingly supports the claim
- **Partially Sufficient**: Some evidence exists but gaps remain
- **Insufficient**: No evidence or only indirect/tangential evidence exists
- **Needed**: Evidence must be created to support the claim

**Present the mapping:**

"I've mapped evidence to each sub-claim in the safety case:

**Evidence Coverage:**
- G-1: {Sufficient/Partially Sufficient/Insufficient} — {evidence items}
- G-2: {Sufficient/Partially Sufficient/Insufficient} — {evidence items}
- G-3: {Sufficient/Partially Sufficient/Insufficient} — {evidence items}

**Evidence Inventory:**
- Existing evidence: {n} items
- Evidence needed: {n} items
- Quality: High={n}, Medium={n}, Low={n}

**Claims needing additional evidence:**
{List claims where evidence is insufficient}

Does this evidence mapping accurately reflect your project's evidence landscape?"

### 4. Generate Evidence Registry Content

```markdown
## Evidence Registry

### Evidence Inventory

| Evidence ID | Evidence Description | Evidence Type | Source Document | Supports Claim(s) | Status | Quality |
|-------------|---------------------|---------------|----------------|-------------------|--------|---------|
| E-1.1 | {description} | {type} | {source} | G-{n} | {Exists/Needed} | {level} |

### Evidence-to-Claim Mapping

| Claim ID | Claim Statement | Evidence Items | Sufficiency | Gaps |
|----------|----------------|---------------|-------------|------|
| G-0 | {top-level claim} | E-{all} | {assessment} | {gaps} |
| G-1 | {sub-claim 1} | E-1.1, E-1.2 | {assessment} | {gaps} |
| G-2 | {sub-claim 2} | E-2.1 | {assessment} | {gaps} |

### Evidence Needed

| Needed ID | Description | Required For | Type Needed | Priority | Action |
|-----------|-------------|-------------|-------------|----------|--------|
| N-1 | {evidence needed} | G-{n} | {type} | {Critical/High/Medium} | {create test, conduct review, etc.} |
```

### 5. Present Content and Menu

Show the generated content and present choices:

"I've drafted the Evidence Registry mapping evidence to each sub-claim. This identifies what evidence exists and what needs to be created.

**What would you like to do?**
[A] Advanced Elicitation - Investigate evidence quality and sufficiency in depth
[P] Party Mode - Review evidence coverage from V&V and assessment perspectives
[C] Continue - Save evidence mapping and proceed to argument construction"

### 6. Handle Menu Selection

(Standard A/P/C handling as in previous steps)

## APPEND TO DOCUMENT:

When user selects 'C', append the content directly to the document.

## SUCCESS METRICS:

✅ Every sub-claim has at least one evidence item identified
✅ Evidence is categorized by type (Analysis, Test, Review, Process, Operational)
✅ Evidence quality is assessed for each item
✅ Gaps in evidence are clearly identified
✅ Needed evidence items are prioritized (Critical/High/Medium)
✅ Evidence-to-claim mapping is complete and traceable
✅ A/P/C menu presented and handled correctly

## FAILURE MODES:

❌ Sub-claims without any evidence identified
❌ Not categorizing evidence by type
❌ Not assessing evidence quality
❌ Not identifying evidence gaps
❌ Treating needed evidence as existing evidence
❌ Not prioritizing evidence creation needs

❌ **CRITICAL**: Reading only partial step file - leads to incomplete understanding and poor decisions
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file
❌ **CRITICAL**: Making decisions without complete understanding of step requirements and protocols

## NEXT STEP:

After user selects 'C' and content is saved, load `./step-04-argument.md` to construct the argument structure connecting claims to evidence.

Remember: Do NOT proceed to step-04 until user explicitly selects 'C' from the A/P/C menu and content is saved!