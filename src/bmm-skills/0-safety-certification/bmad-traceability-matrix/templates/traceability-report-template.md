---
title: Traceability Matrix Report
created: {{date}}
status: draft
workflow: bmad-traceability-matrix
stepsCompleted: []
inputDocuments: []
---

# Traceability Matrix Report

## Forward Traceability

<!-- Populated in step-02 -->

### Hazard → Safety Requirement → Software Requirement → Design → Code → Test Case → Test Result

| Hazard | Safety Req | SW Requirement | Design Element | Source Code | Test Case | Test Result | Status |
|--------|-----------|---------------|---------------|-------------|-----------|-------------|--------|

### Forward Trace Completeness

- [ ] Every hazard → at least one safety requirement
- [ ] Every safety requirement → at least one software requirement
- [ ] Every software requirement → at least one design element
- [ ] Every design element → at least one source code unit
- [ ] Every source code unit → at least one test case
- [ ] Every test case → at least one test result

### Potential Forward Orphans

| Orphan Type | Artifact ID | Description |
|------------|-------------|-------------|

---

## Reverse Traceability

<!-- Populated in step-03 -->

### Test Result → Test Case → Source Code → Design → SW Requirement → Safety Req → Hazard

| Test Result | Test Case | Source Code | Design Element | SW Requirement | Safety Req | Hazard | Status |
|-------------|-----------|-------------|---------------|---------------|-----------|--------|--------|

### Reverse Trace Completeness

- [ ] Every test result → a test case
- [ ] Every test case → source code
- [ ] Every source code unit → a design element
- [ ] Every design element → a software requirement
- [ ] Every software requirement → a safety requirement
- [ ] Every safety requirement → a hazard

### Potential Reverse Orphans

| Orphan Type | Artifact ID | Description |
|------------|-------------|-------------|

### Trace Consistency Issues

| Issue Type | Forward Reference | Reverse Reference | Description |
|-----------|-----------------|------------------|-------------|

### Hazard Coverage via Reverse Trace

| Hazard | Traced Test Results | Test Status | Coverage |
|--------|--------------------|------------|---------|

---

## Orphan Analysis

<!-- Populated in step-04 -->

### Forward Orphans (Top-Down)

| ID | Orphan Type | Artifact ID | Artifact Name | Classification | Severity | Justification | Remediation |
|----|-----------|-------------|---------------|---------------|----------|---------------|-------------|

### Reverse Orphans (Bottom-Up)

| ID | Orphan Type | Artifact ID | Artifact Name | Classification | Severity | Justification | Remediation |
|----|-----------|-------------|---------------|---------------|----------|---------------|-------------|

### Orphan Summary

| Classification | Forward | Reverse | Total |
|---------------|---------|---------|-------|
| Genuine Orphan | | | |
| Documentation Gap | | | |
| Scope Decision | | | |
| Error | | | |
| **Total** | | | |

---

## Coverage Statistics

<!-- Populated in step-05 -->

### Per-Layer Traceability Coverage

| Layer | Total Artifacts | Forward-Traced | Reverse-Traced | Bidirectional | Forward % | Reverse % | Bidirectional % |
|-------|---------------|---------------|---------------|--------------|-----------|-----------|----------------|
| Hazards | | | | | | | |
| Safety Requirements | | | | | | | |
| SW Requirements | | | | | | | |
| Design Elements | | | | | | | |
| Source Code | | | | | | | |
| Test Cases | | | | | | | |
| Test Results | | | | | | | |

### End-to-End Traceability

- **Complete chains (Hazard → Test Result):** [To be determined]
- **Partial chains (missing one layer):** [To be determined]
- **Broken chains (missing multiple layers):** [To be determined]
- **Untraced hazards:** [To be determined]

### Remediation Recommendations

| Orphan ID | Type | Artifact | Recommended Action | Priority | Effort |
|-----------|------|----------|-------------------|----------|--------|

---

## Compliance Assessment

<!-- Populated in step-05 -->

### Overall Traceability Determination: [To be determined]

**DO-178C Traceability Compliance:**
- [ ] Complete forward traceability (hazards → test results)
- [ ] Complete reverse traceability (test results → hazards)
- [ ] All orphans classified and justified
- [ ] Genuine orphans have remediation plans
- [ ] Scope decisions documented with DER approval
- [ ] Bidirectional consistency verified

**Open Items:**
- [To be determined]