"use strict";

var destructureEmberNamespace = require("../../../lib/rules/destructure-ember-namespace");
var rule = destructureEmberNamespace.rule;
var errors = [destructureEmberNamespace.message];

var RuleTester = require("eslint").RuleTester;
var ruleTester = new RuleTester();

ruleTester.run("destructure-ember-namespace", rule, {
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
