module.exports = expense => {
  const slice = expense.slice(Math.max(expense.length - 5, 1));
  return [...slice].reverse();
};
