import {
  FETCH_USER,
  USER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL
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
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      };
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        isAuthenticated: true
      };
    default:
      return state;
  }
}
