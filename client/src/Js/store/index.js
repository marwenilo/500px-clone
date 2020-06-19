import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const iniState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  iniState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
