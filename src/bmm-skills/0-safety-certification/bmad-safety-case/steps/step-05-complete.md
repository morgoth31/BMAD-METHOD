# Step 5: Safety Case Completion & Handoff

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete decisions
- ✅ ALWAYS treat this as collaborative completion between safety case engineering peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on successful workflow completion and remediation guidance
- 🎯 PROVIDE clear next steps for safety case maintenance and certification
- ⚠️ ABSOLUTELY NO TIME ESTIMATES - AI development speed has fundamentally changed
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- 🎯 Present completion summary and remediation guidance
- 📖 Update frontmatter with final workflow state
- 🚫 THIS IS THE FINAL STEP IN THIS WORKFLOW

## YOUR TASK:

Complete the safety case workflow, provide a comprehensive completion summary, identify argument gaps, and recommend remediation actions.

## COMPLETION SEQUENCE:

### 1. Congratulate the User on Completion

Both you and the User completed a rigorous safety case — give a summary of what you achieved together and congratulate the user on constructing a structured, evidence-based safety argument.

### 2. Argument Gap Analysis

Review the entire safety case for argument completeness:

**Gap Categories:**

- **Evidence Gaps**: Claims where needed evidence doesn't exist yet
- **Argument Gaps**: Claims where the inference chain is incomplete
- **Assumption Gaps**: Assumptions that haven't been justified or validated
- **Coverage Gaps**: Hazards or safety concerns not addressed by any claim

**Gap Analysis Summary:**

| Gap Category | Count | Critical | High | Medium | Low |
|-------------|-------|----------|------|--------|------|
| Evidence Gaps | {n} | {n} | {n} | {n} | {n} |
| Argument Gaps | {n} | {n} | {n} | {n} | {n} |
| Assumption Gaps | {n} | {n} | {n} | {n} | {n} |
| Coverage Gaps | {n} | {n} | {n} | {n} | {n} |

### 3. Document Completion Summary

Provide a summary of what was produced:

```markdown
## Safety Case Completion Summary

### Deliverables

1. ✅ Top-Level Safety Claim — specific, measurable, bounded, defensible
2. ✅ Sub-Claims — decomposed from top-level, traced to hazards
3. ✅ Evidence Registry — all evidence items catalogued and mapped to claims
4. ✅ Argument Structure — claims connected to evidence via valid inference
5. ✅ GSN Diagram Specification — complete notation for the safety case

### Coverage Metrics

- **Total Claims:** {n} (1 top-level + {n} sub-claims)
- **Total Evidence Items:** {n} ({n} existing, {n} needed)
- **Evidence Sufficiency:** {n}/{n} claims have sufficient evidence ({pct}%)
- **Argument Strength:** {n} Strong, {n} Moderate, {n} Weak, {n} Broken
- **Total Gaps:** {n} ({n} Critical, {n} High, {n} Medium, {n} Low)

### Key Assumptions

{List of assumptions the safety case depends on}
```

### 4. Remediation Recommendations

For each identified gap, provide recommended actions:

**Critical Gaps (Must address before certification):**
- {Gap} → {Recommended action}

**High Priority Gaps:**
- {Gap} → {Recommended action}

**Medium Priority Gaps:**
- {Gap} → {Recommended action}

**Low Priority Gaps:**
- {Gap} → {Recommended action}

### 5. Update the Document Frontmatter

```yaml
stepsCompleted: [1, 2, 3, 4, 5]
workflowType: 'safety-case'
lastStep: 5
status: 'complete'
completedAt: '{{current_date}}'
```

### 6. Recommend Next Steps

Safety case construction complete. Recommended next workflows:

1. **bmad-traceability-setup** — Set up formal traceability linking safety case claims to artifacts
2. **bmad-safety-requirements** — If not already done, derive safety requirements from hazards
3. **Evidence Creation** — Address critical and high-priority evidence gaps
4. **Independent Review** — Have the safety case reviewed by an independent assessor
5. **Certification Preparation** — Package the safety case for the target certification authority

### 7. Offer Q&A

Upon completion, offer to answer any questions about the Safety Case Document.

## SUCCESS METRICS:

✅ Complete safety case document delivered with all sections
✅ Top-level claim properly decomposed into sub-claims
✅ Evidence mapped to every sub-claim
✅ Arguments constructed with valid inference patterns
✅ GSN diagram specification complete
✅ Argument gaps identified with remediation actions
✅ User provided with clear next steps
✅ Workflow status properly updated
✅ User collaboration maintained throughout completion process

## FAILURE MODES:

❌ Not providing clear gap analysis and remediation guidance
❌ Missing final validation of document completeness
❌ Not updating workflow status appropriately
❌ Failing to celebrate the successful completion
❌ Not providing specific next steps for certification readiness
❌ Rushing completion without proper summary

❌ **CRITICAL**: Reading only partial step file - leads to incomplete understanding and poor decisions
❌ **CRITICAL**: Making decisions without complete understanding of step requirements and protocols

## WORKFLOW COMPLETE:

This is the final step of the Safety Case workflow. The user now has a complete, structured safety case with claims, evidence, arguments, and a GSN diagram specification — ready for gap remediation and certification submission.

The safety case serves as the primary artifact for demonstrating to certification authorities that the system is safe for its intended use, supported by a rigorous, traceable argument structure.