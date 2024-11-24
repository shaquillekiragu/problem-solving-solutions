function filter(array, callbackFunction) {
  if (!Array.isArray(array)) {
    return "INPUT ERROR: Your array input is not an array. Please input an array";
  }

  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callbackFunction(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(
  filter("", (item) => {
    return item > 6;
  })
);
console.log(
  filter([6, 7, 8, 9, 10], (item) => {
    return item > 6;
  })
);
