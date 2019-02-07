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

app.get("/r/:subredditName/", function(req, res) {
  const subredditName = req.params.subredditName;
  res.send(`Welcome to the ${subredditName} page!`);
})

app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
  const subredditName = req.params.subredditName;
  const id = req.params.id;
  const title = req.params.title;

  res.send(`Welcome to this fake redit page all about ${subredditName} - ${id}. ${title}`);
})

app.get("*", function(req, res) {
  res.send("Not found!");
})

// app.listen(process.env.PORT, process.env.IP) // for cloud9
app.listen(3000, function() {
  console.log("Express is now listening on port 3000");
});
