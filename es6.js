import chalk from 'chalk';
import {
    sample
} from 'underscore';


const str = 'This Code is using ES6 features !!!!!!!';
const c = [chalk.blue, chalk.bgCyan, chalk.red, chalk.yellow, chalk.green, chalk.italic, chalk.bold];

console.log(`
  ${str.split('').map((text) => sample(c)(text)).join('')}

  try more> https://babeljs.io/repl/
`);
