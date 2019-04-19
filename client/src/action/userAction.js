import axios from "axios";
import { returnError } from "./errorAction";
import {
  FETCH_USER,
  FETCH_USER_ERROR,
  FETCH_EXPENSES_FAILED,
  USER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_FAILED
} from "../constants/actionTypes";

export const fetchUser = () => async (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  try {
    const res = await axios.get("/api/user");
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (err) {
    dispatch(returnError(err.response.data, err.response.status));
    dispatch({ type: FETCH_USER_ERROR });
  }
};

export const userLogin = body => async dispatch => {
  dispatch({ type: USER_LOADING });
  try {
    const res = await axios.post("/api/reg", body);
    dispatch({ type: LOGIN_USER, payload: res.data });
  } catch (err) {
    dispatch(
      returnError(err.response.data, err.response.status, "LOGIN_USER_FAILED")
    );
  }
};

export const registerUser = body => async dispatch => {
  try {
    const res = await axios.post("/register/user", body);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch(
      returnError(err.response.data, err.response.status, "REGISTER_FAIL")
    );
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

export const logOut = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};
