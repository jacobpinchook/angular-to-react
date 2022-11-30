import angular from "angular";
import uiRouter from "angular-ui-router";
import ngRedux from "ng-redux";
import partial from "./components/partial.component";
import "./components";

import store from "../configureStore";

const initializeAngularApp = () => {
  const app = angular.module("app", [uiRouter, ngRedux, "react.components"]);

  app.component("partial", partial);

  app.config(($stateProvider, $locationProvider) => {
    $stateProvider.state({
      name: "skippingAngular",
      url: "/react-component",
      template: `<skipping-angular></skipping-angular>`
    });
    $stateProvider.state({
      name: "home",
      url: "/?test&second",
      component: "partial"
    });
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
  });

  app.config($ngReduxProvider => {
    $ngReduxProvider.provideStore(store);
  });
};

export default initializeAngularApp;
