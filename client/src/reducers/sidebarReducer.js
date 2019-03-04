import { SIDEBAR_OPEN, SIDEBAR_CLOSED } from "../action/types";

export default function(state = "closed", action) {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return action.payload;
    case SIDEBAR_CLOSED:
      console.log(action);
      return action.payload;
    default:
      return state;
  }
}
