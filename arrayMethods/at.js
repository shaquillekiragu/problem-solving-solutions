function at(array, index) {
  if (!Array.isArray(array) && parseInt(index) !== index) {
    return "INPUT ERROR: Your array input is not an array, and your index is not an integer. Please input an array and an index that is an integer";
  } else if (!Array.isArray(array)) {
    return "INPUT ERROR: Your array input is not an array. Please input an array";
  } else if (parseInt(index) !== index) {
    return "INPUT ERROR: Your index input is not an integer. Please input an integer";
  } else if (
    (index >= 0 && index >= array.length) ||
    (index < 0 && index < 0 - array.length)
  ) {
    return "INPUT ERROR: Your index input is out of the range of the array length. Please input an index within the array length";
  }

  if (index >= 0) {
    return array[index];
  }
  return array[array.length + index];
}

console.log(at("today is Sunday", true));
console.log(at("hello", 2));
console.log(at(["a", "b"], false));
console.log(at(["a", "b", "c"], 7));
console.log(at(["a", "b", "c"], -5));
console.log(at(["a", "b", "c"], 2));
console.log(at(["a", "b", "c"], -2));
