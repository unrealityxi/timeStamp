var express = require("express");
var getJsonDate = require("./logic/urlToTime");
var port = process.env.PORT || 3000;


var app = express();

app.use(express.static(__dirname + '/views'));

app.get("/", function(req, res){
  res.writeHead(200);
  console.log("Attempting to send index.html");
  res.sendFile("index.html");
  res.end();
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

app.listen(port, function(){
  console.log("Timestamp server listening at port: " + port);
});


