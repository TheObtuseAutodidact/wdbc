var age = prompt("What is your age?");

if (age < 0) {
    console.log("ERROR: try that again")
}

else if (Math.sqrt(age) % 1 === 0) {
    console.log("Your age is a perfect square!");
}


else if(age < 18) {
    console.log("Sorry, you are not old enough to enter");
}

else if(age < 21) {
    console.log("You can enter, but cannot drink");
}

else if (age == 21) {
    console.log("happy 21st birthday!");
}

else if (age % 2 !== 0) {
    console.log("Your age is odd!");
}

else {
    console.log("C'mon in");
}