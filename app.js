let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers3 = arrayIntegers.slice(0, 3); //returns [1,2,3]

console.log(arrayIntegers3);

function sumOdd(arr) {
  return arr.reduce((a,n) => {
    if (n % 2 !== 0) {
      return a + n
    }
  }, 0);
}

sumOdd(arr)
