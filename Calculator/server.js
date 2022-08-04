//jshint esversion:6

//go to webpage: http://localhost:3000/
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response){
  // console.log(request);
  response.send("<h1>Hello, world!</h1>");
});

//a call back function: request, response

app.get("/contact", function(request, response){
  // console.log(request);
  response.send("fary.gmail.com");
});

app.get("/about", function(request, response){
  // console.log(request);
  response.send("My name is Fary.");
});


app.get("/hobbies", function(request, response){
  response.send("tea, cooking, books, hiking");
})


app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmicalculator.html")
})

app.post("/bmicalculator", function(req, res){
  var weight = parseFloat((req.body.weight));
  var height = parseFloat((req.body.height));
  var bmi = weight / (height * height);

  res.send("Your BMI is  " + bmi);

});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
