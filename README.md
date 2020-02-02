# Plop `git config` helper

A Plop ([www.plopjs.com](www.plopjs.com)) helper to read git config values.

## Installation

`npm install --save-dev plop-helper-git-config`

or in its short form: `npm i -D plop-helper-git-config`

## Usage

In your `plopfile.js`, register it as follows:

```js
const gitConfigHelper = require("plop-helper-git-config");

module.exports = plop => {
  plop.setHelper("gitConfig", gitConfigHelper);
  
  // The rest of your plop file content
}
```

Now, you can use the `gitConfig` helper in your `*.hbs` templates. For example, in a `package.json.hbs` file:

```hbs
{
  "author": "{{ gitConfig "user.name" }}, {{ gitConfig "user.email" }}",
  "repository": {
    "type": "git",
    "url": "{{ gitConfig 'remote "origin".url' }}"
  }
}
```

## Special Thanks

* [Andrew Worcester](https://github.com/amwmedia) for Plop.
* [Jon Schlinkert](https://github.com/jonschlinkert) for the git config utility packages.