import axios from "axios";
import { returnError } from "./errorAction";
import {
  FETCH_USER,
  USER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "../constants/actionTypes";

export const fetchUser = () => async (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  const res = await axios.get("/api/user", tokenConfig(getState));

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const userLogin = body => async dispatch => {
  const res = await axios.post("/user/reg", body);
  dispatch({ type: USER_LOADING });
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

export const tokenConfig = getState => {
  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
