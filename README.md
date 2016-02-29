# eslint-plugin-ember-rules

A set of ESLint rules for Ember applications.

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
        "ember-cli-rules/accessing-ember-namespace": 2
    }
}
```

## Supported Rules

* `accessing-ember-namespace` - Ensure that properties from the `Ember` namespace
  are assigned to variables before they are used.

