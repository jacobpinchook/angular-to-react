import { setGreen, setRed } from "../../reducers/ui/actionCreators";
import { getPicture } from "../../reducers/ui/thunks";

const partialComponent = {
  template: `<div class="{{$ctrl.color}} route">
    <h3>Partial View without React</h3>
    <div class="button-row">
      <button ng-click="$ctrl.setGreen()">Set Green</button>
      <button ng-click="$ctrl.setRed()">Set Red</button>
      <button ng-click="$ctrl.go()">Go to React Component</button>
      <button ng-click="$ctrl.getPicture()">Change Picture</button>
    </div>
    <img alt="random 200x200" src="{{$ctrl.picture}}" />
  </div>`,
  controller: function PartialController(
    $ngRedux,
    $scope,
    $state,
    $stateParams
  ) {
    const unsubscribe = $ngRedux.connect(
      state => ({
        color: state.ui.color,
        picture: state.ui.picture,
        go: () => $state.go("skippingAngular")
      }),
      { setGreen, setRed, getPicture }
    )(this);
    $scope.$on("destroy", unsubscribe);
  }
};

export default partialComponent;
