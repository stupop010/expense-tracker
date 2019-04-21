import {
  FETCH_USER,
  FETCH_USER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_USER_FAILED,
  FETCH_USER_ERROR,
  LOGOUT_SUCCESS,
  LOGIN_USER
} from "../constants/actionTypes";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_USER:
    case FETCH_USER:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload || false
      };
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        isAuthenticated: true
      };
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
    case FETCH_USER_ERROR:
    case LOGIN_USER_FAILED:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isLoading: false,
        isAuthenticated: false,
        user: false
      };

    default:
      return state;
  }
}
