# eslint-plugin-ember-rules

A set of ESLint rules for Ember applications.

[![Build Status](https://travis-ci.org/201-created/eslint-plugin-ember-rules.svg?branch=master)](https://travis-ci.org/201-created/eslint-plugin-ember-rules)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-ember-rules`:

```
$ npm install eslint-plugin-ember-rules --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-ember-rules` globally.

## Usage

Add `ember-rules` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "ember-rules"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "ember-rules/destructure-ember-namespace": 2
    }
}
```

## Supported Rules

* `destructure-ember-namespace` - Ensure that properties from the `Ember` namespace
  are assigned to variables before they are used.

* `no-function-prototype-extension-calls` - Prevent the use of Ember's methods
  `property`, `observes`, and `observesBefore` which are added to the function
  prototype. A common example of a violation would be this deprecated syntax:

  ```javascript
  Ember.Object.extend({
    name: function() {
      return this.get('firstName') + this.get('lastName');
    }.property('firstName', 'lastName')
  })
  ```

* `no-class-prototype-attributes` - For certain Ember objects, some properties
  must be set on the prototype when extending a factory (`classNames`,
  `actions`). However when setting default properties for an object, in most
  cases one should use the `init` hook. This is especially important when
  setting values to objects or arrays that will be shared (likely inadvertently)
  across instances.  This rule warns when properties are set on the prototype
  that should instead be initialized inside of the `init` hook.
