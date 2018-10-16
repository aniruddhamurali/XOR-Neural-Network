// express is the most commonly used module with node
var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

// Tell it to use the public directory
app.use(express.static(__dirname + '/public')); //That's a double underscore

//the specific route handler below is not really needed anymore since by default express looks to server index.html
// only need this if searching for something else other than index.html
app.get('/', function (req, res) {
   res.send('index.html');
 });

// Runs command; callback function
app.listen(port, function() {
  console.log('Great! The server is running and waiting for traffic on port 5000.');
});
