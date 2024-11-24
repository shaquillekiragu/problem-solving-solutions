function includes(array, item) {
  if (!Array.isArray(array)) {
    return "INPUT ERROR: Your array input is not an array. Please input an array";
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return true;
    }
  }
  return false;
}

console.log(includes("", ""));
console.log(includes([], ""));
console.log(includes([6, "not empty"], ""));
console.log(includes([6, "", true], ""));
