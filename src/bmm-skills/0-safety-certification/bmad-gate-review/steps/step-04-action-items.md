# Step 4: Generate Action Items

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete action items
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between review facilitator peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on action item generation only - final decision happens in the next step
- 🚫 FORBIDDEN to assign action items without user confirmation
- ⚠️ ABSOLUTELY NO TIME ESTIMATES

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- 💾 Update document and frontmatter as you generate action items
- 📖 Set up frontmatter `stepsCompleted: [1, 2, 3, 4]` before loading next step
- 🚫 FORBIDDEN to load next step until action items are confirmed

## CONTEXT BOUNDARIES:

- Variables from workflow.md are available in memory
- Previous context = what's in output document + frontmatter + loaded input documents
- Review findings were completed in step-03
- Do not re-evaluate findings in this step

## YOUR TASK:

Generate action items for every CONCERN and FAIL finding from step-03. Each action item must be specific, assigned, and trackable.

## ACTION ITEM GENERATION SEQUENCE:

### 1. Review Findings

Load the findings from step-03 and identify all CONCERN and FAIL findings:

- List all FAIL findings first (these are highest priority)
- List all CONCERN findings next
- Confirm with the user that the findings are still accurate

### 2. Generate Action Items

For each CONCERN and FAIL finding, generate an action item:

**Action Item Fields:**

| Field | Description |
|-------|-------------|
| **Action ID** | Unique identifier (e.g., AI-001, AI-002) |
| **Related Finding** | The criterion and finding it addresses |
| **Finding Type** | FAIL or CONCERN |
| **Action Description** | Specific, actionable description of what needs to be done |
| **Owner** | Person or role responsible for completing the action |
| **Priority** | Based on finding type: P1 (FAIL), P2 (CONCERN) |
| **Resolution Criteria** | What must be true for this action item to be considered resolved |
| **Dependencies** | Other action items that must be completed first |

<critical>Each action item must be SMART: Specific, Measurable, Achievable, Relevant, Time-bound. Vague actions like "improve documentation" are not acceptable.</critical>

### 3. Prioritize and Organize

Organize action items by priority:

**P1 - FAIL Resolution (Must resolve before gate can pass):**
- Every FAIL finding generates at least one P1 action item
- These are blocking — the gate cannot pass with unresolved P1 items
- Suggest resolution order based on dependencies

**P2 - CONCERN Resolution (Should resolve before gate can fully pass):**
- Every CONCERN finding generates at least one P2 action item
- These may be conditionally accepted with a documented plan
- Distinguish between CONCERN items that must be resolved vs. those that can be deferred

### 4. Document Action Items

Update the gate review report with the Action Items section:

- Organize by priority (P1 first, then P2)
- Include all fields for each action item
- Add a dependency table if dependencies exist between items
- Add a summary count of action items by priority

### 5. Confirm with User

Present the complete action item list to the user and confirm:

- Are all action items specific and actionable?
- Are owners assigned realistically?
- Are resolution criteria clear and verifiable?
- Are dependencies correctly identified?
- Are there any additional action items the user wants to add?

## ACTION ITEM RULES:

1. **One Finding, At Least One Action**: Every CONCERN and FAIL must have at least one action item
2. **Be Specific**: "Revise software development plan section 4.2 to include traceability matrix" not "update documentation"
3. **Be Verifiable**: Every action item must have clear resolution criteria
4. **Be Realistic**: Don't assign 10 P1 items to one person
5. **Distinguish Mandatory vs. Deferred**: Clearly mark which P2 items can be conditionally deferred

## SUCCESS METRICS:

✅ Every CONCERN and FAIL finding has at least one action item
✅ All action items are specific and actionable
✅ Owners are assigned to every action item
✅ Priorities align with finding types (P1 for FAIL, P2 for CONCERN)
✅ Resolution criteria are defined for each action item
✅ Dependencies between action items are identified
✅ User has reviewed and confirmed the action items
✅ Frontmatter updated with `stepsCompleted: [1, 2, 3, 4]`

## FAILURE MODES:

❌ Creating vague action items ("improve documentation")
❌ Not assigning owners to action items
❌ Priorities that don't match finding severities
❌ Not defining resolution criteria for action items
❌ Proceeding without user review of action items
❌ Not updating frontmatter progress

❌ **CRITICAL**: Reading only partial step file - leads to incomplete action items
❌ **CRITICAL**: Skipping FAIL findings — every FAIL must have at least one action item
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file

## NEXT STEP:

After user confirms the action items and selects [C] to continue, load `./step-05-complete.md` to produce the gate review decision and finalize the report.