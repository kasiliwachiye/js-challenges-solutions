// [array].forEach((value, index, array) => {

// });

let arr = [1, 2, 3];

function halfValues(arr) {
  let hVals = [];
  arr.forEach((value) => {
    hVals.push(value / 2);
  });
  return hVals;
}

console.log(halfValues(arr));

function doubleValues(arr) {
  let newArray = [];
  arr.forEach((value) => {
    newArray.push(value * 2);
  });
  return newArray;
}

console.log(doubleValues(arr));

function onlyEvenValues(arr) {
  let newArray = [];
  arr.forEach((value) => {
    if (value % 2 === 0) {
      newArray.push(value);
    }
  });
  return newArray;
}

console.log(onlyEvenValues(arr));

// function showFirstAndLast(arr) {
//   let newArray = []
//   arr.forEach(value => {
//     newArray.push(value[0] + value[value.length -1])
//   });
//   return newArray;
// }

// console.log(showFirstAndLast(arr));

// function addKeyAndValue(arr, key, value) {
//   arr.forEach((value) => {
//     value[key] = value;
//   });
//   return arr;
// }

// console.log(addKeyAndValue(arr, 2, 3));

function letterCount(str) {
  let letterArray = str.split("");
  let obj = {};

  letterArray.forEach((letter) => {
    if (letter in obj) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  });
  return obj;
}

console.log(letterCount("racecar"));
