#!/usr/bin/env node
'use strict';

var runnable = require('./lib/nts-readme.js');
console.log(process.cwd());

runnable.exec(__dirname);
