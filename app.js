var express = require('express');
var app = express();
var mongoose = require('mongoose');

/*
// Add mongodb connection string here
var mongodb = 'mongo_db_connection_string';
mongoose.connect(mongodb);
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
*/

app.get('/', function(req, res) {
	res.send("IT WORKS!");
});

app.get('/panda', function(req, res) {
    res.send('A Panda');
});

app.get('/zoo/:name', function(req, res) {

   // Get /zoo/Panda
   console.log(req.params.name)
   // => {Panda}

   res.send('{"id": 1, "name":"Panda", "description":"Pandas are black and white"}');
});

console.log("\n\nRunning on port 3000...\n\n")
app.listen(3000);