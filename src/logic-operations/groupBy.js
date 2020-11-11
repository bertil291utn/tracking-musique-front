/* eslint-disable no-param-reassign */
export default (array, key) => array.reduce((result, currentValue) => {
  (result[currentValue.attributes[key]] = result[currentValue.attributes[key]] || []).push(
    currentValue,
  );
  return result;
}, {});
