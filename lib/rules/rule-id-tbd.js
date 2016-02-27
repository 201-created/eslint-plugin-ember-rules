"use strict";

module.exports = function(context) {
  return {
    'MemberExpression:exit': function(node) {
      if (node.object.name === 'Ember' &&
          node.parent.type !== 'VariableDeclarator' &&
          node.parent.type !== 'AssignmentExpression') {

        context.report({
          node: node,
          message: "Property on the Ember namespace was accessed directly."
        });
      }
    }
  };
};
