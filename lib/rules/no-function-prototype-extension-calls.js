"use strict";

var extensionFixes = {
  'observes': "Use the observer('dependentKey', function() {}) syntax instead.",
  'observesBefore': "Use the beforeObserver('dependentKey', function() {}) syntax instead.",
  'observesImmediately': "Use the immediateObserver('dependentKey', function() {}) syntax instead.",
  'on': "Use the on('event', function() {}) syntax instead.",
  'property': "Use the computed('dependentKey', function() {}) syntax instead."
}

module.exports = function(context) {
  return {
    'CallExpression': function(node) {
      if (
        node.callee.object && (
          node.callee.object.type === 'FunctionExpression' ||
          node.callee.object.type === 'CallExpression'
        ) &&
        extensionFixes.hasOwnProperty(node.callee.property.name)) {

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
