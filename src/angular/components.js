import angular from "angular";
import { react2angular } from "react2angular";

import SkippingAngular from "../react/components/SkippingAngular";

angular
  .module("react.components", [])
  .component(
    "skippingAngular",
    react2angular(SkippingAngular, [], ["$state", "$stateParams"])
  );
