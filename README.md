## Recommended Tools

- Editor

  - `VS Code` , with plugin extension:

    - `ESLint`
    - `Prettier`
    - `Markdown Formatter`

  - Config
    - `Auto format` on save
    - Indentation space: `2`

- Browser
  - Google Chrome

## Requirement

- Install Node JS `v12.16.1`
- Install `yarn` or `npm` command line

## Local Setup

- Run `yarn install` or `npm install`

## Node & NVM

- Get NVM / Node Version Manager for development using brew `brew install nvm`
- Get NVM / Node Version Manager for development using curl `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash`
- Close and reopen terminal to start using nvm or run `source ~/.bash_profile` or `source ~/.profile` make sure nvm included in profile

`export NVM_DIR=~/.nvm`

`source $(brew --prefix nvm)/nvm.sh`

- Verify that NVM was Properly installed `nvm version`
- List node version available `nvm list`
- Install node version 12 using `nvm install v12.16.1`
- Using or switch node versions using NVM `nvm use v12.16.1` and verify current node `node -v`
- Node Package Manager using yarn `brew install yarn` or `curl -o- -L https://yarnpkg.com/install.sh | bash` and verify installed yarn using `yarn -v`

## Script

- Running mode

  - `yarn run:local` to run on `local` environment

- Build and deploy
  - `yarn build` to compile and build using `config/build.js`
  - `yarn build:rollup` to compile and build using `rollup`
  - `yarn docs` to create documentation page

## Name Convention

- `ComponentName` using `PascalCase`
- `variableName` using `camelCase`
- `CONSTANT_NAME` using `SNAKE_CASE` with `UPPERCASE`
- DOM `id_name` using `snake_case` with `lowercase`
- DOM `class-name` for styling using `kebab-case` with `lowercase`
- DOM `js-class-name` for javascript event using `kebab-case` with `lowercase` and with `js` prefix
- `folder_name` using `snake_case` with `lowercase`
- `ComponentFileName.jsx` using `PascalCase`
- Boolean variable should has `is` prefix for `isBooleanVariableName`
- `Singular` and `plural` naming
- Component file name should using `.jsx` extension, and `.js` for non-component js files

## Default value

- _Array_ : `[]` , for example => `data: []`
- _Object_ : `{}` , for example => `data: {}`
- _Number_ : `0` , for example => `data: 0`
- _String_ : `""` , for example => `data: ""`
- _Boolean_ : `true` or `false` , for example => `data: false`

## Code Guideline

- use `const` and `let` , avoid using `var` as variable declaration
- always check the `data.length` first before do looping using `.map()` or `.forEach()` and put default value in the end of statement. For example: `data && data.length && data.map(...) || null`
