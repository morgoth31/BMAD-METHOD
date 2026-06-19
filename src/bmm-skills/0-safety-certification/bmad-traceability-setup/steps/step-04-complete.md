# Step 4: Traceability Setup Completion & Handoff

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete decisions
- ✅ ALWAYS treat this as collaborative completion between traceability engineering peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on successful workflow completion and gap remediation guidance
- 🎯 PROVIDE clear next steps for ongoing traceability maintenance
- ⚠️ ABSOLUTELY NO TIME ESTIMATES - AI development speed has fundamentally changed
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- 🎯 Present completion summary and maintenance guidance
- 📖 Update frontmatter with final workflow state
- 🚫 THIS IS THE FINAL STEP IN THIS WORKFLOW

## YOUR TASK:

Complete the traceability setup workflow, provide a comprehensive coverage report, identify gaps, and recommend ongoing maintenance practices.

## COMPLETION SEQUENCE:

### 1. Coverage Report

Analyze the seeded traceability for completeness:

**Coverage Metrics:**
- Total hazards with linked safety requirements: {n}/{total}
- Total safety requirements with linked software requirements: {n}/{total}
- Total software requirements with linked design: {n}/{total}
- Total design elements with linked code: {n}/{total}
- Total requirements with linked tests: {n}/{total}

**Overall Traceability Coverage:** {percentage}%

**Unlinked Artifacts (Gaps):**
- Hazards without safety requirements: {list}
- Safety requirements without software requirements: {list}
- Software requirements without design: {list}
- Design without code: {list}
- Requirements without tests: {list}

### 2. Gap Analysis

For each gap identified, classify its criticality:

**Critical Gaps (Must Address):**
- Safety requirements without hazard traceability
- Hazards without any safety requirements
- High-criticality (SIL 3/4) requirements without test coverage

**Important Gaps (Should Address):**
- Missing links between requirement levels
- Requirements without allocation to design
- Low-criticality requirements without test coverage

**Acceptable Gaps (To Be Addressed Later):**
- Future artifact types not yet created
- Links that depend on artifacts not yet produced

### 3. Generate Completion Content

```markdown
## Coverage Report

### Traceability Coverage Summary

| Link Level | Total | Linked | Unlinked | Coverage |
|------------|-------|--------|----------|----------|
| Hazard → Safety Req | {total} | {linked} | {unlinked} | {pct}% |
| Safety Req → SW Req | {total} | {linked} | {unlinked} | {pct}% |
| SW Req → Design | {total} | {linked} | {unlinked} | {pct}% |
| Design → Code | {total} | {linked} | {unlinked} | {pct}% |
| Requirement → Test | {total} | {linked} | {unlinked} | {pct}% |

### Gap Analysis

#### Critical Gaps

| Gap | Impact | Recommended Action |
|-----|--------|-------------------|
| {gap description} | {impact} | {action} |

#### Important Gaps

| Gap | Impact | Recommended Action |
|-----|--------|-------------------|
| {gap description} | {impact} | {action} |

### Ongoing Maintenance Recommendations

1. **New Artifact Integration**: Update traceability matrix when new artifacts are created
2. **Link Verification**: Review inferred/assumed links when artifacts are updated
3. **Coverage Monitoring**: Track traceability coverage as a project health metric
4. **Certification Readiness**: Ensure all critical links are confirmed before certification review
5. **Change Impact Analysis**: Use the matrix to assess impact of changes to any artifact
```

### 4. Congratulate the User on Completion

Both you and the User completed an important step — establishing the traceability infrastructure. Congratulate the user and summarize what was achieved.

### 5. Update the Document Frontmatter

```yaml
stepsCompleted: [1, 2, 3, 4]
workflowType: 'traceability-setup'
lastStep: 4
status: 'complete'
completedAt: '{{current_date}}'
```

### 6. Recommend Next Steps

Traceability setup complete. Recommended next steps:

1. **bmad-safety-case** — Build a structured safety case using the traceability infrastructure
2. **bmad-safety-requirements** — If not already done, derive safety requirements from hazards
3. **Fill Gaps** — Address critical and important gaps identified in the coverage report
4. **Ongoing Maintenance** — Establish a process for keeping the traceability matrix current as artifacts evolve

### 7. Offer Q&A

Upon completion, offer to answer any questions about the Traceability Matrix.

## SUCCESS METRICS:

✅ Complete traceability matrix delivered with all links seeded
✅ Coverage report showing traceability percentages per level
✅ Gap analysis identifying critical, important, and acceptable gaps
✅ Ongoing maintenance recommendations provided
✅ User provided with clear next steps
✅ Workflow status properly updated
✅ User collaboration maintained throughout completion process

## FAILURE MODES:

❌ Not providing clear coverage metrics
❌ Missing gap analysis for unlinked artifacts
❌ Not prioritizing gaps by criticality
❌ Not providing maintenance recommendations
❌ Not updating workflow status appropriately
❌ Failing to celebrate the successful completion
❌ Rushing completion without proper summary

❌ **CRITICAL**: Reading only partial step file - leads to incomplete understanding and poor decisions
❌ **CRITICAL**: Making decisions without complete understanding of step requirements and protocols

## WORKFLOW COMPLETE:

This is the final step of the Traceability Setup workflow. The user now has a complete traceability matrix with seeded links, a coverage report, and a gap analysis — ready for ongoing maintenance and certification evidence.

The traceability matrix serves as the single source of truth for demonstrating bidirectional traceability across the safety-critical development lifecycle.