function reverseInt(int) {
  let str = int.toString();
  return parseInt(str.split("").reverse().join(""));
}

console.log(reverseInt(123));
