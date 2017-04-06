var mongoose = require('mongoose'),
Animal = mongoose.model('Animal');


// exports.findAll = function(req, res){
//   res.send([{
//     "id": 1,
//     "name": "Panda",
//     "description": "Hello my name is Panda"
//   }, {
//   	"id": 2,
//   	"name": "West African gaboon viper",
//   	"description": "I honestly have no idea what this animal is"
//   }]);
// };
exports.findAll = function(req, res){
  Animal.find({},function(err, results) {
    return res.send(results);
  });
};
exports.findById = function(req, res){
  var id = req.params.id;
  Animal.findOne({'_id':id},function(err, result) {
    return res.send(result);
  });
};exports.add = function() {};
exports.update = function() {};
exports.delete = function() {};

exports.import = function(req, res){
  Animal.create(
    { "name": "Panda", "description": "HelloPanda" }
  , function (err) {
    if (err) return console.log(err);
    return res.send(202);
  });
};
