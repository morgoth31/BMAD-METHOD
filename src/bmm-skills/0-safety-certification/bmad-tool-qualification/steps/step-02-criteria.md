# Step 2: Determine Qualification Criteria

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action - partial understanding leads to incorrect criteria selection
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative discovery between tool qualification peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on criteria determination only - planning happens in the next step
- 🚫 FORBIDDEN to assign a criteria level without thorough analysis
- ⚠️ ABSOLUTELY NO TIME ESTIMATES

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- 💾 Update document and frontmatter as you determine criteria
- 📖 Set up frontmatter `stepsCompleted: [1, 2]` before loading next step
- 🚫 FORBIDDEN to load next step until criteria determination is complete

## CONTEXT BOUNDARIES:

- Variables from workflow.md are available in memory
- Previous context = what's in output document + frontmatter + loaded input documents
- Tool identification from step-01 is the foundation for this step
- Don't re-identify the tool in this step

## YOUR TASK:

Determine the DO-330 qualification criteria level for the tool identified in step-01, based on its usage classification, DAL impact, and certification credit usage.

## CRITERIA DETERMINATION SEQUENCE:

### 1. Load Qualification Criteria Reference

Load the DO-330 qualification criteria from `../data/do330-qualification-criteria.csv` to understand the five criteria levels (CR-1 through CR-5).

### 2. Apply the Qualification Criteria Decision Tree

Based on the tool classification from step-01, walk through the DO-330 criteria decision tree with the user:

**Decision Tree:**

```
Is the tool a development tool (generates code directly incorporated into airborne software)?
├── YES → CR-4 (Development tool — highest qualification effort)
└── NO → Is the tool a verification tool?
    ├── YES → Does the tool's output get used for certification credit?
    │   ├── YES → Is the tool's output independently verified for each use?
    │   │   ├── YES → CR-1 (Lowest effort — output verified each time)
    │   │   └── NO → Could tool errors affect airworthiness?
    │   │       ├── NO → CR-2 (Medium effort — errors don't affect airworthiness)
    │   │       └── YES → CR-5 (High effort — automates verification, used for credit)
    │   └── NO → Tool is not qualified (no certification credit claimed)
    └── NO → Re-evaluate tool classification
```

<critical>Walk through each decision point with the user. The criteria level directly determines the rigor of qualification activities. Do not assign a criteria level without user agreement on each decision point.</critical>

### 3. Determine Tool Category

Confirm the tool category with the user:

| Category | Description | Qualification Implications |
|----------|-------------|---------------------------|
| **COTS** | Commercial Off-The-Shelf tool with limited access to source/design | Requires black-box testing; vendor qualification data may be leveraged; tool operational requirements must be defined |
| **Bespoke** | Custom-built tool with full access to source and design | Full white-box testing possible; all lifecycle data can be produced |
| **Open-Source** | Open-source tool with source available but no single vendor | Source analysis possible; requires additional scrutiny for configuration management and provenance |

### 4. Determine DAL-Based Qualification Rigor

Based on the DAL impact from step-01, determine the level of qualification rigor:

| DAL | Qualification Rigor | Additional Requirements |
|-----|---------------------|------------------------|
| **A** | Maximum | All applicable objectives; structural coverage at MC/DC level; independent verification |
| **B** | High | Most objectives; structural coverage at decision coverage level; independent verification |
| **C** | Moderate | Reduced objectives; statement coverage; some independent verification |
| **D** | Low | Minimal objectives; basic verification |

### 5. Map Criteria to DO-330 Objectives

Based on the determined criteria level and DAL, identify which DO-330 objectives apply:

**CR-1 (Lowest):**
- Limited objectives — primarily Tool Operational Requirements (TOR)
- Focus on demonstrating that output is verified for each use

**CR-2 (Medium):**
- TOR and some verification objectives
- Focus on demonstrating that tool errors won't affect airworthiness

**CR-3 (Moderate-High):**
- TOR, verification, and configuration management objectives
- Focus on demonstrating correct tool behavior for safety-relevant outputs

**CR-4 (Highest — Development Tools):**
- All applicable DO-330 objectives
- Full lifecycle data requirements
- Equivalent rigor to the software development process at the same DAL

**CR-5 (High — Automated Verification):**
- Most DO-330 objectives
- Focus on demonstrating that the tool correctly automates verification processes
- Output used for certification credit must be trustworthy

### 6. Document the Criteria Determination

Update the Tool Qualification Report with the Criteria Determination section:

- **Criteria Level**: CR-{n} with justification
- **Tool Category**: COTS / Bespoke / Open-Source with implications
- **DAL Impact**: DAL level with qualification rigor implications
- **Applicable DO-330 Objectives**: List of objectives that must be satisfied
- **Decision Traceability**: Record each decision point and rationale

<critical>Discuss each element with the user and get agreement before documenting. The criteria determination will drive all subsequent qualification activities.</critical>

### 7. Criteria Determination Summary

Report to the user:

**Qualification Criteria Determined:**
- Criteria Level: CR-{n}
- Justification: {reasoning from decision tree}
- Tool Category: {COTS/Bespoke/Open-Source}
- DAL Impact: {DAL level} → {rigor level} rigor
- Applicable DO-330 Objectives: {count} objectives identified
- Estimated Qualification Effort: {low/medium/high/very_high}

Confirm with the user that this criteria determination is correct and complete before proceeding.

## CRITERIA DETERMINATION RULES:

1. **Be Conservative**: When in doubt, assign the higher criteria level (more rigorous qualification)
2. **Be Specific**: Document exact decision rationale — not just "CR-3" but why CR-3
3. **Be Complete**: Every decision point in the tree must be addressed
4. **DAL Matters**: The same criteria level requires more effort at DAL-A than DAL-D
5. **Category Matters**: COTS tools have different qualification paths than bespoke tools

## SUCCESS METRICS:

✅ DO-330 criteria CSV loaded and understood
✅ Decision tree walked through with user agreement at each point
✅ Criteria level assigned with clear justification
✅ Tool category confirmed with qualification implications
✅ DAL impact mapped to qualification rigor
✅ Applicable DO-330 objectives identified
✅ Criteria determination documented in report
✅ User has reviewed and confirmed the criteria determination
✅ Frontmatter updated with `stepsCompleted: [1, 2]`

## FAILURE MODES:

❌ Assigning criteria level without walking through decision tree
❌ Not considering DAL impact on qualification rigor
❌ Not documenting decision rationale
❌ Not differentiating between COTS and bespoke tool qualification paths
❌ Proceeding without user confirmation of criteria level
❌ Not updating frontmatter progress

❌ **CRITICAL**: Reading only partial step file - leads to incorrect criteria determination
❌ **CRITICAL**: Assigning a lower criteria level than warranted — undermines certification
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file

## NEXT STEP:

After user confirms the criteria determination and selects [C] to continue, load `./step-03-plan.md` to create the Tool Qualification Plan.