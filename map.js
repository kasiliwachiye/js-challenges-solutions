function doubleValues(arr) {
  return arr.map((value) => value * 2);
}

console.log(doubleValues([1, 2, 3]));

function valueTimesIndex(arr) {
  return arr.map((value, index) => value * index);
}

console.log(valueTimesIndex([1, 2, 3]));

function extractKey(arr, key) {
  return arr.map(val => val[key])
}

console.log(extractKey([1,2,3], 2))

function extractFullName(arr) {
  return arr.map(person => val.firstName + ' ' + val.LastName)
}
