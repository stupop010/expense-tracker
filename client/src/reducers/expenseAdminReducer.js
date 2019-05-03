import {
  FETCH_SINGLE_EXPENSE,
  FETCH_SINGLE_EXPENSES_FAILED
} from "../constants/actionTypes";

const initialState = {
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SINGLE_EXPENSE:
      return {
        ...state,
        item: action.payload
      };
    case FETCH_SINGLE_EXPENSES_FAILED:
      return {
        ...state
      };
    default:
      return state;
  }
}
