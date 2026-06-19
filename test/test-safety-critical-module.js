/**
 * Safety-Critical Module Structure Tests
 *
 * Tests that the 0-safety-certification module has all required skills,
 * agents, workflows, steps, templates, and data files properly structured.
 *
 * Usage: node test/test-safety-critical-module.js
 * Exit codes: 0 = all tests pass, 1 = test failures
 */

const fs = require('node:fs');
const path = require('node:path');

// ANSI color codes
const colors = {
  reset: '\u001B[0m',
  green: '\u001B[32m',
  red: '\u001B[31m',
  cyan: '\u001B[36m',
  dim: '\u001B[2m',
  yellow: '\u001B[33m',
};

const MODULE_ROOT = path.join(__dirname, '..', 'src', 'bmm-skills', '0-safety-certification');

let totalTests = 0;
let passedTests = 0;
const failures = [];

function test(name, fn) {
  totalTests++;
  try {
    fn();
    passedTests++;
    console.log(`  ${colors.green}\u2713${colors.reset} ${name}`);
  } catch (error) {
    console.log(`  ${colors.red}\u2717${colors.reset} ${name} ${colors.red}${error.message}${colors.reset}`);
    failures.push({ name, message: error.message });
  }
}

function assertExists(filePath, label) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing: ${label} at ${filePath}`);
  }
}

function assertHasSkillMd(dirPath, skillName) {
  const skillPath = path.join(dirPath, 'SKILL.md');
  assertExists(skillPath, `SKILL.md for ${skillName}`);
  const content = fs.readFileSync(skillPath, 'utf-8');
  if (!content.includes(`name: ${skillName}`)) {
    throw new Error(`SKILL.md for ${skillName} does not contain frontmatter name field`);
  }
}

function assertHasWorkflowMd(dirPath) {
  const workflowPath = path.join(dirPath, 'workflow.md');
  assertExists(workflowPath, `workflow.md`);
  const content = fs.readFileSync(workflowPath, 'utf-8');
  if (!content.includes('Goal:') && !content.includes('**Goal:**')) {
    throw new Error('workflow.md does not contain a Goal section');
  }
}

function assertHasSteps(dirPath, minSteps) {
  const stepsDir = path.join(dirPath, 'steps');
  assertExists(stepsDir, 'steps/ directory');
  const stepFiles = fs.readdirSync(stepsDir).filter(f => f.endsWith('.md'));
  if (stepFiles.length < minSteps) {
    throw new Error(`Expected at least ${minSteps} step files, found ${stepFiles.length}`);
  }
}

function assertHasTemplate(dirPath) {
  const templatesDir = path.join(dirPath, 'templates');
  assertExists(templatesDir, 'templates/ directory');
  const templates = fs.readdirSync(templatesDir).filter(f => f.endsWith('.md'));
  if (templates.length === 0) {
    throw new Error('No template files found in templates/');
  }
}

function assertStepHasSections(dirPath, stepFile) {
  const stepPath = path.join(dirPath, 'steps', stepFile);
  assertExists(stepPath, stepFile);
  const content = fs.readFileSync(stepPath, 'utf-8');
  const requiredSections = ['MANDATORY EXECUTION RULES', 'YOUR TASK', 'SUCCESS METRICS'];
  for (const section of requiredSections) {
    if (!content.includes(section)) {
      throw new Error(`${stepFile} missing required section: ${section}`);
    }
  }
}

// ---------------------------------------------------------------------------
// Test Suite
// ---------------------------------------------------------------------------

console.log(`${colors.cyan}═══ Safety-Critical Module Structure Tests ═══${colors.reset}\n`);

// --- Module directory exists ---
console.log(`${colors.cyan}Module Directory:${colors.reset}`);
test('0-safety-certification directory exists', () => {
  assertExists(MODULE_ROOT, '0-safety-certification module');
});

// --- Agents ---
console.log(`\n${colors.cyan}Agents:${colors.reset}`);

const agents = [
  { dir: 'bmad-agent-safety-engineer', name: 'bmad-agent-safety-engineer', persona: 'Vera' },
  { dir: 'bmad-agent-qa-vv-manager', name: 'bmad-agent-qa-vv-manager', persona: 'Quentin' },
  { dir: 'bmad-agent-config-manager', name: 'bmad-agent-config-manager', persona: 'Claire' },
  { dir: 'bmad-agent-cert-liaison', name: 'bmad-agent-cert-liaison', persona: 'Rick' },
];

for (const agent of agents) {
  const agentDir = path.join(MODULE_ROOT, agent.dir);
  test(`${agent.persona} agent has SKILL.md with correct name`, () => {
    assertHasSkillMd(agentDir, agent.name);
  });
  test(`${agent.persona} agent has Capabilities table`, () => {
    const content = fs.readFileSync(path.join(agentDir, 'SKILL.md'), 'utf-8');
    if (!content.includes('## Capabilities')) {
      throw new Error('Missing Capabilities section');
    }
  });
  test(`${agent.persona} agent has On Activation section`, () => {
    const content = fs.readFileSync(path.join(agentDir, 'SKILL.md'), 'utf-8');
    if (!content.includes('## On Activation')) {
      throw new Error('Missing On Activation section');
    }
  });
  test(`${agent.persona} agent has Principles section`, () => {
    const content = fs.readFileSync(path.join(agentDir, 'SKILL.md'), 'utf-8');
    if (!content.includes('## Principles')) {
      throw new Error('Missing Principles section');
    }
  });
}

// --- Workflows ---
console.log(`\n${colors.cyan}Workflows:${colors.reset}`);

const workflows = [
  { dir: 'bmad-hazard-analysis', name: 'bmad-hazard-analysis', minSteps: 7, hasData: true },
  { dir: 'bmad-certification-plan', name: 'bmad-certification-plan', minSteps: 6, hasData: true },
  { dir: 'bmad-safety-requirements', name: 'bmad-safety-requirements', minSteps: 6, hasData: true },
  { dir: 'bmad-traceability-setup', name: 'bmad-traceability-setup', minSteps: 4, hasData: false },
  { dir: 'bmad-safety-case', name: 'bmad-safety-case', minSteps: 5, hasData: false },
  { dir: 'bmad-compliance-matrix', name: 'bmad-compliance-matrix', minSteps: 5, hasData: true },
  { dir: 'bmad-gate-review', name: 'bmad-gate-review', minSteps: 5, hasData: true },
  { dir: 'bmad-structural-coverage', name: 'bmad-structural-coverage', minSteps: 5, hasData: true },
  { dir: 'bmad-traceability-matrix', name: 'bmad-traceability-matrix', minSteps: 5, hasData: false },
];

for (const wf of workflows) {
  const wfDir = path.join(MODULE_ROOT, wf.dir);
  test(`${wf.name} has SKILL.md`, () => {
    assertHasSkillMd(wfDir, wf.name);
  });
  test(`${wf.name} has workflow.md with Goal`, () => {
    assertHasWorkflowMd(wfDir);
  });
  test(`${wf.name} has at least ${wf.minSteps} step files`, () => {
    assertHasSteps(wfDir, wf.minSteps);
  });
  test(`${wf.name} has template files`, () => {
    assertHasTemplate(wfDir);
  });
  // Check first step has required sections
  test(`${wf.name} step-01 has BMAD sections`, () => {
    const stepsDir = path.join(wfDir, 'steps');
    const firstStep = fs.readdirSync(stepsDir).filter(f => f.startsWith('step-01')).sort()[0];
    if (!firstStep) throw new Error('No step-01 file found');
    assertStepHasSections(wfDir, firstStep);
  });
  if (wf.hasData) {
    test(`${wf.name} has data files`, () => {
      const dataDir = path.join(wfDir, 'data');
      assertExists(dataDir, 'data/ directory');
      const dataFiles = fs.readdirSync(dataDir);
      if (dataFiles.length === 0) {
        throw new Error('No data files found in data/');
      }
    });
  }
}

// --- Module-help.csv entries ---
console.log(`\n${colors.cyan}Module-Help CSV:${colors.reset}`);

const csvPath = path.join(__dirname, '..', 'src', 'bmm-skills', 'module-help.csv');
test('module-help.csv contains safety-critical entries', () => {
  assertExists(csvPath, 'module-help.csv');
  const content = fs.readFileSync(csvPath, 'utf-8');
  const requiredSkills = [
    'bmad-agent-safety-engineer',
    'bmad-agent-qa-vv-manager',
    'bmad-agent-config-manager',
    'bmad-agent-cert-liaison',
    'bmad-hazard-analysis',
    'bmad-certification-plan',
    'bmad-safety-requirements',
    'bmad-traceability-setup',
    'bmad-safety-case',
    'bmad-compliance-matrix',
    'bmad-gate-review',
    'bmad-structural-coverage',
    'bmad-traceability-matrix',
  ];
  for (const skill of requiredSkills) {
    if (!content.includes(skill)) {
      throw new Error(`module-help.csv missing entry for: ${skill}`);
    }
  }
});

// --- CSV data file validation ---
console.log(`\n${colors.cyan}Data Files Validation:${colors.reset}`);

test('hazard-severity-levels.csv has correct columns', () => {
  const csvFile = path.join(MODULE_ROOT, 'bmad-hazard-analysis', 'data', 'hazard-severity-levels.csv');
  assertExists(csvFile, 'hazard-severity-levels.csv');
  const content = fs.readFileSync(csvFile, 'utf-8');
  if (!content.includes('level') || !content.includes('name')) {
    throw new Error('CSV missing required columns: level, name');
  }
});

test('standards-objectives.csv has correct columns', () => {
  const csvFile = path.join(MODULE_ROOT, 'bmad-certification-plan', 'data', 'standards-objectives.csv');
  assertExists(csvFile, 'standards-objectives.csv');
  const content = fs.readFileSync(csvFile, 'utf-8');
  if (!content.includes('standard') || !content.includes('objective_id')) {
    throw new Error('CSV missing required columns: standard, objective_id');
  }
});

test('do178c-objectives.csv has DAL columns', () => {
  const csvFile = path.join(MODULE_ROOT, 'bmad-compliance-matrix', 'data', 'do178c-objectives.csv');
  assertExists(csvFile, 'do178c-objectives.csv');
  const content = fs.readFileSync(csvFile, 'utf-8');
  if (!content.includes('dal_a') || !content.includes('dal_b')) {
    throw new Error('CSV missing DAL columns');
  }
});

test('coverage-requirements.csv has DAL levels', () => {
  const csvFile = path.join(MODULE_ROOT, 'bmad-structural-coverage', 'data', 'coverage-requirements.csv');
  assertExists(csvFile, 'coverage-requirements.csv');
  const content = fs.readFileSync(csvFile, 'utf-8');
  if (!content.includes('dal_level') || !content.includes('coverage_type')) {
    throw new Error('CSV missing required columns: dal_level, coverage_type');
  }
});

test('gate-review-criteria.csv has gate types', () => {
  const csvFile = path.join(MODULE_ROOT, 'bmad-gate-review', 'data', 'gate-review-criteria.csv');
  assertExists(csvFile, 'gate-review-criteria.csv');
  const content = fs.readFileSync(csvFile, 'utf-8');
  if (!content.includes('gate_type') || !content.includes('criterion_id')) {
    throw new Error('CSV missing required columns: gate_type, criterion_id');
  }
});

test('risk-matrix.csv has severity and likelihood', () => {
  const csvFile = path.join(MODULE_ROOT, 'bmad-hazard-analysis', 'data', 'risk-matrix.csv');
  assertExists(csvFile, 'risk-matrix.csv');
  const content = fs.readFileSync(csvFile, 'utf-8');
  if (!content.includes('severity') && !content.includes('likelihood') && !content.includes('Catastrophic')) {
    throw new Error('risk-matrix.csv does not contain severity/likelihood data');
  }
});

test('sil-requirements.csv has SIL levels', () => {
  const csvFile = path.join(MODULE_ROOT, 'bmad-safety-requirements', 'data', 'sil-requirements.csv');
  assertExists(csvFile, 'sil-requirements.csv');
  const content = fs.readFileSync(csvFile, 'utf-8');
  if (!content.includes('sil_level')) {
    throw new Error('sil-requirements.csv missing sil_level column');
  }
});

// --- Existing workflow modifications ---
console.log(`\n${colors.cyan}Existing Workflow Safety Integration:${colors.reset}`);

test('PRD step-10 includes Safety & Reliability NFRs', () => {
  const stepPath = path.join(__dirname, '..', 'src', 'bmm-skills', '2-plan-workflows', 'bmad-create-prd', 'steps-c', 'step-10-nonfunctional.md');
  assertExists(stepPath, 'step-10-nonfunctional.md');
  const content = fs.readFileSync(stepPath, 'utf-8');
  if (!content.includes('Safety & Reliability')) {
    throw new Error('PRD step-10 does not include Safety & Reliability section');
  }
});

test('Architecture step-05 includes Safety Architecture Constraints', () => {
  const stepPath = path.join(__dirname, '..', 'src', 'bmm-skills', '3-solutioning', 'bmad-create-architecture', 'steps', 'step-05-patterns.md');
  assertExists(stepPath, 'step-05-patterns.md');
  const content = fs.readFileSync(stepPath, 'utf-8');
  if (!content.includes('Safety Architecture Constraints')) {
    throw new Error('Architecture step-05 does not include Safety Architecture Constraints');
  }
});

test('Implementation readiness includes Safety & Certification assessment', () => {
  const stepPath = path.join(__dirname, '..', 'src', 'bmm-skills', '3-solutioning', 'bmad-check-implementation-readiness', 'steps', 'step-06-final-assessment.md');
  assertExists(stepPath, 'step-06-final-assessment.md');
  const content = fs.readFileSync(stepPath, 'utf-8');
  if (!content.includes('Safety & Certification Readiness')) {
    throw new Error('Implementation readiness does not include Safety & Certification assessment');
  }
});

test('Dev story workflow includes safety-critical DoD checks', () => {
  const wfPath = path.join(__dirname, '..', 'src', 'bmm-skills', '4-implementation', 'bmad-dev-story', 'workflow.md');
  assertExists(wfPath, 'dev-story workflow.md');
  const content = fs.readFileSync(wfPath, 'utf-8');
  if (!content.includes('Safety-critical projects only')) {
    throw new Error('Dev story workflow does not include safety-critical DoD checks');
  }
});

// --- Summary ---
console.log(`\n${colors.cyan}═══ Summary ═══${colors.reset}`);
console.log(`  ${colors.green}${passedTests}${colors.reset} passed, ${colors.red}${totalTests - passedTests}${colors.reset} failed, ${totalTests} total`);

if (failures.length > 0) {
  console.log(`\n${colors.red}Failures:${colors.reset}`);
  for (const f of failures) {
    console.log(`  ${colors.red}\u2717${colors.reset} ${f.name}: ${f.message}`);
  }
  process.exit(1);
} else {
  console.log(`\n${colors.green}All safety-critical module tests passed!${colors.reset}`);
  process.exit(0);
}