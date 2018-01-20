const COLORS = ["red", "orange", "yellow", "green", "blue", "purple"];

var btn = document.querySelector("button");
var body = document.querySelector("body");

function randInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

btn.addEventListener("click", function() {
    body.style.backgroundColor = COLORS[randInt(COLORS.length)]
})