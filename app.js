var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('hello world');
});
 
app.listen(process.env.PORT || 5000);
 
// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:5000/");

module.exports = app;