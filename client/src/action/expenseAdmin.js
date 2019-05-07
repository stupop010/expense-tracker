import axios from "axios";
import { returnError } from "./errorAction";
import {
  FETCH_SINGLE_EXPENSE,
  FETCH_SINGLE_EXPENSES_FAILED
} from "../constants/actionTypes";

export const fetchOneExpense = id => async dispatch => {
  try {
    const res = await axios.get("/expense-item/item", {
      params: {
        id
      }
    });
    dispatch({ type: FETCH_SINGLE_EXPENSE, payload: res.data });
  } catch (e) {
    dispatch(
      returnError(
        e.response.data,
        e.response.status,
        "FETCH_SINGLE_EXPENSES_FAILED"
      )
    );
    dispatch({ type: FETCH_SINGLE_EXPENSES_FAILED });
  }
};

export const updateExpense = data => async dispatch => {
  try {
    console.log(data);
    const res = await axios.put("/expense-item/patch", { data });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
