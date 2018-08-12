//npm path for obtaining correct file path for hmll files
var path = require('path');

//routing



module.exports = function(app) {   

    //home page route
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    //survey route
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

     //default to home if no matching
     app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
}