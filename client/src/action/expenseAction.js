import axios from "axios";
import { returnError } from "./errorAction";
import {
  ADD_EXPENSE,
  FETCH_EXPENSES,
  IS_FETCHING,
  FETCH_PAGINATION_EXPENSE,
  FETCH_EXPENSES_FAILED,
  POST_EXPENSES_FAILED
} from "../constants/actionTypes";

// Add expense
export const addExpense = (item, id) => async dispatch => {
  try {
    const body = { item, id };
    const res = await axios.post("/expense/post", body);
    dispatch({ type: ADD_EXPENSE, payload: res.data });
  } catch (e) {
    dispatch(
      returnError(e.response.data, e.response.status, "POST_EXPENSES_FAILED")
    );
    dispatch({ type: POST_EXPENSES_FAILED });
  }
};

// Fetch All Expense
export const fetchExpenses = id => async dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  try {
    dispatch({ type: IS_FETCHING });
    const res = await axios.get("/expense/get_5", { params: { id } }, config);
    dispatch({ type: FETCH_EXPENSES, payload: res.data });
  } catch (e) {
    dispatch(
      returnError(e.response.data, e.response.status, "FETCH_EXPENSES_FAILED")
    );
    dispatch({ type: FETCH_EXPENSES_FAILED });
  }
};

// Fetch Pagintion Expense
export const pagintionExpense = (limit, id) => async dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  const res = await axios.get(
    "/expense/all",
    { params: { limit, id } },
    config
  );
  dispatch({ type: FETCH_PAGINATION_EXPENSE, payload: res.data });
};
