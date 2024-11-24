function every(array, callbackFunction) {
  if (!Array.isArray(array)) {
    return "INPUT ERROR: Your array input is not an array. Please input an array";
  }

  for (let i = 0; i < array.length; i++) {
    if (!callbackFunction(array[i])) {
      return false;
    }
  }
  return true;
}

console.log(
  every("", (item) => {
    return item < 3;
  })
);
console.log(
  every([4, 3, 2, 1], (item) => {
    return item < 3;
  })
);
