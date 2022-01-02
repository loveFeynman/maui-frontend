import { combineReducers } from "redux";
// import { routerReducer } from "react-router-redux";
import sideReducer from "./sidebarReducer";
import userReducer from "./userReducer";
import walletReducer from "./walletReducer";

const rootReducer = combineReducers({
  // routing: routerReducer,
  sidebar: sideReducer,
  user: userReducer,
  wallet: walletReducer,
});

export default rootReducer;
