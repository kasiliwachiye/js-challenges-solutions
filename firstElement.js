// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

function first(array, n) {
  let newArray = [];
  if (!n) {
    return array[0];
  } else {
    newArray.push(array.splice(0, n));
    return newArray[0];
  }
}

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));
