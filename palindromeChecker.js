function checkIfPalindrome(string) {
  if (string !== string.toString()) {
    return "INPUT ERROR: Your input is not of a string data type. Please input a string";
  } else if (string.length === 0) {
    return "INPUT ERROR: You have given an empty string. Please input a string with characters";
  } else if (string.length === 1) {
    return true;
  }

  const arr = string.split("");
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j > -1; j--) {
      if (i === j && arr[i] !== arr[j]) {
        console.log(arr[i], "arr[i]");
        console.log(arr[j], "arr[j]");
        return false;
      }
    }
  }
  return true;
}

checkIfPalindrome("racec6r");

console.log(checkIfPalindrome(2));
console.log(checkIfPalindrome(""));
console.log(checkIfPalindrome("Shaq"));
console.log(checkIfPalindrome("racecar"));
console.log(checkIfPalindrome("NOVEMBER"));
console.log(checkIfPalindrome("NOON"));
