# Step 3: Create Tool Qualification Plan

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incomplete planning
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between tool qualification peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on qualification planning only - test execution happens in the next step
- 🚫 FORBIDDEN to skip planning activities based on criteria level
- ⚠️ ABSOLUTELY NO TIME ESTIMATES

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- 💾 Update document and frontmatter as you build the plan
- 📖 Set up frontmatter `stepsCompleted: [1, 2, 3]` before loading next step
- 🚫 FORBIDDEN to load next step until planning is complete

## CONTEXT BOUNDARIES:

- Variables from workflow.md are available in memory
- Previous context = what's in output document + frontmatter + loaded input documents
- Tool identification (step-01) and criteria determination (step-02) are the foundation
- Don't re-determine criteria in this step

## YOUR TASK:

Create the Tool Qualification Plan (TQP) that defines how the tool will be qualified based on the criteria level determined in step-02. The TQP is the governing document for all qualification activities.

## PLANNING SEQUENCE:

### 1. Define Tool Operational Requirements (TOR)

For ALL criteria levels, define the Tool Operational Requirements:

**TOR Elements:**
- **TOR-01**: Functional requirements — what the tool must do
- **TOR-02**: Performance requirements — speed, capacity, accuracy
- **TOR-03**: Interface requirements — inputs, outputs, data formats
- **TOR-04**: Environment requirements — host OS, hardware, dependencies
- **TOR-05**: Safety-related requirements — error detection, failure modes
- **TOR-06**: Operational constraints — limitations, assumptions, warnings
- **TOR-07**: Data requirements — data formats, ranges, boundary conditions

<critical>Work through each TOR element with the user. For COTS tools, TOR is derived from the tool's documentation and user manual. For bespoke tools, TOR is derived from the tool's requirements specification. For open-source tools, TOR is derived from available documentation and may need to be inferred.</critical>

### 2. Define Qualification Activities

Based on the criteria level, define the required qualification activities:

**CR-1 (Lowest effort — Output verified for each use):**
- TOR definition
- Tool usage description
- Procedure for independent verification of tool output
- Configuration identification of the tool version

**CR-2 (Medium effort — Errors don't affect airworthiness):**
- All CR-1 activities
- Analysis demonstrating that tool errors cannot affect airworthiness
- Tool problem reporting procedure

**CR-3 (High effort — Errors could affect airworthiness):**
- All CR-2 activities
- Tool verification testing (functional and structural)
- Tool requirements traceability
- Configuration management of tool qualification data
- Quality assurance of qualification activities

**CR-4 (Very high effort — Development tool):**
- All CR-3 activities
- Full lifecycle data (equivalent to software at the same DAL)
- Structural coverage analysis (to the level required by DAL)
- Tool development standards compliance
- Tool validation testing
- Independent verification of qualification results (for DAL-A and DAL-B)

**CR-5 (High effort — Automated verification used for credit):**
- All CR-3 activities
- Demonstration that the tool correctly automates the verification process
- Normal and robustness test cases
- Structural coverage analysis
- Configuration management of tool and qualification environment

### 3. Define Verification Strategy

For each applicable criteria level, define the verification approach:

| Verification Method | Applicable Criteria | Description |
|--------------------|--------------------|-------------|
| **Testing** | CR-3, CR-4, CR-5 | Execute tool with known inputs and verify outputs |
| **Analysis** | CR-2, CR-3, CR-4, CR-5 | Demonstrate tool properties through logical reasoning |
| **Review** | All | Examine tool documentation and outputs for correctness |
| **Demonstration** | CR-1, CR-2 | Show that output is verified through other means |
| **Formal Methods** | CR-4 (optional) | Mathematical proof of tool properties |

<critical>Discuss each verification method with the user. The strategy must be appropriate for the criteria level AND the tool category. COTS tools rely more on black-box testing; bespoke tools can use white-box approaches.</critical>

### 4. Define Test Strategy

For criteria levels requiring testing (CR-3, CR-4, CR-5):

**Test Categories:**
- **Normal Range Tests**: Tool operates correctly with valid inputs
- **Robustness Tests**: Tool handles invalid/boundary inputs correctly
- **Structural Coverage Tests**: Tests achieve required coverage of tool structure
- **Integration Tests**: Tool works correctly in the target environment

**Test Specification Approach:**
- Test cases derived from TOR
- Test cases derived from tool structure (for CR-4 and CR-5)
- Test cases derived from known tool issues and error reports
- Test environment definition (hardware, software, data)

### 5. Define Configuration Management

For criteria levels requiring CM (CR-3, CR-4, CR-5):

- Tool version identification (exact version, patches, configuration)
- Qualification environment configuration
- Test assets version control
- Qualification data baselining
- Change control process for qualification data

### 6. Define Problem Reporting

For all criteria levels:

- How tool anomalies discovered during qualification will be reported
- How tool anomalies from operational use will be tracked
- Impact assessment process for tool anomalies
- Criteria for re-qualification after tool changes

### 7. Document the Tool Qualification Plan

Update the Tool Qualification Report with the TQP section:

- **TOR**: Complete tool operational requirements
- **Qualification Activities**: Activities mapped to criteria level
- **Verification Strategy**: Methods and rationale for each activity
- **Test Strategy**: Test categories and approach (if applicable)
- **Configuration Management**: CM approach for qualification data
- **Problem Reporting**: Anomaly reporting and impact assessment
- **Schedule**: Qualification milestones (high-level, no dates)
- **Responsibilities**: Who performs each qualification activity

<critical>Review each section with the user before documenting. The TQP must be complete and correct before proceeding to execution.</critical>

### 8. Planning Summary

Report to the user:

**Tool Qualification Plan Summary:**
- TOR Elements Defined: {count} requirements
- Qualification Activities: {count} activities mapped to CR-{n}
- Verification Strategy: {methods selected}
- Test Strategy: {approach} ({count} test categories)
- Configuration Management: {approach}
- Problem Reporting: {approach}

Confirm with the user that the TQP is complete and correct before proceeding.

## PLANNING RULES:

1. **Criteria-Driven**: All activities must be justified by the criteria level
2. **Traceable**: Every activity traces back to a TOR requirement
3. **Appropriate Rigor**: Match the qualification effort to the criteria level
4. **Complete**: Don't skip activities required by the criteria level
5. **Practical**: Consider the tool category when defining verification approaches

## SUCCESS METRICS:

✅ All TOR elements defined and documented
✅ Qualification activities mapped to criteria level
✅ Verification strategy defined with rationale for each method
✅ Test strategy defined (for CR-3, CR-4, CR-5)
✅ Configuration management approach defined
✅ Problem reporting approach defined
✅ TQP section populated in qualification report
✅ User has reviewed and confirmed the TQP
✅ Frontmatter updated with `stepsCompleted: [1, 2, 3]`

## FAILURE MODES:

❌ Defining activities not required by the criteria level
❌ Missing activities required by the criteria level
❌ Not defining TOR before planning verification
❌ Selecting verification methods inappropriate for the tool category
❌ Proceeding without user confirmation of the TQP
❌ Not updating frontmatter progress

❌ **CRITICAL**: Reading only partial step file - leads to incomplete TQP
❌ **CRITICAL**: Creating a TQP that doesn't match the criteria level
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file

## NEXT STEP:

After user confirms the TQP and selects [C] to continue, load `./step-04-execute.md` to execute qualification tests and analysis.