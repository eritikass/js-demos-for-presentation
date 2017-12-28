#!/usr/bin/env node
const yargs = require('yargs');
const chalk = require('chalk');

// ./cli.js hello tolla

yargs.usage('$0 <cmd> [args]')
  .command('hello [name]', 'welcome ter yargs!', (yargs) => {
    yargs.positional('name', {
      type: 'string',
      default: 'XXXX',
      describe: 'the name to say hello to'
    })
  }, function (argv) {
    console.log(chalk.blue('Hello'), chalk.red(argv.name) , chalk.green('welcome'));
  })
  .help()
  .argv
