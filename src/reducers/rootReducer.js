import { combineReducers } from "redux";
import userReducer from "./userReducer";
import commentsReducer from "./commentsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  comments: commentsReducer,
});

export default rootReducer;
