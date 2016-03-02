"use strict";

var prohibitedPrototypeSyntax = {
  'ArrayExpression': true,
  'ObjectExpression': true,
  'Literal': true
}

var whitelistedProperties = {
  'actions': true,
  'attributeBindings': true,
  'classNameBindings': true,
  'classNames': true,
  'concatenatedProperties': true,
  'mergedProperties': true,
  'queryParams': true
}

module.exports = function(context) {
  function isInsideObjectExtension(node) {
    return (
      node.parent.type === 'ObjectExpression' &&
      node.parent.parent.type === 'CallExpression' &&
      node.parent.parent.callee.type === 'MemberExpression' &&
      node.parent.parent.callee.property.name === 'extend'
    );
  }

  function isWhitelistedProperty(node) {
    return whitelistedProperties.hasOwnProperty(node.key.name);
  }

  return {
    'Property': function(node) {
      if (isInsideObjectExtension(node) && !isWhitelistedProperty(node)) {
        if (prohibitedPrototypeSyntax.hasOwnProperty(node.value.type)) {
          context.report({
            node: node,
            message: 'error'
          });
        }
      }
    }
  };
};
