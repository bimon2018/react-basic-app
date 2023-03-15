import { combineReducers } from "redux";
import { userReducer } from "src/store/reducers/userReducers";
import { repoReducer } from "src/store/reducers/repoReducers";
import { productReducer } from "src/store/reducers/productReducer";
// import { orgReducer } from "./orgReducer";

export default combineReducers({
  userReducer,
  repoReducer,
  productReducer,
  // orgReducer
});