// how to solve fizzbuzz in javascript?
/*Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”*/

var str = "",
  x,
  y,
  num;

for (num = 1; num <= 100; num++) {
  x = num % 3 == 0;
  y = num % 5 == 0;
  if (x) {
    str += "fizz";
  }
  if (y) {
    str += "buzz";
  }
  if (!(x || y)) {
    str += num;
  }
  // str += "\n";
  str += ", ";
}

console.log(str);
