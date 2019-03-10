import axios from "axios";
import { FETCH_USER, ADD_EXPENSE, FETCH_EXPENSES } from "./types";

// Add expense
export const addExpense = item => async dispatch => {
  const res = await axios.post("/expense/post", item);
  dispatch({ type: ADD_EXPENSE, payload: res.data });
};

//Fetch All Expense
export const fetchExpenses = () => async dispatch => {
  const res = await axios.get("/expense/all");
  dispatch({ type: FETCH_EXPENSES, payload: res.data });
};

//Fetch User
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/user");

  dispatch({ type: FETCH_USER, payload: res.data });
};
