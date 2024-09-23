<h1 align="center">VueDex - LeafGreen - A Pokédex Built with Vue.js</h1>
<p align="center">
  <img src="public/logo512.png" alt="VueDex-logo" width="120px" height="120px"/>
  <br>
  <i>This webApp is an example of an application that can be built with the 
    <br>JavaScript framework Vue.js.</i>
  <br>
</p>

<p align="center">
  <a href="https://nothingnothings.github.io/VueDex" target="_blank" rel="noreferrer noopener"><strong>https://nothingnothings.github.io/VueDex</strong></a>
  <br>
</p>




## Introduction

![VueDex](snapshot/VueDex1.png)




![VueDex](snapshot/VueDex2.png)



Single Page Application (SPA) built with the Vue.js library/framework (npx vue create app). The app's design was inspired by the site [https://pokeapi.co](https://pokeapi.co). Bootstrap, Flexbox, and media queries were used to create a responsive design (aiming to provide the best possible experience across multiple screen configurations/devices, both desktop and mobile, with different resolutions). Following the latest guidelines of the Vue.js framework, the app was constructed using the Options API of Vue 3 and packages like 'vue-router'.

The app was initialized/bootstrapped with the command/environment `npx vue create app` and deployed using GitHub Pages, assisted by GitHub Actions.


![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/nothingnothings/VueDex?style=flat-square)
[![en](https://img.shields.io/badge/lang-en-red.svg?style=flat-square)](https://github.com/nothingnothings/VueDex)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg?style=flat-square)](https://github.com/nothingnothings/VueDex/blob/master/README.pt-br.md)





 
## Technologies
 
Some of the languages and libraries used:

- Node Package Manager (bootstrapping and management of the React application)
- HTML5
- SASS (for better organization of CSS rules, nested rules, etc.)
- CSS3 (animations, Flexbox, media queries)
- Vue.js version 3 (JavaScript framework that proposes the complete division of the app into Vue components)
- Typescript (for type safety of objects received from backend endpoints; Models and Interfaces, etc.)
- Vue Router (for navigation between the different "pages" of the application)
- Local state management (two main states: the central one in "App.js," used in the "Pokedex" and "Search for a Pokémon" pages, and the one related to individual Pokémon, located on the "PokemonDetails" page, accessed via the route "/pokedex/:idDoPokemon")
- Bootstrap (used in the navigation bar and overall positioning of elements in the page, with "container," "row," and "col")
- Axios (for communication, requests, and responses between this frontend application and the targeted backend, the API endpoints provided by the domain "pokeapi.co")
 
 
## Project's Directory Structure

The development environment (created using the tool/environment/workflow `npx vue create app`):


```

.\
│
├── .github\
│   │
│   └── workflows\
│       └── publish.yml
│
│
├── .vscode\
│   └── settings.json
│
├── public\
│   │
│   ├── fonts\
│   │   └── Pokemon Solid.ttf
│   │
│   ├── 404.html
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   └── manifest.json
│
├── snapshot\
│   ├── VueDex1.png
│   └── VueDex2.png
│
├── src\
│   │
│   ├── assets\
│   │   ├── github-logo.png
│   │   └── vue-logo.png
│   │
│   ├── components\
│   │   │
│   │   ├── ErrorComponent\
│   │   │   └── ErrorComponent.vue
│   │   │
│   │   ├── PokeSearch\
│   │   │   └── PokeSearch.vue
│   │   │
│   │   ├── Pokedex\
│   │   │   │
│   │   │   ├── Card\
│   │   │   │   └── Card.vue
│   │   │   │
│   │   │   └── Pokedex.vue
│   │   │
│   │   ├── PokemonDetailsCard\
│   │   │   └── PokemonDetailsCard.vue
│   │   │
│   │   └── layout\
│   │       │
│   │       ├── TheToolbar\
│   │       │   │
│   │       │   ├── MainNavigation\
│   │       │   │   │
│   │       │   │   ├── NavigationItems\
│   │       │   │   │   │
│   │       │   │   │   ├── NavigationItem\
│   │       │   │   │   │   └── NavigationItem.vue
│   │       │   │   │   │
│   │       │   │   │   └── NavigationItems.vue
│   │       │   │   │
│   │       │   │   └── MainNavigation.vue
│   │       │   │
│   │       │   └── TheToolbar.vue
│   │       │
│   │       ├── hocs\
│   │       │   └── PokedexWrapper.vue
│   │       │
│   │       ├── ThePokeBall.vue
│   │       └── TheSpinner.vue
│   │
│   │
│   ├── interfaces\
│   │   ├── Pokemon.ts
│   │   └── SimplePokemon.ts
│   │
│   ├── pages\
│   │   ├── NotFound.vue
│   │   ├── PokedexPage.vue
│   │   ├── PokemonDetails.vue
│   │   └── PokemonSearch.vue
│   │
│   ├── router\
│   │   └── index.ts
│   │
│   ├── styles\
│   │   ├── _card.scss
│   │   ├── _error-component.scss
│   │   ├── _global.scss
│   │   ├── _main-navigation.scss
│   │   ├── _navigation-item.scss
│   │   ├── _navigation-items.scss
│   │   ├── _pokeball.scss
│   │   ├── _pokedex-wrapper.scss
│   │   ├── _pokedex.scss
│   │   ├── _pokemon-details.scss
│   │   └── _toolbar.scss
│   │
│   ├── App.vue
│   ├── main.ts
│   └── shims-vue.d.ts
│
├── tests\
│   │
│   ├── e2e\
│   │   │
│   │   ├── plugins\
│   │   │   └── index.js
│   │   │
│   │   ├── specs\
│   │   │   └── test.js
│   │   │
│   │   ├── support\
│   │   │   ├── commands.js
│   │   │   └── index.js
│   │   │
│   │   └── .eslintrc.js
│   │
│   └── unit\
│       └── example.spec.ts
│
│
├── .dockerignore
├── .gitignore
├── README.md
├── babel.config.js
├── cypress.json
├── package-lock.json
├── package.json
├── tsconfig.json
├── vue.config.js
└── vue.config.ts
```


The production output of `npx vue create app`, which can be viewed in the `gh-pages` branch (responsible for the app's deployment):



```
.\
│
├── .vscode\
│   └── settings.json
│
├── css\
│   ├── 214.72065e3b.css
│   ├── 252.efe5c231.css
│   ├── 861.72065e3b.css
│   └── app.87d71669.css
│
├── fonts\
│   ├── Pokemon Solid.c76e2194.ttf
│   └── Pokemon Solid.ttf
│
├── img\
│   ├── github-logo.e4cf49de.png
│   └── vue-logo.ff417bdf.png
│
├── js\
│   ├── 214.d016785f.js
│   ├── 214.d016785f.js.map
│   ├── 252.0154d851.js
│   ├── 252.0154d851.js.map
│   ├── 656.9f743450.js
│   ├── 656.9f743450.js.map
│   ├── 861.1067c55d.js
│   ├── 861.1067c55d.js.map
│   ├── app.0d4014c8.js
│   ├── app.0d4014c8.js.map
│   ├── chunk-vendors.ae3a0b93.js
│   └── chunk-vendors.ae3a0b93.js.map
│
├── .nojekyll
├── 404.html
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon.ico
├── index.html
├── logo192.png
├── logo512.png
└── manifest.json
```




## Project Configuration Files (package.json and tsconfig.json)

The package.json file used in the project:

```
{
  "name": "vue-dex",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "test:unit": "vue-cli-service test:unit",
    "test:e2e": "vue-cli-service test:e2e",
    "lint": "vue-cli-service lint"
  },
  "dependencies": {
    "axios": "^1.3.4",
    "core-js": "^3.8.3",
    "gh-pages": "^5.0.0",
    "vue": "^3.2.13",
    "vue-class-component": "^8.0.0-0",
    "vue-router": "^4.0.3",
    "vuex": "^4.0.0"
  },
  "devDependencies": {
    "@types/axios": "^0.14.0",
    "@types/jest": "^27.0.1",
    "@typescript-eslint/eslint-plugin": "^5.4.0",
    "@typescript-eslint/parser": "^5.4.0",
    "@vue/cli-plugin-babel": "~5.0.0",
    "@vue/cli-plugin-e2e-cypress": "~5.0.0",
    "@vue/cli-plugin-eslint": "~5.0.0",
    "@vue/cli-plugin-router": "~5.0.0",
    "@vue/cli-plugin-typescript": "~5.0.0",
    "@vue/cli-plugin-unit-jest": "~5.0.0",
    "@vue/cli-plugin-vuex": "~5.0.0",
    "@vue/cli-service": "~5.0.0",
    "@vue/eslint-config-typescript": "^9.1.0",
    "@vue/test-utils": "^2.0.0-0",
    "@vue/vue3-jest": "^27.0.0-alpha.1",
    "babel-jest": "^27.0.6",
    "cypress": "^9.7.0",
    "eslint": "^7.32.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-vue": "^8.0.3",
    "jest": "^27.0.5",
    "lint-staged": "^11.1.2",
    "prettier": "^2.4.1",
    "sass": "^1.32.7",
    "sass-loader": "^12.0.0",
    "ts-jest": "^27.0.4",
    "typescript": "~4.5.5"
  },
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/vue3-essential",
      "eslint:recommended",
      "@vue/typescript/recommended",
      "plugin:prettier/recommended"
    ],
    "parserOptions": {
      "ecmaVersion": 2020
    },
    "rules": {},
    "overrides": [
      {
        "files": [
          "**/__tests__/*.{j,t}s?(x)",
          "**/tests/unit/**/*.spec.{j,t}s?(x)"
        ],
        "env": {
          "jest": true
        }
      }
    ]
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead",
    "not ie 11"
  ],
  "jest": {
    "preset": "@vue/cli-plugin-unit-jest/presets/typescript-and-babel"
  },
  "gitHooks": {
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "*.{js,jsx,vue,ts,tsx}": "vue-cli-service lint"
  },
  "prettier": {
    "trailingComma": "es5",
    "tabWidth": 2,
    "singleQuote": true
  }
}

```


The tsconfig.json file used in the project:



```

{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ES2020",
    "strict": true,
    "jsx": "preserve",
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "useDefineForClassFields": true,
    "sourceMap": true,
    "types": ["webpack-env", "jest"],
    "paths": {
    },
    "lib": ["esnext", "dom", "dom.iterable", "scripthost"]
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "tests/**/*.ts",
    "tests/**/*.tsx"
  ],
  "exclude": ["node_modules"]
}


```

## Installation/Usage


To use this project, clone it using Git:

1. Run `git clone` to clone the project into your local Git repository.
2. Run `npm install` to install all dependencies (`vue`, `axios`, etc.).
3. Run `npm run build` to create the production/deployment version of the application (produced in the `/dist` directory).
4. Serve the production/deployment files locally or on the web (with the help of a hosting service).
5. On the "Pokédex" page, click/tap on the Pokémon whose characteristics you want to view. On the "Search for a Pokémon" page, type the name of the Pokémon you wish to search for.


## Features

- Single-page application, without page reloads, using a single HTML file (Vue.js).
- Application divided into multiple components, some used more than once across different pages (design philosophy of the Vue.js library).
- Design created with CSS (compiled from .scss files).
- Responsive design (adaptive, supporting both mobile and desktop devices) created with Bootstrap, Flexbox, and media queries.
- Utilization of GitHub Actions and GitHub Pages with the tool `npx vue create app` to build a seamless workflow (transition from development phase to production/deployment phase). After the `git push` command, GitHub Actions transfers the contents of the `master` branch to the `gh-pages` branch, which then deploys the app at https://nothingnothings.github.io/VueDex/.
- Use of the Axios library for communication with the backend "pokeapi.co", which provides Pokémon data (names, IDs, weight, height, types, abilities, etc.) to the Vue application.
- Use of integral features of the Vue.js library, such as the options `data(){}`, `components:{}`, `methods:{}`, `computed:{}`, `watch:{}`, and `props:{}`.
- Use of hooks from the Vue.js library, such as `created(){}` and `mounted(){}`.
- Custom loading spinner (Pokéball).
- Custom error page, displaying the message/reason for the error to the user.
- Favicon compatible with various devices.

