var express = require('express');
var app = express();

//set the view engine to ejd
app.set("view engine", "ejs");

//use res.sender to load up an ejs view file

//index page
app.get("/", function(res, req){
  res.render("pages/index");
});

//about page
app.get("/about", function(req, res){
  res.sender("pages/about");
});

app.listen(8080);
console.log("Server is listening on port 8080");
