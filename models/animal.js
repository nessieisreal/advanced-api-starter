var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var AnimalSchema = new Schema({
  name: String,
  description: String
});

mongoose.model('Animal', AnimalSchema);
