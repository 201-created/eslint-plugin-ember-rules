"use strict";

var message = "Assign properties from the Ember namespace to variables before " +
              "using them. For instance can use destructuring assignment to " +
              "extract the properties you plan to use: `const { computed, get } = Ember;`";

var rule = function(context) {
  return {
    'MemberExpression:exit': function(node) {
      if (node.object.name === 'Ember' &&
          node.parent.type !== 'VariableDeclarator' &&
          node.parent.type !== 'AssignmentExpression') {

        context.report({
          node: node,
          message: message
        });
      }
    }
  };
};

module.exports = { rule: rule, message: message };
