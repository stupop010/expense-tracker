import axios from "axios";
import { returnError } from "./errorAction";
import {
  ADD_EXPENSE,
  FETCH_EXPENSES,
  IS_FETCHING,
  FETCH_PAGINATION_EXPENSE,
  FETCH_EXPENSES_FAILED,
  POST_EXPENSES_FAILED,
  FETCH_PAGINATION_FAILED
} from "../constants/actionTypes";

// Add expense
export const addExpense = item => async dispatch => {
  try {
    const res = await axios.post("/expense/post", item, config);
    dispatch({ type: ADD_EXPENSE, payload: res.data });
  } catch (e) {
    dispatch(
      returnError(e.response.data, e.response.status, "POST_EXPENSES_FAILED")
    );
    dispatch({ type: POST_EXPENSES_FAILED });
  }
};

// Fetch All Expense
export const fetchExpenses = () => async dispatch => {
  try {
    dispatch({ type: IS_FETCHING });
    const res = await axios.get("/expense/get_5", config);
    dispatch({ type: FETCH_EXPENSES, payload: res.data });
  } catch (e) {
    dispatch(
      returnError(e.response.data, e.response.status, "FETCH_EXPENSES_FAILED")
    );
    dispatch({ type: FETCH_EXPENSES_FAILED });
  }
};

// Fetch Pagintion Expense
export const pagintionExpense = limit => async dispatch => {
  try {
    const res = await axios.get("/expense/all", { params: { limit } }, config);
    dispatch({ type: FETCH_PAGINATION_EXPENSE, payload: res.data });
  } catch (e) {
    dispatch(
      returnError(e.response.data, e.response.status, "FETCH_PAGINATION_FAILED")
    );
    dispatch({ type: FETCH_PAGINATION_FAILED });
  }
};

const config = {
  headers: {
    "Content-type": "application/json"
  }
};
