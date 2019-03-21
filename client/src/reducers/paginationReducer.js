import { FETCH_PAGINATION_EXPENSE } from "../constants/actionTypes";

const initialState = {
  pagItems: [],
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PAGINATION_EXPENSE:
      return { ...state, pagItems: action.payload };
    default:
      return state;
  }
}
