#!/usr/bin/env node

const program = require('commander');
const version = require('./package.json').version;

program.version(version);

program
    .command('build', 'It build all the component tests')
    .action(require('./commands/build')(program));

program.parse(process.argv);
