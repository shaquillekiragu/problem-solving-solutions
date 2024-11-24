function join(array, separator) {
  if (!Array.isArray(array) && String(separator) !== separator) {
    return "INPUT ERROR: Your array input is not an array, and your separator is not a string. Please input an array and a separator that is a string";
  } else if (!Array.isArray(array)) {
    return "INPUT ERROR: Your array input is not an array. Please input an array";
  } else if (String(separator) !== separator) {
    return "INPUT ERROR: Your separator input is not a string. Please input an string";
  }

  let string = "";
  for (let i = 0; i < array.length; i++) {
    string += separator + array[i];
  }
  return string;
}

console.log(join(true, false));
console.log(join(6, ""));
console.log(join([1, 2, 3, 4, 5], true));
console.log(join([1, 2, 3, 4, 5], " "));
