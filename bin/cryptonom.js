#!/usr/bin/env node
const app = require('commander');
const pkg = require('../package.json');

app
  .version(pkg.version)
  .command('key', 'Manage API Key - https://nomics.com')
  .command('check', 'Check Coin Price Info')
  .parse(process.argv);