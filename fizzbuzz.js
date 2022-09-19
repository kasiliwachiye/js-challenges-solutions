function fizzBuzz() {
  for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

console.log(fizzBuzz());

// how to write javascript fizzbuzz function?
/*Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”*/

var str = "",
  x,
  y,
  a;
for (a = 1; a <= 100; a++) {
  x = a % 3 == 0;
  y = a % 5 == 0;
  if (x) {
    str += "fizz";
  }
  if (y) {
    str += "buzz";
  }
  if (!(x || y)) {
    str += a;
  }
  str += "\n";
}
console.log(str);
