'use strict';

const fs = require('fs');
let rules = require('./database.rules');

rules = JSON.stringify(rules);
rules = rules.replace(/_/g, '.');
//rules = rules.replace(/([a-z])([A-Z])/g, (match) => match[0] + '-' + match[1].toLowerCase());

fs.writeFile('./database.rules.json', rules, 'utf-8');

console.log('\nGENERATED DATABASE RULES\n');
