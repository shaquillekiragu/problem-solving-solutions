function indexOf(array, element) {
  if (!Array.isArray(array)) {
    return "INPUT ERROR: Your array input is not an array. Please input an array";
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }
  return -1;
}

console.log(indexOf("", 4));
console.log(indexOf([1, 2, 3, 4, 5], 6));
console.log(indexOf([1, 2, 3, 4, 5], 4));
