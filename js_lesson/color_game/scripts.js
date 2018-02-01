
var numberOfSquares = 6;
colors = generateRandomColors(numberOfSquares); 

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(); 
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector('h1');
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");


for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected"); 
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6; 
      reset();
    })
    
}

function reset() {
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue"; 
}

resetButton.addEventListener("click", function() {
    reset();
});

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
            h1.style.backgroundColor = clickedColor
            resetButton.textContent = "Play Again?";
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
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num) {
  // make array
  var arr = []
  // add num random colors to array
  for (var i = 0; i < num; i++) {
      // get random color and push into array
      arr.push(randomColor());
  }
  // return that array
  return arr;
}

function randomColor() {
    var r = randColorValue();
    var g = randColorValue();
    var b = randColorValue();
    return "rgb("+ r + ", " + g + ", " + b + ")"; 
}

function randColorValue() {
    return Math.floor(Math.random() * 256);
}