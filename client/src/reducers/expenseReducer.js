import {
  ADD_EXPENSE,
  FETCH_EXPENSES,
  IS_FETCHING,
  FETCH_EXPENSES_FAILED,
  POST_EXPENSES_FAILED
} from "../constants/actionTypes";
import { sliceFive } from "../utils/sliceFive";

const initialState = {
  items: [],
  isLoading: null,
  message: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        isLoading: false,
        items: sliceFive(action.payload, state.items),
        message: "successful"
      };
    case POST_EXPENSES_FAILED:
      return {
        ...state,
        isLoading: false,
        message: null
      };
    case FETCH_EXPENSES:
      return {
        ...state,
        isLoading: false,
        items: action.payload,
        message: null
      };
    case IS_FETCHING:
      return {
        ...state,
        isLoading: true,
        message: null
      };
    case FETCH_EXPENSES_FAILED:
      return {
        ...state,
        items: [],
        isLoading: false,
        message: null
      };
    default:
      return state;
  }
}
