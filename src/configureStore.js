import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import ui from "./reducers/ui";

const middlewares = [thunk];
const store = createStore(
  combineReducers({ ui }),
  applyMiddleware(...middlewares)
);

export default store;
