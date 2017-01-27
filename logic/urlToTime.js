
var moment = require("moment");

function app(query){
  // Check if we got unix or natural date and create date acordingly
  var query = isNaN(query) ? new Date(query) : new Date(query * 1000);
  
  var momentDate = moment(new Date(query));

  var unix;
  var natural;
  if (momentDate.isValid()){
    natural = momentDate.format("MMMM D, YYYY")
    unix = momentDate.unix();
  }
  else {
    natural = null
    unix = null;
  }

  return JSON.stringify({
                          "unix": unix, 
                          "natural": natural
                        });
}

module.exports = app;