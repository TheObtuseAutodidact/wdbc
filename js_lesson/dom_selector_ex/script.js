console.log("come up with 4 different ways to select the first <p> tag");

console.log("document.querySelector('p') returns:");
var sol_1 = document.querySelector("p");
console.log(sol_1);

console.log("document.querySelectorAll('p')[0]; returns: ");
var sol_2 = document.querySelectorAll("p")[0];
console.log(sol_2);

console.log("document.getElementById('first'); returns:");
var sol_3 = document.getElementById("first");
console.log(sol_3);

console.log("document.querySelector('#first'); returns:");
var sol_4 = document.querySelector("#first");
console.log(sol_4);