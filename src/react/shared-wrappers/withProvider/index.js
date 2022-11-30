import React from "react";
import { Provider } from "react-redux";
import store from "../../../configureStore";

const withProvider = WrappedComponent => props => (
  <Provider store={store}>
    <WrappedComponent {...props} />
  </Provider>
);
export default withProvider;
