import axios from "axios";
import {
  FETCH_USER,
  ADD_EXPENSE,
  FETCH_EXPENSES,
  SIDEBAR_CLOSED,
  SIDEBAR_OPEN
} from "./types";

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

// Side bar actions
export const openSidebar = () => {
  return { type: SIDEBAR_OPEN, payload: "open" };
};

export const closedSidebar = () => {
  return { type: SIDEBAR_CLOSED, payload: "closed" };
};
