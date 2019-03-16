import axios from "axios";
import {
  ADD_EXPENSE,
  FETCH_EXPENSES,
  IS_FETCHING
} from "../constants/actionTypes";

// Add expense
export const addExpense = item => async dispatch => {
  const res = await axios.post("/expense/post", item);
  dispatch({ type: ADD_EXPENSE, payload: res.data });
};

//Fetch All Expense
export const fetchExpenses = () => async dispatch => {
  dispatch({ type: IS_FETCHING });
  const res = await axios.get("/expense/all");
  dispatch({ type: FETCH_EXPENSES, payload: res.data });
};
