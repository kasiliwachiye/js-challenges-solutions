// Write a simple JavaScript program to join all elements of the following array into a string
function joinToString(array) {
  return array.reduce((acc, next) => {
    acc += `,${next}`;
    return acc;
  });
}

const myColor = ["Red", "Green", "White", "Black"];
console.log(joinToString(myColor));
