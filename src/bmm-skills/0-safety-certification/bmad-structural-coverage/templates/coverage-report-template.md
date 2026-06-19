---
title: Structural Coverage Analysis Report
created: {{date}}
status: draft
workflow: bmad-structural-coverage
stepsCompleted: []
inputDocuments: []
---

# Structural Coverage Analysis Report

## Coverage Configuration

<!-- Populated in step-02 -->

### Target Design Assurance Level
- **Primary DAL:** [To be determined]
- **Coverage Type Required:** [To be determined]
- **DO-178C Objective:** [To be determined]

### Modules Under Analysis
| Module | DAL | Coverage Type | Tool | Notes |
|--------|-----|--------------|------|-------|

### Coverage Tool
- **Tool:** [To be determined]
- **DO-178C Qualified:** [To be determined]
- **Qualification Kit Available:** [To be determined]

### Instrumentation Scope
- **Included:** [To be determined]
- **Excluded:** [To be determined]
- **Collection Mode:** [To be determined]
- **Target Environment:** [To be determined]

---

## Results Summary

<!-- Populated in step-03 -->

### Coverage Results by Module

| Module | DAL | Coverage Type | Total Elements | Covered Elements | Coverage % | Status |
|--------|-----|--------------|---------------|-----------------|-----------|--------|

### Overall Coverage Summary
- **Total modules analyzed:** [To be determined]
- **Modules passing coverage target:** [To be determined]
- **Modules failing coverage target:** [To be determined]
- **Overall project coverage:** [To be determined]
- **Target coverage:** [To be determined]

### Raw Coverage Data References

| File | Module | Collection Mode | Checksum | Date |
|------|--------|----------------|----------|------|

---

## Uncovered Code Analysis

<!-- Populated in step-04 -->

### Gap Classification

| ID | Module | File:Line | Coverage Type | Category | Description | Justification | Alternative Verification |
|----|--------|-----------|--------------|----------|-------------|---------------|--------------------------|

### Gap Severity Assessment

| Severity | Count | Description |
|----------|-------|-------------|
| Critical | | MCDC gaps in DAL A modules |
| High | | DC gaps in DAL B modules |
| Medium | | SC gaps in DAL C modules |
| Low | | SC gaps in DAL D modules |

---

## Compliance Assessment

<!-- Populated in step-05 -->

### Overall Determination: [To be determined]

**Summary:**
- Total modules analyzed: [To be determined]
- Modules passing: [To be determined]
- Modules passing with justification: [To be determined]
- Modules failing: [To be determined]

**DO-178C Compliance:**
- [ ] All structural coverage objectives met for assigned DAL
- [ ] All uncovered code justified and accepted
- [ ] Alternative verification methods documented for non-deterministic code
- [ ] Coverage data integrity verified (checksums match)

**Remediation Recommendations:**

| Gap ID | Module | Gap Description | Recommended Action | Priority | Estimated Complexity |
|--------|--------|-----------------|-------------------|----------|---------------------|

**Open Items:**
- [To be determined]