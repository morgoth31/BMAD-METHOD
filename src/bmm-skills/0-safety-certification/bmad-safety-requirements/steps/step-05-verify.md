# Step 5: Verify Traceability Completeness

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete decisions
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative verification between safety engineering peers
- 📋 YOU ARE A FACILITATOR and verifier — completeness is the goal
- 💬 FOCUS on verifying bidirectional traceability: hazards ↔ requirements ↔ components
- 🎯 EVERY hazard must trace to requirements, every requirement must trace to a hazard
- ⚠️ ABSOLUTELY NO TIME ESTIMATES - AI development speed has fundamentally changed
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- ⚠️ Present A/P/C menu after verification results
- 💾 ONLY save when user chooses C (Continue)
- 📖 Update frontmatter `stepsCompleted: [1, 2, 3, 4, 5]` before loading next step
- 🚫 FORBIDDEN to load next step until C is selected

## COLLABORATION MENUS (A/P/C):

- **A (Advanced Elicitation)**: Investigate specific traceability gaps in depth
- **P (Party Mode)**: Multiple perspectives on traceability coverage and gaps
- **C (Continue)**: Save verification results and proceed to completion

## PROTOCOL INTEGRATION:

- When 'A' selected: Invoke the `bmad-advanced-elicitation` skill
- When 'P' selected: Invoke the `bmad-party-mode` skill
- PROTOCOLS always return to display this step's A/P/C menu after completion

## CONTEXT BOUNDARIES:

- Full safety requirements document from steps 2-4 is available
- Hazard analysis is available for cross-reference
- Focus on verification and completeness only

## YOUR TASK:

Verify bidirectional traceability between hazards and safety requirements, and ensure completeness of the safety requirements derivation. No orphan hazards, no orphan requirements.

## VERIFICATION SEQUENCE:

### 1. Forward Traceability Check (Hazard → Requirements)

For each hazard H-{id} in the hazard analysis:
- Verify that at least one safety requirement SR-{id}.n exists
- Verify the requirement addresses the specific hazard condition
- Flag any hazards with no derived safety requirements (orphans)

**Forward Traceability Matrix:**

| Hazard ID | Hazard Description | Derived Safety Requirements | Status |
|-----------|-------------------|---------------------------|--------|
| H-1 | {description} | SR-1.1, SR-1.2 | ✅ Covered |
| H-{n} | {description} | — | ❌ ORPHAN |

### 2. Backward Traceability Check (Requirements → Hazards)

For each safety requirement SR-{id}.n in the document:
- Verify that it traces back to a specific hazard
- Verify the trace is logical (requirement actually mitigates the hazard)
- Flag any requirements with no source hazard (orphans)

**Backward Traceability Matrix:**

| SR ID | Safety Requirement | Source Hazard | Status |
|-------|-------------------|--------------|--------|
| SR-1.1 | {requirement} | H-1 | ✅ Traced |
| SR-{n} | {requirement} | — | ❌ ORPHAN |

### 3. Allocation Completeness Check

For each safety requirement:
- Verify allocation to at least one component
- Verify allocation rationale is documented
- Flag any unallocated requirements

**Allocation Completeness:**

| SR ID | Allocated Component(s) | Rationale | Status |
|-------|------------------------|-----------|--------|
| SR-1.1 | {component} | {rationale} | ✅ Allocated |
| SR-{n} | — | — | ❌ UNALLOCATED |

### 4. Criticality Completeness Check

For each safety requirement:
- Verify criticality level is assigned
- Verify classification rationale is documented
- Flag any requirements without criticality

**Criticality Completeness:**

| SR ID | Criticality Level | Rationale | Status |
|-------|------------------|-----------|--------|
| SR-1.1 | SIL 2 | {rationale} | ✅ Classified |
| SR-{n} | — | — | ❌ UNCLASSIFIED |

### 5. Generate Verification Report

Present the complete verification findings:

```markdown
## Traceability Verification

### Verification Summary

| Check | Total | Passed | Failed | Status |
|-------|-------|--------|--------|--------|
| Forward (Hazard → SR) | {n} | {n} | {n} | {✅/❌} |
| Backward (SR → Hazard) | {n} | {n} | {n} | {✅/❌} |
| Allocation Completeness | {n} | {n} | {n} | {✅/❌} |
| Criticality Assignment | {n} | {n} | {n} | {✅/❌} |

### Issues Found

{List all orphans, gaps, and incomplete items}

### Resolutions Required

{For each issue, describe what needs to be fixed}
```

### 6. Present Findings and Menu

"I've completed the traceability verification:

**Results:**
- Forward traceability (Hazard → SR): {passed}/{total} ✅/{failed}❌
- Backward traceability (SR → Hazard): {passed}/{total} ✅/{failed}❌
- Allocation completeness: {passed}/{total} ✅/{failed}❌
- Criticality assignment: {passed}/{total} ✅/{failed}❌

{If all checks pass:}
All traceability checks pass — the safety requirements are complete and traceable.

{If issues found:}
The following issues need resolution before proceeding:
{list of issues}

**What would you like to do?**
[A] Advanced Elicitation - Investigate specific gaps in depth
[P] Party Mode - Review from different engineering perspectives
[C] Continue - Save verification results and proceed to completion"

### 7. Handle Menu Selection

(Standard A/P/C handling as in previous steps)

## APPEND TO DOCUMENT:

When user selects 'C', append the verification content directly to the document.

## SUCCESS METRICS:

✅ Every hazard traces forward to at least one safety requirement
✅ Every safety requirement traces backward to a hazard
✅ Every safety requirement has a criticality level assigned
✅ Every safety requirement is allocated to a component
✅ No orphan hazards (hazards with no requirements)
✅ No orphan requirements (requirements with no hazard source)
✅ All gaps identified and resolution actions documented

## FAILURE MODES:

❌ Not checking forward traceability (Hazard → Requirements)
❌ Not checking backward traceability (Requirements → Hazard)
❌ Not verifying allocation completeness
❌ Not verifying criticality assignment completeness
❌ Accepting orphan hazards or requirements without resolution
❌ Not presenting gap analysis clearly to the user

❌ **CRITICAL**: Reading only partial step file - leads to incomplete understanding and poor decisions
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file
❌ **CRITICAL**: Making decisions without complete understanding of step requirements and protocols

## NEXT STEP:

After user selects 'C' and content is saved, load `./step-06-complete.md` to finalize the safety requirements document.

Remember: Do NOT proceed to step-06 until user explicitly selects 'C' from the A/P/C menu and content is saved!