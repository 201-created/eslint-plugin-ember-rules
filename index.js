'use strict';

module.exports = {
  rules: {
    'accessing-ember-namespace': require('./lib/rules/accessing-ember-namespace'),
    'disallow-function-prototype-extension': require('./lib/rules/disallow-function-prototype-extension')
  }
};
