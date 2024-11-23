function flat(arrayOfArrays) {
  if (!Array.isArray(arrayOfArrays)) {
    return "INPUT ERROR: Your input is not an array. Please input an array";
  } else if (!arrayOfArrays.length) {
    return "INPUT ERROR: Your input is an empty array. Please input an array of arrays";
  }

  const newArr = [];
  for (let i = 0; i < arrayOfArrays.length; i++) {
    if (!Array.isArray(arrayOfArrays[i])) {
      return "INPUT ERROR: Your input is not an array of only arrays. Please input an array of arrays";
    }
    for (let j = 0; j < arrayOfArrays[i].length; j++) {
      newArr.push(arrayOfArrays[i][j]);
    }
  }
  //   arrayOfArrays.forEach((arr) => {
  //     if (!Array.isArray(arr)) {
  //       return "INPUT ERROR: Your input is not an array of only arrays. Please input an array of arrays";
  //     }
  //     arr.forEach((subArr) => {
  //       newArr.push(subArr);
  //     });
  //   });

  return newArr;
}

console.log(flat(4));
console.log(flat(""));
console.log(flat([]));
console.log(flat([[5], [5], 5]));
console.log(flat([[5], [5], [5]]));
console.log(flat([[5], ["flat"], [true]]));
