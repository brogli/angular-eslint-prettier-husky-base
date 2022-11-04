# Angular Eslint Prettier Husky Base

I wanted to create a minimal working angular project with eslint, prettier and husky, so I learn how to set them up
properly and
for future reference.

## Steps needed to create an angular-eslint-prettier-husky project

### Prep

- create new angular project with `ng new some-appname` (
  prerequisites: https://angular.io/guide/setup-local#install-the-angular-cli)
- create file in project root: `touch .prettierrc`
- create file in project root: `touch .eslintignore`
- execute `ng add @angular-eslint/schematics`, it will create an .eslintrc.json file with some basic config
- execute `npm install eslint-plugin-prettier@latest`, it runs prettier as an eslint rule
- execute `npm install eslint-config-prettier`, it handles conflicts between eslint and prettier

### eslintrc.json config

- append `"plugin:prettier/recommended"` to "overrides"."extends" in the eslintrc.json, it needs to be the last item
- append `"plugins": ["prettier"]` to the root level of .eslitrc.json
- append `"prettier/prettier": "error"` to "overrides"."rules" in eslintrc.json

### .prettierrc and .eslintignore config

- put some config into the .prettierrc file (up to you):

```json
{
    "trailingComma": "es5",
    "printWidth": 80,
    "singleQuote": true,
    "useTabs": false,
    "tabWidth": 4,
    "semi": true,
    "bracketSpacing": true
}
```

- ignore some stuff (up to you) in the .eslintignore file:

```
package.json
package-lock.json
e2e/**
karma.conf.js
commitlint.config.js

# /node_modules/* in the project root is ignored by default
/node_modules/*

# build artefacts
dist/*
build/*
coverage/*
```

### package.json config

- append/adapt this in the package.json at the end of "scripts":

```
"lint": "npx eslint \"src/**/*.{js,jsx,ts,tsx,html}\" --quiet --fix",
"format": "npx prettier \"src/**/*.{js,jsx,ts,tsx,html,css,scss}\" --write"
```

### Add husky

- initialize and install husky: `npx husky-init && npm install`, creates a .husky folder in the root folder
- in .husky/pre-commit replace 'npm run test' with:

```
npm run format
npm run lint
```

Before a commit, this will execute the script statements we put into the package.json.

That's it, try formatting a .ts file weird and make a commit. Prettier will clean it up.
Now add linting rules to your gusto into the .eslintrc.json file and formatting rules into the .prettierrc file.

## Intellij integration

- Make Intellij use the eslint rules: In the settings search for 'eslint' or go to Language & Frameworks > JavaScript >
  Code Quality Tools > Eslint, and make sure it picks up your .eslintrc.json.
- Make Intellij run prettier and eslint --fix upon save: In the settings search for 'Actions on Save' or go to Tools >
  Actions on Save and tick "Run eslint --fix" and "Run Prettier". Make sure it's able to pick up the correct package
  from the node_module folder.

## References

- https://gist.github.com/santoshshinde2012/e1433327e5f7a58f98fe3e6651c4d5de
- https://www.coffeeclass.io/articles/commit-better-code-with-husky-prettier-eslint-lint-staged#Configuring%20Husky
- https://itnext.io/angular-with-eslint-prettier-husky-6581ecd66fbb

## Contributions?

Sure, feel free to make a pr.
