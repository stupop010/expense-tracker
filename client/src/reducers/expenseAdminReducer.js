import {
  FETCH_SINGLE_EXPENSE,
  FETCH_SINGLE_EXPENSES_FAILED,
  EXPENSE_PATCHED_SUCCESS,
  DELETE_EXPENSE_FAILED,
  DELETE_EXPENSE_SUCCESS
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
    case DELETE_EXPENSE_FAILED:
    case DELETE_EXPENSE_SUCCESS:
    case EXPENSE_PATCHED_SUCCESS:
      return {
        ...state,
        msg: action.payload
      };
    default:
      return state;
  }
}
