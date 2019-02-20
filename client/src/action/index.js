import axios from "axios";
import { FETCH_USER } from "./types";

export const addExpense = item => {
  console.log(item);
};

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/user");

  dispatch({ type: FETCH_USER, payload: res.data });
};
