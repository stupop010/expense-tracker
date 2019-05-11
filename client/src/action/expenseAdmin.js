import axios from "axios";
import { returnError } from "./errorAction";
import { history } from "../history";
import {
  FETCH_SINGLE_EXPENSE,
  FETCH_SINGLE_EXPENSES_FAILED,
  EXPENSE_PATCHED_SUCCESS,
  FETCH_PATCHED_FAILED,
  DELETE_EXPENSE_SUCCESS
} from "../constants/actionTypes";

export const fetchOneExpense = id => async dispatch => {
  try {
    const res = await axios.get("/expense-item/item", {
      params: {
        id
      }
    });
    dispatch({ type: FETCH_SINGLE_EXPENSE, payload: res.data });
  } catch (err) {
    dispatch(
      returnError(
        err.response.data,
        err.response.status,
        "FETCH_SINGLE_EXPENSES_FAILED"
      )
    );
    dispatch({ type: FETCH_SINGLE_EXPENSES_FAILED });
  }
};

export const updateExpense = data => async dispatch => {
  try {
    const res = await axios.put("/expense-item/patch", { data });
    dispatch({ type: EXPENSE_PATCHED_SUCCESS, payload: res.data });
    history.push("/home");
  } catch (err) {
    dispatch(
      returnError(
        err.response.data,
        err.response.status,
        "FETCH_PATCHED_FAILED"
      )
    );
    dispatch({ type: FETCH_PATCHED_FAILED });
  }
};

export const deleteExpense = id => async dispatch => {
  try {
    const res = await axios.delete("/expense-item/delete", { data: { id } });
    dispatch({ type: DELETE_EXPENSE_SUCCESS, payload: res.data });
    history.push("/home");
  } catch (err) {
    dispatch(
      returnError(
        err.response.data,
        err.response.status,
        "DELETE_EXPENSE_FAILED"
      )
    );
  }
};
