// standard ES5 style code below...
//var chalk = require('chalk');

// babel style leveraging availabe ES6 style.
// This would cause node to fail (in older versions) since it does not natively understand this
// The current version of Node appears to have no problems with ES6 syntax
import chalk from 'chalk';

console.log(chalk.green('Starting app in dev mode...'));
