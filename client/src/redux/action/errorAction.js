import { GET_ERROR, CLEAR_ERROR } from "../constants/actionTypes";

export const returnError = (msg, status, id = null) => {
  return {
    type: GET_ERROR,
    payload: { msg, status, id }
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERROR
  };
};
