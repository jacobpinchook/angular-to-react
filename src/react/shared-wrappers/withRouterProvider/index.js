import React, { Component, createContext } from "react";
import queryString from "query-string";

const routesToStateMap = {
  "/": "/",
  "/react-component": "/react-component"
};

export const RoutingContext = createContext();

const withProviderRouter = WrappedComponent => {
  class WithAngularNavigation extends Component {
    constructor(props) {
      super(props);
      this.state = {
        history: {
          push: this.go.bind(this)
        },
        location: {
          state: this.props.$stateParams,
          search: queryString.stringify(this.props.$state.params)
        }
      };
    }

    go(path, { search, state }) {
      this.props.$state.go(routesToStateMap[path], {
        ...queryString.parse(search),
        ...state
      });
    }

    render() {
      return (
        <RoutingContext.Provider value={this.state}>
          <WrappedComponent />
        </RoutingContext.Provider>
      );
    }
  }
  return WithAngularNavigation;
};

export default withProviderRouter;
