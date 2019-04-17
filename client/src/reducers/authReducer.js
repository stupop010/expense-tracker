import {
  FETCH_USER,
  USER_LOADING,
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
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_USER:
      return {
        ...state,
        isLoading: false,
        user: action.payload || false
      };
    case LOGIN_USER:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        isAuthenticated: true
      };
    case LOGOUT_SUCCESS:
    case FETCH_USER_ERROR:
    case LOGIN_USER_FAILED:
      localStorage.removeItem("token");
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: false
      };

    default:
      return state;
  }
}
