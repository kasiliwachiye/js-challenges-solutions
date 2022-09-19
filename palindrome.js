let letters = [];
let word = "racecar";
let reverseword = "";

for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

for (let i = 0; i < word.length; i++) {
  reverseword += letters.pop();
}

if (reverseword === word) {
  console.log(`${word} is a palindrome`);
} else {
  console.log(`${word} is not a palindrome`);
}

// alternative way on how to write palindrome function in javascript
function checkPalindrome(str) {
  return str == str.split("").reverse().join("")
    ? `${str} is a palindrome`
    : `${str} is not a palindrome`;
}

console.log(checkPalindrome("kayak"));
