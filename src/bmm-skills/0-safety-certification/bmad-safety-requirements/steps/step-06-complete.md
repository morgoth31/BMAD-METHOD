# Step 6: Safety Requirements Completion & Handoff

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete decisions
- ✅ ALWAYS treat this as collaborative completion between safety engineering peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on successful workflow completion and next steps guidance
- 🎯 PROVIDE clear next steps for implementation and verification phases
- ⚠️ ABSOLUTELY NO TIME ESTIMATES - AI development speed has fundamentally changed
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- 🎯 Present completion summary and implementation guidance
- 📖 Update frontmatter with final workflow state
- 🚫 THIS IS THE FINAL STEP IN THIS WORKFLOW

## YOUR TASK:

Complete the safety requirements workflow, provide a comprehensive completion summary, and guide the user to the next phase of their safety-critical development.

## COMPLETION SEQUENCE:

### 1. Congratulate the User on Completion

Both you and the User completed something critical here — give a summary of what you achieved together and congratulate the user on establishing a rigorous safety requirements baseline.

### 2. Document Completion Summary

Provide a summary of what was produced:

```markdown
## Safety Requirements Document Complete

### Summary

- **Total Hazards Analyzed:** {count}
- **Total Safety Requirements Derived:** {count}
- **Average Requirements per Hazard:** {ratio}
- **Criticality Distribution:**
  - {Highest level}: {count} requirements
  - {Mid level}: {count} requirements
  - {Low level}: {count} requirements
- **Components Allocated:** {count}
- **Traceability Status:** {Complete / Has Gaps}
- **Orphan Items:** {count} ({list if any})

### Key Deliverables

1. ✅ Safety Requirements Table — all requirements with IDs and descriptions
2. ✅ Criticality Assignment — SIL/DAL/ASIL levels with rationale
3. ✅ Allocation Matrix — requirements mapped to components
4. ✅ Traceability Verification — bidirectional traceability confirmed
5. ✅ Gap Analysis — any identified gaps with resolution actions
```

### 3. Update the Document Frontmatter

```yaml
stepsCompleted: [1, 2, 3, 4, 5, 6]
workflowType: 'safety-requirements'
lastStep: 6
status: 'complete'
completedAt: '{{current_date}}'
```

### 4. Recommend Next Steps

Safety requirements complete. Recommended next workflows:

1. **bmad-traceability-setup** — Set up formal traceability infrastructure linking hazards → safety requirements → software requirements → design → code → tests
2. **bmad-safety-case** — Build a structured safety case / assurance case using GSN notation
3. **Architecture Review** — Validate that the architecture supports all safety requirements and their criticality levels
4. **V&V Planning** — Plan verification and validation activities based on criticality levels

### 5. Offer Q&A

Upon completion, offer to answer any questions about the Safety Requirements Document.

## SUCCESS METRICS:

✅ Complete safety requirements document delivered with all sections
✅ All safety requirements derived from hazards with traceability
✅ Criticality levels assigned with rationale
✅ Requirements allocated to system components
✅ Bidirectional traceability verified
✅ User provided with clear next steps
✅ Workflow status properly updated
✅ User collaboration maintained throughout completion process

## FAILURE MODES:

❌ Not providing clear next steps for safety engineering workflow
❌ Missing final validation of document completeness
❌ Not updating workflow status appropriately
❌ Failing to celebrate the successful completion
❌ Not identifying gaps that need remediation before proceeding
❌ Rushing completion without proper summary

❌ **CRITICAL**: Reading only partial step file - leads to incomplete understanding and poor decisions
❌ **CRITICAL**: Making decisions without complete understanding of step requirements and protocols

## WORKFLOW COMPLETE:

This is the final step of the Safety Requirements workflow. The user now has a complete, traceable set of safety requirements with criticality assignments and component allocations, ready for implementation and verification.

The safety requirements document serves as the foundation for:
- Safety case construction
- V&V planning and execution
- Certification evidence packages
- Ongoing safety management throughout the lifecycle