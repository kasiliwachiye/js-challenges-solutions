function filterByValue(arr, key) {
  return arr.filter((val) => val[key] !== undefined);
}

function find(arr, searchValue) {
  return arr.filter((value) => value === searchValue)[0];
}

function removeVowels(str) {
  let vowels = "aeiouAEIOU";
  let array = str.split("");
  return array.filter((value) => vowels.indexOf(value) === -1).join("");
}

console.log(removeVowels('This website is for losers LOL!'))

function doubleOddNumbers(arr) {
  return arr.filter(num => {
    return num % 2 !== 0
  }).map(num => num * 2)
}

