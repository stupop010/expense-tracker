import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import expenseReducer from "./expenseReducer";
import paginationReducer from "./paginationReducer";

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  expense: expenseReducer,
  pagination: paginationReducer,
  error: errorReducer
});
