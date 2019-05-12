export const isEmpty = array => {
  if (!Array.isArray(array) || !array.length) {
    return true;
  }
  return false;
};
