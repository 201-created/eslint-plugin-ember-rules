"use strict";

var destructureEmberNamespace = require("../../../lib/rules/destructure-namespaces");
var rule = destructureEmberNamespace.rule;
var errors = [destructureEmberNamespace.message];

var RuleTester = require("eslint").RuleTester;
var ruleTester = new RuleTester();

var options = [["Ember", "Other"]];

ruleTester.run("destructure-namespaces", rule, {
  valid: [{
    code: "Ember",
    options: options
  }, {
    code: "var run = Ember.run;",
    options: options
  }, {
    code: "Ember.run = 'hello';",
    options: options
  }, {
    code: "SomethingElse.run();",
    options: options
  }],

  invalid: [{
    code: "Ember.run.bind;",
    errors: errors,
    options: options
  }, {
    code: "Ember.run;",
    errors: errors,
    options: options
  }, {
    code: "{ cp: Ember.computed() }",
    errors: errors,
    options: options
  }, {
    code: "Other.run;",
    errors: errors,
    options: options
  }]
});
