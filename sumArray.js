function sumArray(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    result += element;
  }
  console.log(result);
}

function sumArray2(array) {
  return array.reduce((acc, next) => {
    return acc += next
  }, 0)
}

console.log(sumArray2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
