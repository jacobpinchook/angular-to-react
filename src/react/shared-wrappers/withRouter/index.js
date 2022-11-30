import React from "react";
import { RoutingContext } from "../withRouterProvider";

const withRouter = WrappedComponent => {
  const WithRouter = props => (
    <RoutingContext.Consumer>
      {({ history, location }) => {
        return (
          <WrappedComponent {...props} history={history} location={location} />
        );
      }}
    </RoutingContext.Consumer>
  );
  return WithRouter;
};

export default withRouter;
