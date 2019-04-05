import {
  ADD_EXPENSE,
  FETCH_EXPENSES,
  IS_FETCHING,
  FETCH_EXPENSES_FAILED
} from "../constants/actionTypes";
import { sliceFive } from "../utils/sliceFive";

const initialState = {
  items: [],
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        isLoading: false,
        items: sliceFive(action.payload, state.items)
      };
    case FETCH_EXPENSES:
      return {
        ...state,
        isLoading: false,
        items: action.payload
      };
    case IS_FETCHING:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_EXPENSES_FAILED:
      return {
        ...state,
        items: [],
        isLoading: false
      };
    default:
      return state;
  }
}
