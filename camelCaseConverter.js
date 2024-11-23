function convertToCamelCase(string) {
  if (string !== string.toString()) {
    return "INPUT ERROR: Your input is not of a string data type. Please input a string";
  } else if (string.length === 0) {
    return "INPUT ERROR: You have given an empty string. Please input a string with characters";
  }

  let camelCaseStr = "";
  const arr = string.split(" ");

  for (let i = 0; i < arr.length; i++) {
    let word = "";
    if (arr.length === 1) {
      camelCaseStr = arr[0].toLowerCase();
    } else if (i === 0) {
      word = arr[i].toLowerCase();
    } else {
      word = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    camelCaseStr += word;
  }

  return camelCaseStr;
}

console.log(convertToCamelCase(1));
console.log(convertToCamelCase(""));
console.log(convertToCamelCase("My name is Shaquille"));
console.log(convertToCamelCase("i love to code"));
console.log(convertToCamelCase("HELLO WORLD"));
