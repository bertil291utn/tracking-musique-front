export default array => array.reduce((accumulator, currentValue) => {
  const { attributes: { hours } } = currentValue;
  return +accumulator + +hours;
}, 0);
