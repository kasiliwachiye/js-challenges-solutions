function filterByValue(arr, key) {
  return arr.filter((val) => val[key] !== undefined);
}

function find(arr, searchValue) {
  return arr.filter((value) => value === searchValue)[0];
}

function removeVowels(str) {
  let vowels = "aeiou";
  let array = str.toLowerCase().split("");
  return array.filter((value) => vowels.indexOf(value) === -1).join("");
}

function doubleOddNumbers(arr) {
  return arr.filter(num => {
    return num % 2 !== 0
  }).map(num => num * 2)
}

