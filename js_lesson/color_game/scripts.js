colors = ["rgb(255, 0, 0)",
          "rgb(255, 255, 0)",
          "rgb(0, 255, 0)",
          "rgb(0, 255, 255)",
          "rgb(255, 0, 255)",
          "rgb(0, 0, 255)"]

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(); 
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

// add initial colors to squares
for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

// add click listners to squares
    squares[i].addEventListener("click", function() {
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        if (pickedColor === clickedColor) {
            changeColors(clickedColor);
            messageDisplay.textContent = "Correct!";
        } else {
            this.style.background = "#232323"
            messageDisplay.textContent = "Try Again!";
        }
    })
}

function changeColors(color) {
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
   var random = Math.floor(Math.random() * colors.length + 1);
   return colors[random];
}