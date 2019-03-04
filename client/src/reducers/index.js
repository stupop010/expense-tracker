import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import expenseReducer from "./expenseReducer";
import sidebarReducer from "./sidebarReducer";

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  expense: expenseReducer,
  sidebar: sidebarReducer
});
