'use strict';

const fs = require('fs');
let rules = require('./database.rules');

rules = JSON.stringify(rules);
rules = rules.replace(/_/g, '.');

fs.writeFile('./database.rules.json', rules, 'utf-8');

console.log('\nGENERATED DATABASE RULES\n');
