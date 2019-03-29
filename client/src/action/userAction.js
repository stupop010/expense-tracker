import axios from "axios";
import { FETCH_USER, USER_LOADING } from "../constants/actionTypes";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const login = body => async dispatch => {
  const res = await axios.post("/local", body);
  console.log(res);
  dispatch({ type: USER_LOADING });
};
