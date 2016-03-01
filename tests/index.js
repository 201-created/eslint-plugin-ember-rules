/* eslint-env mocha */
'use strict';

// Test to check that all rules are exported from:
// https://github.com/Turbo87/eslint-plugin-chai-expect/blob/v1.1.1/tests/index.js

var plugin = require('..');

var assert = require('assert');
var fs = require('fs');
var path = require('path');

var rules = fs.readdirSync(path.resolve(__dirname, '../lib/rules/'))
  .map(function(f) {
    return path.basename(f, '.js');
  });

describe('all rule files should be exported by the plugin', function() {
  rules.forEach(function(ruleName) {
    it('should export ' + ruleName, function() {
      assert.ok(typeof plugin.rules[ruleName] === 'function', 'exported a function for ' + ruleName);
    });
  });
});
