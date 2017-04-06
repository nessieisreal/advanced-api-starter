var express = require('express');
var app = express();
var mongoose = require('mongoose');
fs = require('fs');

//Local connection to mongo
var mongoUri = 'mongodb://localhost/noderest';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoUri);
});

/*
// Add mongodb connection string here
var mongodb = 'mongo_db_connection_string';
mongoose.connect(mongodb);
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
*/

//require the animals data model
require('./models/animal');
//require the resource folder
require('./routes')(app);

app.get('/', function(req, res) {
	res.send("IT WORKS!");
});

app.get('/panda', function(req, res) {
    res.send('A Panda');
});


console.log("\n\nRunning on port 3000...\n\n")
app.listen(3000);