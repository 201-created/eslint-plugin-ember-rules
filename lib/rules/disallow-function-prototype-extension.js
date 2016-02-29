"use strict";

var includes = require("../utils/includes");
var extensionFixes = {
  'property': "Use the computed('dependentKey', function() {}) syntax instead.",
  'observes': "Use the observer('dependentKey', function() {}) syntax instead.",
  'observesBefore': "Also, using before observers is deprecated."
}
var prohibitedFunctionMethods = Object.keys(extensionFixes);

module.exports = function(context) {
  return {
    'CallExpression': function(node) {
      if (node.callee.object &&
          node.callee.object.type === 'FunctionExpression' &&
          includes(prohibitedFunctionMethods, node.callee.property.name)) {

        context.report({
          node: node,
          message: message(node)
        });
      }
    }
  };
};

function message(node) {
  var propertyName = node.callee.property.name;
  var message = "Avoid using function prototype extensions like '" + propertyName + "'. " +
                extensionFixes[propertyName];

  return message;
}
