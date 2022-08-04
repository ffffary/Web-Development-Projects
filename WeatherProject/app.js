const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
  // console.log("Post request received.");
  // console.log(req.body.cityName);

const query = req.body.cityName;
const apiKey = "38e1a2647441b3f8e95d28bece20216a";
const unit = "metric";
const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit
https.get(url, function(response){
// console.log(response);
console.log(response.statusCode);
response.on("data", function(data){
const weatherData = JSON.parse(data)
const temp = weatherData.main.temp
const weatherDescription = weatherData.weather[0].description
const icon = weatherData.weather[0].icon
const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

res.write("<p>The weather is currently  " + weatherDescription + "</p>")
res.write("<h1>The temperature in " + query +  " is  " + temp + " Degrees Celcius.</h1>")
res.write("<img src=" + imageURL + ">")
res.send()
    })
  })
})

// res.send("<h1>The temperature in London is  " + temp + " Degrees Celcius.</h1>");

  // console.log(temp)
  // console.log(weatherDescription)

  // const object = {
  //   name: "Fary",
  //   LoveFood: "Egg"
  // }
  // console.log(JSON.stringify(object))
  // console.log(weatherData);
  // console.log(data);

  // res.send("Server is up and running.")

app.listen(3000, function(response){
  console.log("Server is running on port 3000.");

})
