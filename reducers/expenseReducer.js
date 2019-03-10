import { ADD_EXPENSE, FETCH_EXPENSES } from "../action/types";

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.payload];
    case FETCH_EXPENSES:
      return action.payload;
    default:
      return state;
  }
}
