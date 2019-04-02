import { GET_ERROR } from "../constants/actionTypes";

export const returnError = (msg, status, id = null) => {
  return {
    type: GET_ERROR,
    payload: { msg, status, id }
  };
};
