function concat(array1, array2) {
  if (!Array.isArray(array1) && !Array.isArray(array2)) {
    return "INPUT ERROR: Both of your array inputs are not arrays. Please input two arrays";
  } else if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return "INPUT ERROR: One of your array inputs is not an array. Please input two arrays";
  }

  const newArray = [];
  for (let i = 0; i < array1.length; i++) {
    newArray.push(array1[i]);
  }
  for (let i = 0; i < array2.length; i++) {
    newArray.push(array2[i]);
  }
  return newArray;
}

console.log(concat(7, 6.85));
console.log(concat(["five", "four", "three", "two", "one"], ""));
console.log(concat(false, []));
console.log(concat(["Brazil", "Russia", "India"], ["China", "South Africa"]));
