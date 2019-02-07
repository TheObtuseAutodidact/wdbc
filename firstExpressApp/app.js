var express = require("express");

var app = express();

app.get("/", function(req, res) {
  res.send("root!");
});


app.get("/hi", function(req, res) {
  res.send("Hi, there!");
});

app.get("/bye", function(req, res) {
  res.send("Goodbye!");
});

app.get("/dog", function(req, res) {
  res.send("MEOW!");
});

// app.listen(process.env.PORT, process.env.IP) // for cloud9
app.listen(3000, function() {
  console.log("Express is now listening on port 3000");
});
