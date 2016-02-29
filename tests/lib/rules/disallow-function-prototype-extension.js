"use strict";

var rule = require("../../../lib/rules/disallow-function-prototype-extension");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();

ruleTester.run("disallow-function-prototype-extension", rule, {
  valid: [{
    code: "observer('key', function() {})"
  }, {
    code: "computed(function() {}).volatile()"
  }, {
    code: "(function() {}).bind(this)"
  }],

  invalid: [{
    code: "(function() {}.property())",
    errors: ["Avoid using function prototype extensions like 'property'. Use the computed('dependentKey', function() {}) syntax instead."]
  }, {
    code: "(function() {}.observes('key'))",
    errors: ["Avoid using function prototype extensions like 'observes'. Use the observer('dependentKey', function() {}) syntax instead."]
  }, {
    code: "(function() {}.observesBefore('key'))",
    errors: ["Avoid using function prototype extensions like 'observesBefore'. Also, using before observers is deprecated."]
  }]
});
