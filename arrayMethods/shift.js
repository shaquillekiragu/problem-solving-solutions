function shift(array) {
  if (!Array.isArray(array)) {
    return "INPUT ERROR: Your array input is not an array. Please input an array";
  }

  const newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

console.log(shift(""));
console.log(shift([1, 2, 3, 4]));
