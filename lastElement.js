// Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

function last(array, n) {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    if (!n) {
      return array[array.length - 1]
    }
    newArray.push(array.reverse().splice(0, n))
    return newArray[0].reverse()
  }
}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));