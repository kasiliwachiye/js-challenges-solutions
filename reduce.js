// [array].reduce(function (accumulator, nextValue, index, array) {

// }, [optional param]);

let arr = [1, 2, 3, 4, 5, 6];
let cats = ["tiger", "lion", "jaguar", "cougar", "leopard"];
let numbers = [5, 4, 1, 4, 5];
let string = "supercalifragilisticexpialidocious";

const sol = arr.reduce((a, n) => {
  return a + n;
});

console.log(sol);

const order = cats.reduce((accumulator, nextval) => {
  return `${accumulator} ${nextval}`;
}, "The biggest cats in order are: ");

console.log(order);

const sumItems = numbers.reduce((accumulator, nextval) => {
  if (nextval in accumulator) {
    accumulator[nextval]++;
  } else {
    accumulator[nextval] = 1;
  }
  return accumulator;
}, {});

console.log(sumItems);

function sumOddNumbers(arr) {
  return arr.reduce((accumulator, nextVal) => {
    if (nextVal % 2 !== 0) {
      accumulator += nextVal;
    }
    return accumulator;
  }, 0);
}

console.log(sumOddNumbers(numbers));

function letterCount(str) {
  let array = str.toLowerCase().split("");
  return array.reduce((accumulator, nextval) => {
    if (nextval in accumulator) {
      accumulator[nextval]++;
    } else {
      accumulator[nextval] = 1;
    }
    return accumulator;
  }, {});
}

console.log(letterCount(string));

console.log(sumOddNumbers(numbers));

function vowelCount(str) {
  let vowels = "aeiou";
  let array = str.toLowerCase().split("");
  return array.reduce((accumulator, nextval) => {
    if (vowels.indexOf(nextval) !== -1) {
      if (nextval in accumulator) {
        accumulator[nextval]++;
      } else {
        accumulator[nextval] = 1;
      }
    }
    return accumulator;
  }, {});
}

console.log(vowelCount(string));
