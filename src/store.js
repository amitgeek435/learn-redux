import { createStoreHook } from "react-redux";
import rootReducer from "./reducer/index";

// const store = createStoreHook(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
const store = createStoreHook(rootReducer);
export default store;
