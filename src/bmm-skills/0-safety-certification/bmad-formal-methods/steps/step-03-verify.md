# Step 3: Formal Verification Execution

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete verification
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between formal methods engineer and certification analyst peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on verification execution and analysis only - integration into DO-178C happens in the next step
- 🚫 FORBIDDEN to claim properties are verified without evidence
- ⚠️ ABSOLUTELY NO TIME ESTIMATES

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- 💾 Update document and frontmatter as you document verification results
- 📖 Set up frontmatter `stepsCompleted: [1, 2, 3]` before loading next step
- 🚫 FORBIDDEN to load next step until verification is complete

## CONTEXT BOUNDARIES:

- Variables from workflow.md are available in memory
- Previous context = what's in output document + frontmatter + loaded input documents
- Rely on the formal specifications completed in step-02
- Do not re-specify properties in this step

## YOUR TASK:

Execute the formal verification for each specified property, analyze the results, handle counterexamples, and document the proof outcomes.

## VERIFICATION SEQUENCE:

### 1. Verify Each Property

For each formal property defined in step-02, execute the verification:

**For Model Checking:**
- Construct the model in the chosen tool (NuSMV, SPIN, UPPAAL, DIRECT, etc.)
- Define the state space and transition relations
- Encode the property as a temporal logic formula (LTL/CTL)
- Run the model checker
- Record the result: **VERIFIED** or **COUNTEREXAMPLE FOUND**

**For Theorem Proving:**
- Formalize the property and system model in the prover (Coq, Isabelle, HOL, PVS)
- Develop the proof script
- Execute the proof
- Record the result: **PROVED** or **PROOF FAILED**

**For Abstract Interpretation:**
- Configure the analyzer (Astrée, Polyspace, Frama-C) for the target code
- Define the analysis domain and widening strategy
- Run the analysis
- Record the result: **PROPERTY ESTABLISHED**, **PROPERTY UNKNOWN**, or **ALARM RAISED**

**For Static Analysis / SMT-Based Verification:**
- Configure the tool for the target code/property
- Encode the property as verification conditions
- Run the analysis
- Record the result: **VERIFIED**, **POTENTIAL VIOLATION**, or **UNKNOWN**

<critical>Do NOT fabricate verification results. If you cannot execute the verification tool, document what was done, what tool would be used, and what the expected verification approach is. Only record actual results from actual tool execution.</critical>

### 2. Analyze Counterexamples and Failures

For any property that is NOT verified/proved:

**Counterexample Analysis:**
- Extract the counterexample trace from the model checker
- Determine if the counterexample is:
  - **GENUINE**: The property is actually violated; a real bug exists
  - **SPURIOUS**: The counterexample is an artifact of abstraction; the property may still hold
  - **INCONCLUSIVE**: Cannot determine if the counterexample is genuine

**Proof Failure Analysis:**
- Identify which proof obligation failed
- Determine if the failure is due to:
  - **Insufficient lemmas**: Additional intermediate results needed
  - **Incorrect specification**: The formal property doesn't match the intent
  - **Model error**: The formal model doesn't accurately represent the system
  - **Tool limitation**: The prover cannot handle the proof complexity

**Alarm Analysis (Abstract Interpretation):**
- Classify each alarm as:
  - **TRUE ALARM**: Confirmed runtime error or property violation
  - **FALSE ALARM**: Sound over-approximation; no real violation
  - **UNKNOWN**: Cannot confirm or deny

<critical>Discuss each counterexample or failure with the user. Do not dismiss counterexamples without thorough analysis. A genuine counterexample indicates a real defect that must be addressed.</critical>

### 3. Refine Specifications (If Necessary)

If verification failures require specification refinement:

- **Spurious counterexamples**: Refine the abstraction or add constraints
- **Incorrect specifications**: Correct the formal property to match the intended behavior
- **Insufficient lemmas**: Add intermediate proof steps
- **Model errors**: Correct the formal model

For each refinement:
- Document what was changed and why
- Re-verify the refined property
- Record the updated result

### 4. Document Verification Results

Update the formal methods report with the Verification Results section:

**For each property:**

| Field | Description |
|-------|-------------|
| **Property ID** | Link back to the specification (PROP-XXX) |
| **Verification Method** | Model Checking / Theorem Proving / Abstract Interpretation / SMT / Static Analysis |
| **Tool Used** | Specific tool and version |
| **Result** | VERIFIED / PROVED / COUNTEREXAMPLE / ALARM / UNKNOWN / FAILED |
| **Counterexample** | Trace or description (if applicable) |
| **Analysis** | Classification of the result (genuine/spurious/inconclusive) |
| **Refinements** | Changes made to specification or model (if any) |
| **Final Status** | PASS / FAIL / INCONCLUSIVE |

### 5. Verification Summary

Produce a summary of verification results:

- Total properties verified: X / Y
- Properties by result:
  - VERIFIED/PROVED: X
  - COUNTEREXAMPLE: X (Genuine: X, Spurious: X, Inconclusive: X)
  - ALARM: X (True: X, False: X, Unknown: X)
  - UNKNOWN/INCONCLUSIVE: X
  - FAILED: X
- Refinements applied: X
- Properties still open: X

Report this summary to the user and confirm before proceeding.

## VERIFICATION RULES:

1. **Be Honest**: Record actual results, not desired results
2. **Be Complete**: Every property must have a verification result recorded
3. **Analyze Failures**: Counterexamples and failures are valuable findings, not embarrassments
4. **Document Tools**: Record exact tool names and versions used
5. **Trace Refinements**: If specifications were refined, document what changed and why

## SUCCESS METRICS:

✅ Every formal property has a verification result recorded
✅ Counterexamples are analyzed and classified (genuine/spurious/inconclusive)
✅ Specification refinements are documented with rationale
✅ Tool names and versions are recorded
✅ Verification summary is accurate and complete
✅ User has reviewed and confirmed the verification results
✅ Frontmatter updated with `stepsCompleted: [1, 2, 3]`

## FAILURE MODES:

❌ Fabricating verification results without actual tool execution
❌ Not analyzing counterexamples — they may indicate real defects
❌ Dismissing failures without thorough investigation
❌ Not documenting specification refinements
❌ Proceeding without user review of verification results
❌ Not updating frontmatter progress

❌ **CRITICAL**: Claiming properties are verified when they are not — this is a certification integrity issue
❌ **CRITICAL**: Ignoring counterexamples — they are the primary output of model checking
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file

## NEXT STEP:

After user confirms the verification results and selects [C] to continue, load `./step-04-integrate.md` to integrate formal verification results into the DO-178C certification evidence.