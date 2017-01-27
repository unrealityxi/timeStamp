
var moment = require("moment");

function app(query){



  var momentDate = isNaN(query) ? moment(new Date(query)) : moment.unix(query);
  
  var unix;
  var natural;
  natural = momentDate.format("MMMM D, YYYY");
  (natural == "Invalid date") ? natural = null : null;
  unix = momentDate.unix();
  
  return JSON.stringify({"unix": unix, "natural": natural});
}

module.exports = app;