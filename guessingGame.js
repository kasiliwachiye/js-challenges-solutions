function guessingGame(amount) {
  let answer = Math.floor(Math.random() * 11);
  let guesses = 0;
  let completed = false;
  return (guess) => {
    if (completed === false) {
      guesses++;
      if (guess === answer) {
        completed === true;
        return "You got it!";
      } else if (guess < answer) {
        return "Your guess is too low";
      } else if (guess > answer) {
        return "Your guess is too high";
      } else if (guess === amount) {
        completed === true;
        return "You're out of guesses, the answer was " + answer;
      }
    }
    return "All done playing!";
  };
}

console.log(guessingGame(7)(2));
