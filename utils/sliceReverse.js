module.exports = expense => {
  if (expense.length > 5) {
    const slice = expense.slice(Math.max(expense.length - 5, 1));
    return [...slice].reverse();
  }
  return expense.reverse();
};
