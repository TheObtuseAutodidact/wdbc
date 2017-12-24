var secretNumber = 4;

var guess = Number(prompt("Guess a number: "));

if (guess === secretNumber) {
    alert("You got it Right!");
}
else if (guess > secretNumber) {
        alert("Too high. Guess again!");
}
else {
    alert("Too low. Guess again!");
}
