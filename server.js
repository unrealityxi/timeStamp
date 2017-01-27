var express = require("express");
var getJsonDate = require("./logic/urlToTime");

var app = express();
app.set("views", __dirname + "/views");

app.get("/", function(req, res){
 
  res.render("index");
});

app.get("/*", function(req, res, next){
  // First decode uri. Might throw an error. 
  var query = decodeURIComponent(req.url).slice(1);
  
  // outsource headache to prewritten function
  var json = getJsonDate(query);
  
  // tadah
  res.setHeader('Content-Type', 'application/json');
  res.send(json);
  
});



// Handle errors.
app.use(function(err, req, res, next) {
    // Log error for future generations
    console.log(err);
    //subtly hint user that something blew
    return res.send("Bad data!");
});

app.listen(process.env.PORT || 8080);


