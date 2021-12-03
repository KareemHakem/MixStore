import { combineReducers } from "redux";
import users from "./User/reducer";

const rootReducer = combineReducers({
  users,
});

export default rootReducer;
