const path = require('path');
const nx = require('./nx');
const fs = require('fs');
const yargs = require('yargs/yargs');
const args = yargs(process.argv).argv;
const { create } = require('xmlbuilder2');

const workspace = nx.getWorkspace();

const targetDoc = create({
  testsuites: {},
});

const attrs = {
  failures: 0,
  errors: 0,
  tests: 0,
};

for (const project of nx.getAffectedApps()) {
  const projectData = nx.getProjectData(workspace, project);
  if (projectData.targets.test) {
    const reportOutput = projectData.targets.test.outputs.find((output) =>
      output.startsWith('reports')
    );
    const namespace = workspace.projects[project].replace(/\//g, '.');

    const inputFile = path.join(reportOutput, 'junit.xml');
    const inputStr = fs.readFileSync(inputFile, { encoding: 'utf-8' });
    const doc = create(inputStr, {});
    doc.root().each(
      (xmlBuilder) => {
        if (xmlBuilder.node.nodeName.toLowerCase() === 'testsuite') {
          for (const attrNode of xmlBuilder.node.attributes) {
            const name = attrNode.name;
            if (name.toLowerCase() === 'name') {
              attrNode.value = project;
            }

            if (name in attrs) {
              attrs[name] += Number(attrNode.value);
            }
          }
          for (const testcase of xmlBuilder.node.childNodes) {
            for (const attrNode of testcase.attributes) {
              const name = attrNode.name;
              if (name.toLowerCase() === 'classname') {
                attrNode.value = `${namespace}.${attrNode.value}`;
              }
              if (name.toLowerCase() === 'name') {
                attrNode.value = `${project} - ${attrNode.value}`;
              }
            }
          }

          targetDoc.root().import(xmlBuilder);
        }
      },
      true,
      true
    );

    for (const attr in attrs) {
      targetDoc.root().att(attr, attrs[attr]);
    }
  }
}

fs.writeFileSync(args.o, targetDoc.toString({ prettyPrint: true }));
