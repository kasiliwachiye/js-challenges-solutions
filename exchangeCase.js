function exchangeCase(str) {
  let array = str.split("");

  return array
    .map((letter) => {
      if (letter === letter.toUpperCase()) {
        return letter.toLowerCase();
      } else if (letter === letter.toLowerCase()) {
        return letter.toUpperCase();
      }
    })
    .join("");
}

console.log(exchangeCase("The Quick Brown Fox"));
