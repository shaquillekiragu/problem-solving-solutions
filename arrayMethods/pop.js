function pop(array) {
  if (!Array.isArray(array)) {
    return "INPUT ERROR: Your array input is not an array. Please input an array";
  }

  const newArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

console.log(pop(""));
console.log(pop([1, 2, 3, 4]));
