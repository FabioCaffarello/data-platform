const path = require('path');
const nx = require('./nx');
const yargs = require('yargs/yargs');
const args = yargs(process.argv).argv;
const { spawnSync } = require('child_process');

const workspace = nx.getWorkspace();
const mergeArgs = [];

for (const project of nx.getAffectedApps()) {
  const projectData = nx.getProjectData(workspace, project);
  if (projectData.targets.test) {
    const coverageOutput = projectData.targets.test.outputs.find((output) =>
      output.startsWith('coverage')
    );
    mergeArgs.push(`${project}=${path.join(coverageOutput, 'coverage.xml')}`);
  }
}

spawnSync('npx', ['cobertura-merge', '-o', args.o].concat(mergeArgs), {
  cwd: process.cwd(),
  shell: false,
  stdio: 'inherit',
});
