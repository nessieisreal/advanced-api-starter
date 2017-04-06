exports.findAll = function(req, res){
  res.send([{
    "id": 1,
    "name": "Panda",
    "description": "Hello my name is Panda"
  }]);
};