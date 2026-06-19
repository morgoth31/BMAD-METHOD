# Step 7: Hazard Analysis Completion & Handoff

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete decisions
- ✅ ALWAYS treat this as collaborative completion between safety analysis peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on successful workflow completion and next step handoff
- 🎯 PROVIDE clear next steps for certification and implementation phase
- ⚠️ ABSOLUTELY NO TIME ESTIMATES - AI development speed has fundamentally changed
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- 🎯 Present completion summary and handoff guidance
- 📖 Update frontmatter with final workflow state
- 🚫 THIS IS THE FINAL STEP IN THIS WORKFLOW

## YOUR TASK:

Complete the hazard analysis workflow, provide a comprehensive completion summary, and guide the user to the next phase of their safety-critical development.

## COMPLETION SEQUENCE:

### 1. Congratulate the User on Completion

Both you and the User completed something significant here - give a summary of what you achieved together and really congratulate the user on a thorough hazard analysis.

### 2. Update the created document's frontmatter

```yaml
stepsCompleted: [1, 2, 3, 4, 5, 6, 7]
workflowType: 'hazard-analysis'
lastStep: 7
status: 'complete'
completedAt: '{{current_date}}'
```

### 3. Completion Summary

Present a comprehensive summary of the hazard analysis:

**Hazard Analysis Summary for {{project_name}}:**

- **Techniques Applied:** {{list_of_techniques_used}}
- **System Boundary:** {{brief_description}}
- **Hazards Identified:** {{total_count}}
  - Catastrophic: {{count}}
  - Critical: {{count}}
  - Major: {{count}}
  - Minor: {{count}}
  - Negligible: {{count}}
- **Risk Assessment Results:**
  - High Risk: {{count}} hazards requiring immediate mitigation
  - Medium Risk: {{count}} hazards requiring documented mitigation
  - Low Risk: {{count}} hazards acceptable with monitoring
  - Negligible Risk: {{count}} hazards accepted
- **Safety Requirements Derived:** {{total_sr_count}}
  - At highest integrity level ({{max_SIL_DAL}}): {{count}}
  - At other levels: {{count}}
- **Architecture Constraints:** {{constraint_count}}
- **Mitigation Coverage:** {{percentage}}% of hazards have documented mitigations

### 4. Validate Completeness

Check that the document has all required sections populated:

- [ ] System Boundary defined
- [ ] Analysis Techniques selected and applied
- [ ] Hazard Identification complete with H-IDs
- [ ] Risk Assessment with severity × likelihood for each hazard
- [ ] Mitigation Summary with strategies for High/Medium risks
- [ ] Safety Requirements Derived with SR-IDs
- [ ] Traceability matrix linking hazards to requirements

If any sections are incomplete, note them and ask the user if they want to address gaps before finalizing.

### 5. Next Steps Guidance

After hazard analysis completion, recommend the following next steps:

**Immediate Next Steps:**

1. **Safety Requirements Specification** — Invoke the `bmad-safety-requirements` skill (when available) to formalize all derived safety requirements into a complete Safety Requirements Specification (SRS) document
2. **Certification Planning** — Invoke the `bmad-certification-plan` skill (when available) to create a certification plan based on the required integrity levels identified
3. **Architecture Update** — Feed safety architecture constraints back into the system architecture document to ensure safety requirements are reflected in the design

**Ongoing Activities:**

- Maintain the hazard log as a living document — update when new hazards are identified or when mitigations are implemented
- Use the traceability matrix during V&V activities to demonstrate coverage
- Re-assess risks after mitigations are implemented (residual risk verification)

### 6. Offer to Answer Questions

Upon completion, offer to answer any questions about the Hazard Analysis Document.

## SUCCESS METRICS:

✅ Complete hazard analysis document delivered with all sections
✅ All hazards documented with unique H-IDs
✅ Risk assessment completed with severity × likelihood matrix
✅ Mitigation strategies assigned using hierarchy of controls
✅ Safety requirements derived, verifiable, and traceable
✅ Architecture constraints identified and documented
✅ Traceability matrix complete from hazards to requirements
✅ Workflow status properly updated
✅ User collaboration maintained throughout completion process
✅ Clear next steps provided

## FAILURE MODES:

❌ Not providing clear next steps for safety requirements and certification
❌ Missing final validation of document completeness
❌ Not updating workflow status appropriately
❌ Failing to celebrate the successful completion
❌ Not verifying traceability from hazards through requirements to mitigations
❌ Rushing completion without proper summary

❌ **CRITICAL**: Reading only partial step file - leads to incomplete understanding and poor decisions
❌ **CRITICAL**: Making decisions without complete understanding of step requirements and protocols

## WORKFLOW COMPLETE:

This is the final step of the Hazard Analysis workflow. The user now has a complete, validated hazard analysis document ready for safety requirements derivation and certification planning.

The hazard analysis will serve as the foundation for:
- Safety Requirements Specification
- Certification planning and evidence
- Verification and validation activities
- Ongoing safety management throughout the project lifecycle