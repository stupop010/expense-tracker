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
  isAuthenticated: false,
  isLoading: false,
  user: false,
  message: null
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
        user: action.payload || false,
        message: null
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        isAuthenticated: false
      };
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
    case FETCH_USER_ERROR:
    case LOGIN_USER_FAILED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: false,
        message: null
      };

    default:
      return state;
  }
}
