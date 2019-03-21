export const sliceFive = (action, state) => {
  return [action, ...state].slice(0, 5);
};
