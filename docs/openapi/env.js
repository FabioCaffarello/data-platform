const fs = require('fs');
const path = require('path');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

let openapiSpec = fs.readFileSync(argv.input).toString();

const config = JSON.parse(fs.readFileSync(argv.config).toString());

for (const key in config) {
  openapiSpec = openapiSpec.replace(
    new RegExp(`\{\{ ${key} \}\}`, 'g'),
    config[key]
  );
}

fs.writeFileSync(argv.output, openapiSpec);
