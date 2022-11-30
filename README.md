# Angular to React
# Description
- This is an example of how state can be lifted out of angular into redux consumed by react components that are mounted by angular using react2angular, and connected to angular routing using a higher-order-component injected with $state. Other than mounting and routing, all state lives in redux

- Connections to angular components are maintained with ngRedux and connections to react components are maintained with a shared Provider HOC an connections using react-redux

- Actions imported and dispatched by angular or react connections will update the store and be consumed by all connections

## Quick start

1. Clone this repo using `git clone https://github.com/jacobpinchook/angular-to-react.git`
2. Move to the directory: `cd <PROJECT_NAME>`.<br />
3. Run `yarn install` in order to install dependencies.<br />

## Begin development

```
yarn start
--- or ---
npm start
```

## Create a production bundle

```
yarn build
--- or ---
npm run build
```
