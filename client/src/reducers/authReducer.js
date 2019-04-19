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
    case LOGIN_USER:
    case FETCH_USER:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload || false
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        isAuthenticated: true
      };
    case LOGOUT_SUCCESS:
    case FETCH_USER_ERROR:
    case LOGIN_USER_FAILED:
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
