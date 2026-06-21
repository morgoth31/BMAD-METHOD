# Step 4: Integration into DO-178C Certification

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete integration
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between formal methods engineer and certification analyst peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on DO-178C integration only - finalization happens in the next step
- 🚫 FORBIDDEN to claim certification credit without proper justification
- ⚠️ ABSOLUTELY NO TIME ESTIMATES

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- 💾 Update document and frontmatter as you map verification to certification objectives
- 📖 Set up frontmatter `stepsCompleted: [1, 2, 3, 4]` before loading next step
- 🚫 FORBIDDEN to load next step until integration is complete

## CONTEXT BOUNDARIES:

- Variables from workflow.md are available in memory
- Previous context = what's in output document + frontmatter + all loaded input documents
- Rely on the verification results completed in step-03
- Do not re-verify properties in this step

## YOUR TASK:

Map the formal verification results to DO-178C certification objectives, determine the certification credit claimed, and identify any independence requirements.

## INTEGRATION SEQUENCE:

### 1. Map Verification Results to DO-178C Objectives

For each verified property, determine which DO-178C objectives it supports:

**Primary objectives addressed by formal methods (DO-333):**

| Objective | Description | Formal Methods Contribution |
|-----------|-------------|---------------------------|
| **A-5.1** | Compliance of software development process outputs with their inputs | Formal specification demonstrates compliance between requirements and design |
| **A-5.2** | Traceability between software requirements and software design | Formal properties provide mathematical traceability |
| **A-5.3** | Software development process outputs are correct | Formal verification proves correctness properties |
| **A-5.4** | Software development process outputs are consistent | Formal specification ensures consistency |
| **A-5.5** | Software development process outputs are verifiable | Formal specifications are inherently verifiable |
| **A-5.6** | Conformance to standards | Formal methods tools and processes conform to standards |
| **A-5.7** | Accuracy and consistency of software development process outputs | Formal proof ensures accuracy |
| **A-5.8** | Verifiability of software development process outputs | Formal methods provide automated or mathematical verification |
| **A-6.1** | Software verification process compliance | Formal verification is a structured verification approach |
| **A-6.2** | Software verification results are correct | Formal proof results are mathematically correct by construction |
| **A-6.3** | Software verification results achieve their objectives | Formal methods objectives are explicitly defined |
| **A-6.4** | Software verification results are traceable | Each property traces to a specific requirement |
| **A-6.5** | Software verification results are consistent | Formal methods ensure consistency through proof |

<critical>Not every formal verification result maps to every objective. Be specific about which objectives each verification result satisfies. Overclaiming certification credit is a certification risk.</critical>

### 2. Determine Certification Credit

For each DO-178C objective addressed, determine the certification credit:

**Credit Categories:**

| Credit Level | Definition | Requirements |
|-------------|-----------|--------------|
| **FULL CREDIT** | Formal verification fully satisfies the objective | Complete proof with no open issues; tool qualified per DO-330 |
| **PARTIAL CREDIT** | Formal verification partially satisfies the objective | Some properties verified, others require traditional V&V |
| **SUPPORTING EVIDENCE** | Formal methods supplement but do not replace traditional V&V | Used as additional evidence alongside conventional methods |
| **NO CREDIT** | Formal verification does not address this objective | Result is INCONCLUSIVE or FAILED; traditional V&V still required |

**Tool Qualification Considerations (DO-330/ED-215):**

Determine if the formal methods tools used require qualification:

- **DAL A/B**: Tool qualification is typically required for formal methods tools claiming certification credit
- **DAL C**: Tool qualification may be required depending on the credit claimed
- **DAL D**: Tool qualification is generally not required

Discuss with the user:
1. What certification credit is being claimed for each objective?
2. Are the formal methods tools qualified or will qualification be pursued?
3. Where formal methods provide partial or no credit, what traditional V&V supplements will be used?

### 3. Address Independence Requirements

For each DO-178C objective, determine if independence is required and satisfied:

**Independence Analysis:**

- **DAL A**: Independence required for most verification objectives (A-5, A-6)
- **DAL B**: Independence required for some objectives
- **DAL C**: Independence required for fewer objectives
- **DAL D**: Independence generally not required

**Formal Methods and Independence:**

| Question | Analysis |
|----------|----------|
| Who wrote the specifications? | If the same person who wrote the requirements also wrote the formal spec, independence may not be satisfied |
| Who developed the proofs? | The proof developer should be independent of the code developer for verification credit |
| Who reviewed the results? | An independent review of formal verification results strengthens certification credit |
| Tool independence? | If the tool is qualified, its results may carry more weight |

<critical>Independence in formal methods is nuanced. A qualified formal methods tool can sometimes provide "automated independence" — but this must be justified to the certification authority. Discuss each independence claim with the user.</critical>

### 4. Document the Integration

Update the formal methods report with the DO-178C Integration section:

**Objective Coverage Table:**

| Objective ID | Objective Name | Properties Verified | Credit Level | Independence Required | Independence Satisfied | Notes |
|-------------|---------------|--------------------:|--------------|----------------------|----------------------|-------|

**Credit Summary:**

| Credit Level | Count of Objectives |
|-------------|-------------------:|
| FULL CREDIT | X |
| PARTIAL CREDIT | X |
| SUPPORTING EVIDENCE | X |
| NO CREDIT | X |

**Tool Qualification Status:**

| Tool | Version | DAL Applicability | Qualification Status | TQL Required |
|------|---------|-------------------:|---------------------|--------------|

**Independence Assessment:**

| Objective | Independence Required | How Satisfied | Gaps |
|-----------|---------------------|---------------|------|

### 5. Review Integration with User

Present the complete integration mapping and ask:

1. Does the objective coverage accurately reflect the verification work?
2. Are the credit claims justified? (No overclaiming)
3. Is the independence analysis correct?
4. Are there additional objectives that formal methods should address?
5. Are there gaps in tool qualification that need resolution?

## INTEGRATION RULES:

1. **Be Conservative**: Claim only the credit that can be justified — overclaiming risks certification failure
2. **Be Specific**: Map each property to specific objectives, not vague references
3. **Address Independence**: Independence is a key certification concern — analyze it explicitly
4. **Qualify Tools**: Know whether tool qualification is needed and its status
5. **Document Gaps**: Where formal methods don't provide full credit, explicitly state what traditional V&V will supplement

## SUCCESS METRICS:

✅ Every verified property is mapped to at least one DO-178C objective
✅ Certification credit level is assigned for each objective
✅ Independence requirements are analyzed for each objective
✅ Tool qualification status is documented for each tool used
✅ Gaps in credit or independence are explicitly identified
✅ User has reviewed and confirmed the integration mapping
✅ Frontmatter updated with `stepsCompleted: [1, 2, 3, 4]`

## FAILURE MODES:

❌ Overclaiming certification credit without justification
❌ Not addressing independence requirements
❌ Not documenting tool qualification status
❌ Vague objective mapping (e.g., "formal methods support A-5" without specifics)
❌ Proceeding without user review of the integration
❌ Not updating frontmatter progress

❌ **CRITICAL**: Claiming FULL CREDIT where only PARTIAL or SUPPORTING is justified
❌ **CRITICAL**: Ignoring independence — this is a common certification audit finding
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file

## NEXT STEP:

After user confirms the integration mapping and selects [C] to continue, load `./step-05-complete.md` to finalize the Formal Methods Verification Report, produce the PSAC summary, and ensure full traceability.