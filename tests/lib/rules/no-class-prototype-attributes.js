"use strict";

var rule = require("../../../lib/rules/no-class-prototype-attributes");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();

ruleTester.run("no-class-prototype-attributes", rule, {
  valid: [
    "Class.extend({});",
    "{ a: [] };",
    "var b = { a: [] };",
    "{ a: {} };",
    "var a = {};",
    "Class.extend({ a: computed() })",
    "Class.extend({ a: identifier })",
    "Class.extend({ a: identifier })",
    "Class.extend({ actions: [] })",
    "Class.extend({ attributeBindings: [] })",
    "Class.extend({ classNameBindings: [] })",
    "Class.extend({ classNames: [] })",
    "Class.extend({ concatenatedProperties: [] })",
    "Class.extend({ mergedProperties: [] })",
    "Class.extend({ queryParams: [] })"
  ],

  invalid: [{
    code: "Class.extend({ a: [] })",
    errors: ["error"]
  }, {
    code: "Class.extend({ a: {} })",
    errors: ["error"]
  }, {
    code: "Class.extend({ a: 1 })",
    errors: ["error"]
  }, {
    code: "Class.extend({ a: true })",
    errors: ["error"]
  }, {
    code: "Class.extend({ a: null })",
    errors: ["error"]
  }]
});
