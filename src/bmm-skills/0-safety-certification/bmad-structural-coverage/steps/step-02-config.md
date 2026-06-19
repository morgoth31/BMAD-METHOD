# Step 2: Configure Coverage Analysis

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: ALWAYS read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure the entire file is read and understood before proceeding
- ✅ ALWAYS treat this as collaborative analysis between certification peers
- 📋 YOU ARE A FACILITATOR, not a content generator
- 💬 FOCUS on configuration only - don't look ahead to future steps
- ⚠️ ABSOLUTELY NO TIME ESTIMATES

## EXECUTION PROTOCOLS:

- 🎯 Show your analysis before taking any action
- 💾 Update document frontmatter and append configuration section
- 📖 Set up frontmatter `stepsCompleted: [1, 2]` before loading next step
- 🚫 FORBIDDEN to load next step until configuration is complete and user confirms

## CONTEXT BOUNDARIES:

- Variables from workflow.md and step-01 are available in memory
- Previous context = what's in output document + frontmatter
- Don't assume knowledge from other steps
- Configuration decisions made here are binding for remaining steps

## YOUR TASK:

Configure the structural coverage analysis by identifying the target DAL, selecting appropriate coverage tools, and configuring instrumentation settings. This step establishes the analysis parameters that will drive all subsequent coverage collection and gap analysis.

## CONFIGURATION SEQUENCE:

### 1. Confirm Design Assurance Level

Based on the DAL discovered in step-01, confirm the coverage requirement:

| DAL Level | Coverage Type | DO-178C Objective | Pass Criteria |
|-----------|--------------|-------------------|---------------|
| A | MCDC | Modified Condition/Decision Coverage | Every condition independently affects outcome, every entry/point taken |
| B | DC | Decision Coverage | Every decision outcome taken (True/False) |
| C | SC | Statement Coverage | Every statement executed at least once |
| D | SC | Statement Coverage | Every statement executed at least once |

Ask the user to confirm the target DAL. If multiple modules have different DALs, document each module's target coverage type.

### 2. Select Coverage Tool

Collaboratively select a coverage analysis tool:

**Common Options:**
- **gcov / lcov** — GCC/Clang-based, statement and branch coverage
- **VectorCAST** — DO-178C qualified, MCDC support
- **LDRA Testbed** — DO-178C qualified, full MCDC analysis
- **IBM Rational Test RealTime** — Qualified for safety-critical
- **BullseyeCoverage** — Decision and condition coverage
- **Custom instrumentation** — For specialized targets

Ask the user:
- What coverage tool is currently in use or planned?
- Is the tool DO-178C qualified (required for DAL A/B)?
- What tool output formats are available?

### 3. Configure Instrumentation

Determine instrumentation approach:

**Instrumentation Questions:**
- Which source modules/components require coverage analysis?
- Are there any modules excluded from coverage (e.g., third-party, COTS)?
- What is the target execution environment (host, target, simulator)?
- Is on-target coverage measurement required?
- What coverage collection mode: unit test, integration test, system test, or all?

**Configuration Decisions to Document:**
- Target DAL per module (if mixed DALs)
- Coverage tool and version
- Instrumentation scope (modules/files to instrument)
- Exclusions (COTS, dead code, unreachable code)
- Collection mode(s)
- Output format and location

### 4. Update Document

Append a **Coverage Configuration** section to the coverage report containing:

```markdown
## Coverage Configuration

### Target Design Assurance Level
- **Primary DAL:** [DAL level]
- **Coverage Type Required:** [SC/DC/MCDC]
- **DO-178C Objective:** [objective number and description]

### Modules Under Analysis
| Module | DAL | Coverage Type | Tool | Notes |
|--------|-----|--------------|------|-------|

### Coverage Tool
- **Tool:** [name and version]
- **DO-178C Qualified:** [Yes/No]
- **Qualification Kit Available:** [Yes/No]

### Instrumentation Scope
- **Included:** [list of modules/files]
- **Excluded:** [list of modules/files with justification]
- **Collection Mode:** [unit/integration/system/all]
- **Target Environment:** [host/target/simulator]
```

### 5. Confirm Configuration with User

Present the complete configuration to the user for review and approval.

"[C] Continue to coverage analysis"

## SUCCESS METRICS:

✅ Target DAL confirmed and coverage type identified per module
✅ Coverage tool selected and qualification status documented
✅ Instrumentation scope defined with explicit inclusions and exclusions
✅ Collection mode and target environment specified
✅ Configuration section appended to coverage report
✅ User confirmed all configuration decisions

## FAILURE MODES:

❌ Proceeding without confirming DAL and coverage type
❌ Selecting a non-qualified tool for DAL A/B without documenting justification
❌ Not documenting excluded modules with proper justification
❌ Not specifying collection mode — leads to incomplete coverage data
❌ Not getting user confirmation before proceeding

❌ **CRITICAL**: Reading only partial step file - leads to incomplete configuration
❌ **CRITICAL**: Proceeding with 'C' without fully reading and understanding the next step file
❌ **CRITICAL**: Configuring analysis for wrong coverage type (e.g., SC when MCDC is required)

## NEXT STEP:

After user selects [C] to continue, load `./step-03-analyze.md` to run coverage analysis and collect results per module/component.