import changeNum from "./updown";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeNum: changeNum,
});
export default rootReducer;
