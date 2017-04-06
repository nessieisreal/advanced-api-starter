exports.findAll = function(req, res){
  res.send([{
    "id": 1,
    "name": "Panda",
    "description": "Hello my name is Panda"
  }, {
  	"id": 2,
  	"name": "West African gaboon viper",
  	"description": "I honestly have no idea what this animal is"
  }]);
};