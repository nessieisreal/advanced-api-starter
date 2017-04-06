var animals = [
	{
    	'name': 'Panda',
    	'description': 'Hello my name is Panda'
  	}, {
      	'name': 'West African gaboon viper',
      	'description': 'I honestly have no idea what this animal is'
	}, {
      	'name': 'Zebu',
      	'description': 'Sometimes known as humped cattle'
	}, {
      	'name': 'Pink Fairy Armadillo',
      	'description': 'Find me in Central Argentina.  I have small eyes.'
	}, {
      	'name': 'Aye-aye',
      	'description': 'Ok, seriously look this me up online...'
	}, {
      	'name': 'Dumbo Octupos',
      	'description': 'Thought Dumbo was an elephant'
	}, {
      	'name': 'Naked Mole Rat',
      	'description': 'I am always naked'
	}, {
      	'name': 'Star-Nosed Mole',
      	'description': 'This needs to be Googled'
	}, {
      	'name': 'Yeti Crab',
      	'description': 'Weird looking crab that\'s for sure'
	}, {
      	'name': 'Superb Bird of Paradise',
      	'description': 'I wish I was this bird'
	}
]


var express = require('express');
var app = express();
var mongoose = require('mongoose');

var mongodb = 'mongodb://127.0.0.1/animals';
mongoose.Promise = global.Promise;
mongoose.connect(mongodb);
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

Schema = mongoose.Schema;

var AnimalSchema = new Schema({
  name: String,
  description: String
});

var Animal = mongoose.model('Animal', AnimalSchema);

console.log("\nRefreshing database...\n");

var animalObjects = [];

Animal.remove({}, function(err) {
	console.log("Refresh complete.\n\n");

	var animalDocuments = [];
	for (var i = 0; i < animals.length; i++) {
		animalDocuments.push(new Animal(animals[i]));
	}

	Animal.insertMany(animalDocuments, function(err, docs) {
		for (var i = 0; i < docs.length; i++) {
			console.log("Saved " + docs[i]['name']);
		}

		console.log("\nShutting down.\n\n");
		process.exit();
	});
});