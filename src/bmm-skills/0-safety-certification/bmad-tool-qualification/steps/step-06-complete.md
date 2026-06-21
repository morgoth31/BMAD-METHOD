# Step 6: Finalize Tool Qualification Report

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete finalization
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between tool qualification peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on report finalization and PSAC integration only
- 🚫 FORBIDDEN to finalize a report with unresolved CRITICAL issues
- ⚠️ ABSOLUTELY NO TIME ESTIMATES

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- 💾 Update document and frontmatter as you finalize
- 📖 Set up frontmatter `stepsCompleted: [1, 2, 3, 4, 5, 6]` and `status: complete`
- 🚫 FORBIDDEN to mark complete until all sections are finalized

## CONTEXT BOUNDARIES:

- Variables from workflow.md are available in memory
- Previous context = what's in output document + frontmatter + loaded input documents
- All previous steps (identification, criteria, planning, execution, verification) are the foundation
- This step finalizes the report and prepares for PSAC integration

## YOUR TASK:

Finalize the Tool Qualification Report, produce a summary suitable for inclusion in the PSAC (Plan for Software Aspects of Certification), and define next steps for ongoing qualification maintenance.

## FINALIZATION SEQUENCE:

### 1. Review Complete Qualification Package

Before finalizing, perform a final review of the complete qualification package:

**Package Completeness Check:**

- [ ] Tool identification and description (from step-01)
- [ ] Qualification criteria determination with justification (from step-02)
- [ ] Tool Operational Requirements (from step-03)
- [ ] Tool Qualification Plan (from step-03)
- [ ] Qualification execution results (from step-04)
- [ ] Anomaly reports and resolutions (from step-04)
- [ ] Independent verification results (from step-05)
- [ ] Coverage evaluation results (from step-05)
- [ ] All review findings resolved (from step-05)

<critical>If any section is incomplete or has unresolved CRITICAL issues, STOP and address them before finalizing. The report must be complete and accurate.</critical>

### 2. Write Qualification Conclusion

Based on all evidence gathered, write the qualification conclusion:

**Conclusion Elements:**

**A. Qualification Statement:**
- Tool: {name and version}
- Criteria Level: CR-{n}
- DAL Impact: {DAL level}
- Conclusion: The tool {is / is not} qualified for {usage} at DAL-{level}

**B. Qualification Scope:**
- Functions qualified: {list of qualified tool functions}
- Environment qualified: {host/target environment}
- Limitations: {any documented limitations}
- Exclusions: {what is NOT covered by the qualification}

**C. Residual Risks:**
- Any remaining anomalies (even resolved ones) that affect usage
- Any coverage gaps with accepted risk disposition
- Any limitations on the qualification scope

**D. Conditions for Re-qualification:**
- Tool version changes
- Environment changes
- Usage changes (new functions, different DAL impact)
- Anomaly corrections

<critical>The conclusion must be clear, honest, and defensible. Do not overstate the qualification scope. Limitations and exclusions are just as important as what is qualified.</critical>

### 3. Generate PSAC Summary

Produce a concise summary suitable for inclusion in the Plan for Software Aspects of Certification:

**PSAC Summary Elements:**

**Tool Qualification Summary for PSAC:**

| Field | Value |
|-------|-------|
| **Tool Name** | {name} |
| **Tool Version** | {version} |
| **Tool Category** | {COTS / Bespoke / Open-Source} |
| **Usage Type** | {Verification / Development} |
| **Qualification Criteria** | CR-{n} — {description} |
| **DAL Impact** | {DAL level} |
| **Certification Credit** | {Yes/No — what credit is claimed} |
| **Qualification Conclusion** | {QUALIFIED / QUALIFIED WITH LIMITATIONS / NOT QUALIFIED} |
| **Qualification Report Reference** | {document reference} |

**Applicable DO-330 Objectives:**
| Objective | Status | Evidence Reference |
|-----------|--------|--------------------|
| {objective ID} | {SATISFIED / NOT APPLICABLE} | {reference} |

**Key Limitations and Conditions:**
- {limitation 1}
- {limitation 2}
- ...

<critical>This summary must be self-contained so the PSAC can reference it without needing the full qualification report.</critical>

### 4. Define Next Steps

Document ongoing qualification maintenance requirements:

**Qualification Maintenance:**

**A. Ongoing Monitoring:**
- Tool problem reporting process
- Periodic review of tool performance
- Monitoring of tool vendor issue reports (for COTS)

**B. Re-qualification Triggers:**
- Tool version upgrade
- Host environment change
- New tool function usage
- Change in DAL impact
- Anomaly correction affecting qualified functions

**C. Configuration Management:**
- Tool version control
- Qualification data archival
- Change control for qualification data

**D. Integration with Project V&V:**
- How qualified tool output is used in project verification
- Independent verification of tool output (for CR-1 and CR-2)
- Tool usage procedures and guidelines

### 5. Finalize the Report

Complete the Tool Qualification Report:

- Ensure all sections are complete and accurate
- Update frontmatter: `stepsCompleted: [1, 2, 3, 4, 5, 6]` and `status: complete`
- Add revision history entry for finalization
- Verify all cross-references are correct
- Verify all anomalies are resolved or dispositioned

### 6. Report Finalization Summary

Report to the user:

**Tool Qualification Report Finalized:**

**Document:** {planning_artifacts}/tool-qualification-report.md

**Qualification Result:**
- Tool: {name} version {version}
- Criteria: CR-{n} — {description}
- Qualification: {QUALIFIED / QUALIFIED WITH LIMITATIONS / NOT QUALIFIED}
- Scope: {what is covered}
- Limitations: {any limitations}

**Evidence Summary:**
- TOR Requirements: {total} total, {pass} satisfied, {na} not applicable
- Test Cases: {total} total, {pass} PASS, {fail} FAIL, {cond} CONDITIONAL
- Anomalies: {total} total, {resolved} resolved, {accepted} accepted risk
- Review Findings: {total} total, {resolved} resolved
- Coverage: Requirements {percentage}%, Structural {percentage}%

**PSAC Summary:** Ready for inclusion in the PSAC

**Next Steps:**
1. Include PSAC summary in the Plan for Software Aspects of Certification
2. Archive qualification data under configuration management
3. Establish tool problem reporting process
4. Define re-qualification triggers and criteria
5. Integrate tool usage procedures into project V&V process

Confirm with the user that the report is complete and correct. This is the final step of the workflow.

## FINALIZATION RULES:

1. **Complete**: Every section must be filled in and accurate
2. **Honest**: Don't overstate qualification scope or understate limitations
3. **Traceable**: Every claim traces back to evidence
4. **Defensible**: The report must withstand certification authority scrutiny
5. **Maintainable**: Include clear re-qualification criteria

## SUCCESS METRICS:

✅ Complete qualification package reviewed and all sections present
✅ Qualification conclusion written with clear scope and limitations
✅ PSAC summary produced with all required elements
✅ Next steps and maintenance requirements documented
✅ Report finalized with frontmatter marked complete
✅ All CRITICAL issues resolved before finalization
✅ User has reviewed and approved the final report
✅ Frontmatter updated with `stepsCompleted: [1, 2, 3, 4, 5, 6]` and `status: complete`

## FAILURE MODES:

❌ Finalizing with unresolved CRITICAL issues
❌ Overstating qualification scope
❌ Not including limitations and exclusions
❌ Not producing PSAC summary
❌ Not defining re-qualification triggers
❌ Not updating frontmatter to complete

❌ **CRITICAL**: Reading only partial step file - leads to incomplete finalization
❌ **CRITICAL**: Finalizing a report that cannot withstand certification authority scrutiny
❌ **CRITICAL**: Omitting qualification limitations that affect safe tool usage

## WORKFLOW COMPLETE

The Tool Qualification workflow is now complete. The following deliverables have been produced:

1. **Tool Qualification Report** — Complete qualification evidence and conclusion
2. **PSAC Summary** — Concise summary for certification plan inclusion
3. **Qualification Maintenance Plan** — Ongoing requirements for qualification validity

The user may re-run this workflow for additional tools or when re-qualification is needed.