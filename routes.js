module.exports = function(app){
    var zoo = require('./resources/zoo');
    app.get('/zoo', zoo.findAll);
    //app.get('/zoo/:id', zoo.findById);
    //app.post('/zoo', zoo.add);
    //app.put('/zoo/:id', zoo.update);
    //app.delete('/zoo/:id', zoo.delete);
}
