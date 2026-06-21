---
title: Tool Qualification Report
created: {{date}}
stepsCompleted: []
status: draft
tool_name: ""
tool_version: ""
tool_category: ""
criteria_level: ""
dal_level: []
inputDocuments: []
---

# Tool Qualification Report

## Document Information

| Field | Value |
|-------|-------|
| **Project** | {{project_name}} |
| **Tool Name** | {{tool_name}} |
| **Tool Version** | {{tool_version}} |
| **Tool Category** | {{tool_category}} |
| **Created** | {{date}} |
| **Last Updated** | {{date}} |
| **Applicable Standards** | DO-178C, DO-330/ED-215 |
| **DAL Impact** | {{dal_level}} |
| **Qualification Criteria** | {{criteria_level}} |

---

## 1. Tool Identification

### 1.1 Tool Description

| Field | Value |
|-------|-------|
| **Tool Name** | {{tool_name}} |
| **Vendor/Developer** | {{vendor}} |
| **Version** | {{tool_version}} |
| **Category** | {{COTS / Bespoke / Open-Source}} |
| **Description** | {{description}} |

### 1.2 Tool Usage

| Field | Value |
|-------|-------|
| **Usage Type** | {{Verification / Development}} |
| **Purpose** | {{purpose}} |
| **DAL Impact** | {{DAL level(s)}} |
| **Certification Credit** | {{Yes / No}} |
| **Output Verification** | {{Yes / No — how output is verified}} |

### 1.3 Tool Environment

| Field | Value |
|-------|-------|
| **Host Platform** | {{host_os_and_hardware}} |
| **Target Platform** | {{target_platform}} |
| **Integration Points** | {{integration_description}} |

---

## 2. Qualification Criteria Determination

### 2.1 Criteria Level

| Field | Value |
|-------|-------|
| **Criteria Level** | CR-{{n}} |
| **Description** | {{criteria_description}} |
| **Justification** | {{decision_traceability}} |

### 2.2 Decision Traceability

| Decision Point | Question | Answer | Rationale |
|---------------|----------|--------|-----------|
| 1 | Is the tool a development tool? | {{Yes/No}} | {{rationale}} |
| 2 | Is the tool output used for certification credit? | {{Yes/No}} | {{rationale}} |
| 3 | Is the tool output independently verified? | {{Yes/No}} | {{rationale}} |
| 4 | Could tool errors affect airworthiness? | {{Yes/No}} | {{rationale}} |

### 2.3 Tool Category Implications

| Category | Implication |
|----------|-------------|
| {{COTS / Bespoke / Open-Source}} | {{implication_description}} |

### 2.4 Qualification Rigor by DAL

| DAL | Rigor Level | Additional Requirements |
|-----|-------------|-------------------------|
| {{dal_level}} | {{rigor_level}} | {{requirements}} |

### 2.5 Applicable DO-330 Objectives

| Objective ID | Objective Description | Applicable | Satisfied |
|-------------|----------------------|------------|-----------|
| | | | |

---

## 3. Tool Qualification Plan

### 3.1 Tool Operational Requirements

| TOR ID | Requirement | Priority | Verification Method | Status |
|--------|-------------|----------|---------------------|--------|
| TOR-01 | {{functional_requirement}} | {{priority}} | {{method}} | {{status}} |
| TOR-02 | {{performance_requirement}} | {{priority}} | {{method}} | {{status}} |
| TOR-03 | {{interface_requirement}} | {{priority}} | {{method}} | {{status}} |
| TOR-04 | {{environment_requirement}} | {{priority}} | {{method}} | {{status}} |
| TOR-05 | {{safety_requirement}} | {{priority}} | {{method}} | {{status}} |
| TOR-06 | {{operational_constraint}} | {{priority}} | {{method}} | {{status}} |
| TOR-07 | {{data_requirement}} | {{priority}} | {{method}} | {{status}} |

### 3.2 Qualification Activities

| Activity ID | Activity Description | Criteria Requirement | Method | Status |
|------------|---------------------|--------------------|--------|--------|
| | | | | |

### 3.3 Verification Strategy

| Method | Applicable Activities | Rationale |
|--------|----------------------|-----------|
| {{Testing / Analysis / Review / Demonstration}} | {{activities}} | {{rationale}} |

### 3.4 Test Strategy

| Test Category | Description | Coverage Target | Status |
|--------------|-------------|----------------|--------|
| Normal Range | {{description}} | {{target}} | {{status}} |
| Robustness | {{description}} | {{target}} | {{status}} |
| Structural Coverage | {{description}} | {{target}} | {{status}} |
| Integration | {{description}} | {{target}} | {{status}} |

### 3.5 Configuration Management

| CM Item | Version | Baseline | Status |
|---------|---------|----------|--------|
| Tool | {{version}} | {{baseline}} | {{status}} |
| Qualification Environment | {{version}} | {{baseline}} | {{status}} |
| Test Assets | {{version}} | {{baseline}} | {{status}} |

### 3.6 Problem Reporting

| Field | Value |
|-------|-------|
| **Anomaly Reporting Process** | {{process_description}} |
| **Impact Assessment Process** | {{process_description}} |
| **Re-qualification Criteria** | {{criteria_description}} |

---

## 4. Qualification Execution Results

### 4.1 Test Results Summary

| Metric | Value |
|--------|-------|
| **Total Test Cases** | 0 |
| **PASS** | 0 |
| **FAIL** | 0 |
| **CONDITIONAL PASS** | 0 |
| **NOT APPLICABLE** | 0 |

### 4.2 Test Results Detail

| Test ID | Test Description | TOR Reference | Result | Evidence |
|---------|-----------------|--------------|--------|----------|
| | | | | |

### 4.3 Coverage Analysis

| Coverage Type | Achieved | Target | Status |
|--------------|----------|--------|--------|
| Requirements Coverage | 0% | 100% | — |
| Statement Coverage | 0% | {{target}} | — |
| Decision Coverage | 0% | {{target}} | — |
| MC/DC Coverage | 0% | {{target}} | — |

### 4.4 Anomaly Report

| Anomaly ID | Related Test | Related TOR | Description | Severity | Resolution |
|-----------|-------------|------------|-------------|----------|------------|
| | | | | | |

### 4.5 TOR Verification Matrix

| TOR ID | Requirement | Verification Method | Evidence | Status |
|--------|-------------|--------------------|----------|--------|
| TOR-01 | | | | |
| TOR-02 | | | | |
| TOR-03 | | | | |
| TOR-04 | | | | |
| TOR-05 | | | | |
| TOR-06 | | | | |
| TOR-07 | | | | |

---

## 5. Independent Verification

### 5.1 Independence Assessment

| Field | Value |
|-------|-------|
| **Independent Verifier** | {{verifier_name}} |
| **Independence Level** | {{level}} |
| **Independence Rationale** | {{rationale}} |

### 5.2 Review Findings

| Finding ID | Category | Description | Severity | Resolution |
|-----------|----------|-------------|----------|------------|
| | | | | |

### 5.3 Validation Results

| Validation Check | Result | Evidence |
|-----------------|--------|----------|
| Completeness | — | |
| Correctness | — | |
| Consistency | — | |
| Traceability | — | |

### 5.4 Coverage Evaluation

| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| TOR Requirements Verified | 0/{total} | 100% | — |
| TOR Requirements PASS | 0/{total} | 100% | — |
| Structural Coverage | 0% | {{target}} | — |

### 5.5 Verification Conclusion

| Field | Value |
|-------|-------|
| **Overall Assessment** | {{ADEQUATE / ADEQUATE WITH RESERVATIONS / NOT ADEQUATE}} |
| **Rationale** | {{rationale}} |

---

## 6. Qualification Conclusion

### 6.1 Qualification Statement

| Field | Value |
|-------|-------|
| **Tool** | {{tool_name}} version {{tool_version}} |
| **Criteria Level** | CR-{{n}} — {{description}} |
| **DAL Impact** | DAL-{{level}} |
| **Conclusion** | {{QUALIFIED / QUALIFIED WITH LIMITATIONS / NOT QUALIFIED}} |

### 6.2 Qualification Scope

**Functions Qualified:**
- {{qualified_function_1}}
- {{qualified_function_2}}

**Environment Qualified:**
- Host: {{host_environment}}
- Target: {{target_environment}}

**Limitations:**
- {{limitation_1}}
- {{limitation_2}}

**Exclusions:**
- {{exclusion_1}}
- {{exclusion_2}}

### 6.3 Residual Risks

| Risk | Severity | Mitigation | Status |
|------|----------|------------|--------|
| | | | |

### 6.4 Conditions for Re-qualification

- Tool version changes
- Host environment changes
- New tool function usage
- Change in DAL impact
- Anomaly corrections affecting qualified functions

---

## 7. PSAC Summary

### 7.1 Tool Qualification Summary

| Field | Value |
|-------|-------|
| **Tool Name** | {{tool_name}} |
| **Tool Version** | {{tool_version}} |
| **Tool Category** | {{COTS / Bespoke / Open-Source}} |
| **Usage Type** | {{Verification / Development}} |
| **Qualification Criteria** | CR-{{n}} — {{description}} |
| **DAL Impact** | DAL-{{level}} |
| **Certification Credit** | {{Yes/No — credit claimed}} |
| **Qualification Conclusion** | {{QUALIFIED / QUALIFIED WITH LIMITATIONS / NOT QUALIFIED}} |
| **Report Reference** | {{document_reference}} |

### 7.2 Applicable DO-330 Objectives

| Objective | Status | Evidence Reference |
|-----------|--------|--------------------|
| | | |

### 7.3 Key Limitations and Conditions

- {{limitation_1}}
- {{limitation_2}}

---

## 8. Next Steps

### 8.1 Ongoing Monitoring

- Tool problem reporting process
- Periodic review of tool performance
- Monitoring of tool vendor issue reports

### 8.2 Re-qualification Triggers

- Tool version upgrade
- Host environment change
- New tool function usage
- Change in DAL impact
- Anomaly correction affecting qualified functions

### 8.3 Configuration Management

- Tool version control
- Qualification data archival
- Change control for qualification data

### 8.4 Integration with Project V&V

- How qualified tool output is used in project verification
- Independent verification of tool output (for CR-1 and CR-2)
- Tool usage procedures and guidelines

---

## 9. Revision History

| Version | Date | Author | Description |
|---------|------|--------|-------------|
| 0.1 | {{date}} | {{author}} | Initial Tool Qualification Report created |