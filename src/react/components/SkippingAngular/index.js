import withRouterProvider from "../../shared-wrappers/withRouterProvider"; // Stateful angular connection mapping $state.go for navigation

import withRouter from "../../shared-wrappers/withRouter"; // Stateful angular connection mapping $state.go for navigation
import withProvider from "../../shared-wrappers/withProvider"; // react-redux Provider referencing same store as ngRedux
import withReactReduxConnection from "./withReactReduxConnection"; // connection to same store using react-redux connect
import SkippingAngular from "./SkippingAngular"; // stateless functional react component

export default withRouterProvider(
  withRouter(withProvider(withReactReduxConnection(SkippingAngular)))
);
