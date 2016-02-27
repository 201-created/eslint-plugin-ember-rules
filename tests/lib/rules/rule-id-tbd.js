/**
 * @fileoverview rule-description-tbd
 * @author Mitch Lloyd
 * @copyright 2016 Mitch Lloyd. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/rule-id-tbd"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

ruleTester.run("rule-id-tbd", rule, {
  valid: [{
    code: "Ember",
  }, {
    code: "var run = Ember.run;",
  }, {
    code: "Ember.run = 'hello';",
  }],

  invalid: [{
    code: "Ember.run.bind;",
    errors: [{
      message: "Property on the Ember namespace was accessed directly."
    }]
  }, {
    code: "Ember.run;",
    errors: [{
      message: "Property on the Ember namespace was accessed directly."
    }]
  }, {
    code: "{ cp: Ember.computed() }",
    errors: [{
      message: "Property on the Ember namespace was accessed directly."
    }]
  }]
});
