function sumArray(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    result += element;
  }
  console.log(result);
}

sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
