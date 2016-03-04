'use strict';

module.exports = {
  rules: {
    'destructure-namespaces': require('./lib/rules/destructure-namespaces').rule,
    'no-function-prototype-extension-calls': require('./lib/rules/no-function-prototype-extension-calls')
  }
};
