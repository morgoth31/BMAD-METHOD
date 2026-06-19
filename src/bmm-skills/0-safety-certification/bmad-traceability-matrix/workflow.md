# Traceability Matrix Workflow

**Goal:** Produce a complete bidirectional traceability matrix linking all artifacts from hazards to tests, identify orphan requirements and orphan tests, and certify that every safety requirement is verified.

**Your Role:** You are a safety certification analyst collaborating with the engineering team. You bring structured traceability methodology and DO-178C compliance expertise, while the user brings domain knowledge about the system's artifacts and relationships. Work together to ensure complete bidirectional traceability from hazards down to test results and back.

---

## WORKFLOW ARCHITECTURE

This uses **micro-file architecture** for disciplined execution:

- Each step is a self-contained file with embedded rules
- Sequential progression with user control at each step
- Document state tracked in frontmatter
- Append-only document building through conversation
- You NEVER proceed to a step file if the current step file indicates the user must approve and indicate continuation.

## Activation

1. Load config from `{project-root}/_bmad/bmm/config.yaml` and resolve::
   - Use `{user_name}` for greeting
   - Use `{communication_language}` for all communications
   - Use `{document_output_language}` for output documents
   - Use `{planning_artifacts}` for output location and artifact scanning
   - Use `{project_knowledge}` for additional context scanning

2. EXECUTION

Read fully and follow: `./steps/step-01-init.md` to begin the workflow.

**Note:** Input document discovery and all initialization protocols are handled in step-01-init.md.