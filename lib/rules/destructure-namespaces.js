"use strict";

var message = "Assign properties from the Ember namespace to variables before " +
              "using them. For instance can use destructuring assignment to " +
              "extract the properties you plan to use: `const { computed, get } = Ember;`";

var rule = function(context) {
  var protectedNamesOption = context.options[0];
  var protectedNames = {};

  for (var i = 0; i < protectedNamesOption.length; i++) {
    protectedNames[protectedNamesOption[i]] = true;
  }

  return {
    'MemberExpression:exit': function(node) {
      if (protectedNames.hasOwnProperty(node.object.name) &&
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

rule.schema = [
  {
      type: "array",
      items: {
        type: "string"
      }
  }
];

module.exports = { rule: rule, message: message };
