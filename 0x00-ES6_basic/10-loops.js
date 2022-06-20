export default function appendToEachArrayValue(array, appendString) {
  const appendedArray = [];
  for (let item of array) {
    item = appendString + item;
    appendedArray.push(item);
  }

  return appendedArray;
}
