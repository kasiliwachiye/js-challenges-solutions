function fibonacci() {
  let arr = [];
  for (let index = 1; index < 101; index++) {
    arr.reduce((acc, next) => {
      acc.push((acc += next));
      return acc
    }, 0);
  }
}

console.log(fibonacci());
