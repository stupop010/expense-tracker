import {
  FETCH_PAGINATION_EXPENSE,
  FETCH_PAGINATION_FAILED
} from "../constants/actionTypes";

const initialState = {
  pagItems: [],
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PAGINATION_EXPENSE:
      return { ...state, pagItems: action.payload };
    case FETCH_PAGINATION_FAILED:
      return { ...state };
    default:
      return state;
  }
}
