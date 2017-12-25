var answer = prompt("Are we there yet?")

while (answer.toLowerCase().indexOf("yes") === -1  && answer.toLowerCase().indexOf("yeah") === -1) {
    var answer = prompt("Are we there yet?");
}
alert("Yay we made it!");