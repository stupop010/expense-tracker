import axios from "axios";
import { returnError } from "./errorAction";
import {
  ADD_EXPENSE,
  FETCH_EXPENSES,
  IS_FETCHING,
  FETCH_PAGINATION_EXPENSE,
  FETCH_EXPENSES_FAILED
} from "../constants/actionTypes";

// Add expense
export const addExpense = item => async dispatch => {
  const res = await axios.post("/expense/post", item);
  dispatch({ type: ADD_EXPENSE, payload: res.data });
};

// Fetch All Expense
export const fetchExpenses = () => async dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  try {
    dispatch({ type: IS_FETCHING });
    const res = await axios.get("/expense/get_5", config);
    dispatch({ type: FETCH_EXPENSES, payload: res.data });
  } catch (e) {
    dispatch(returnError(e.response.data, e.response.status));
    dispatch({ type: FETCH_EXPENSES_FAILED });
  }
};

// Fetch Pagintion Expense
export const pagintionExpense = limit => async dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  const res = await axios.get("/expense/all", config, {
    params: {
      limit
    }
  });
  dispatch({ type: FETCH_PAGINATION_EXPENSE, payload: res.data });
};
