const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const yargs = require('yargs/yargs');

function getWorkspace() {
  const workspace = JSON.parse(
    fs.readFileSync('workspace.json', { encoding: 'utf8' })
  );
  return workspace;
}

function getProjectData(workspace, projectName) {
  const projectRoot = workspace.projects[projectName];
  const projectData = JSON.parse(
    fs.readFileSync(path.join(projectRoot, 'project.json'), {
      encoding: 'utf8',
    })
  );
  return projectData;
}

function getAffectedApps() {
  const args = yargs(process.argv).argv;

  const affectedResult = spawnSync(
    'npx',
    ['nx', 'print-affected', '--select=projects'].concat(
      args.base ? [`--base=${args.base}`] : []
    ),
    {
      cwd: process.cwd(),
      shell: false,
      encoding: 'utf-8',
    }
  );

  const affectedApps = affectedResult.stdout.replace('\n', '').split(', ');
  return affectedApps.filter((app) => app !== '');
}

module.exports = { getAffectedApps, getProjectData, getWorkspace };
