import {
  FETCH_USER,
  USER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS
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
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        isAuthenticated: true
      };
    case LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
}
