# vue-components-apps

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
Official Documentation:  [Vue Test Utils](https://vue-test-utils.vuejs.org/)

Run all tests: 
```
npm run test:unit
```
Change the 'testPathPattern' argument in the command then run:
```
Run single test: npm run test:unit-path
```
### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Package.json notes

1. Vue CLI v3 does not work with Sass Loader v8, it has been manually
downgraded to v7 until Vue CLI 4 is released.
