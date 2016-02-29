"use strict";

var rule = require("../../../lib/rules/accessing-ember-namespace");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();

var errors = ["Property on the Ember namespace was accessed directly."];

ruleTester.run("rule-id-tbd", rule, {
  valid: [{
    code: "Ember"
  }, {
    code: "var run = Ember.run;"
  }, {
    code: "Ember.run = 'hello';"
  }],

  invalid: [{
    code: "Ember.run.bind;",
    errors: errors
  }, {
    code: "Ember.run;",
    errors: errors
  }, {
    code: "{ cp: Ember.computed() }",
    errors: errors
  }]
});
