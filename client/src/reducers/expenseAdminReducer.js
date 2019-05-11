import {
  FETCH_SINGLE_EXPENSE,
  FETCH_SINGLE_EXPENSES_FAILED,
  EXPENSE_PATCHED_SUCCESS
} from "../constants/actionTypes";

const initialState = {
  item: {},
  msg: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SINGLE_EXPENSE:
      return {
        ...state,
        item: action.payload,
        msg: null
      };
    case FETCH_SINGLE_EXPENSES_FAILED:
      return {
        ...state,
        msg: null
      };
    case EXPENSE_PATCHED_SUCCESS:
      return {
        ...state,
        msg: action.payload
      };
    default:
      return state;
  }
}
