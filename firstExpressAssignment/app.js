const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("Hi there, welcome to my assingment!");
});

app.get("/speak/:animal/", function(req, res) {
  const sounds = {"pig": 'Oink', "cow": "Moo", "dog": "Woof Woof!"};
  const animal = req.params.animal.toLowerCase();

  if (animal in sounds) {
    res.send(`The ${animal} says '${sounds[animal]}'`);
  } else {
    // is there a way to redirect to catch all route?
      res.send("Sorry, page not found...What are you doing with your life?");
    }
});

app.get("/repeat/:word/:times/", function(req, res) {
  const word = req.params.word + " ";
  const times = parseInt(req.params.times);

  res.send(`${word.repeat(times)}`);
});

app.get("*", function(req, res) {
  res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(3000, function() {
  console.log("Your app is now listening on port 3000")
});
