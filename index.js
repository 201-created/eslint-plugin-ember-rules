'use strict';

module.exports = {
  rules: {
    'destructure-ember-namespace': require('./lib/rules/destructure-ember-namespace').rule,
    'no-function-prototype-extension-calls': require('./lib/rules/no-function-prototype-extension-calls'),
    'no-class-prototype-attributes': require('./lib/rules/no-class-prototype-attributes')
  }
};
