// required NPMs
var express = require("express");
var bodyParser = require("body-parser");




//express()
var app = express();

//port details set to default
var PORT = process.env.PORT || 8080;

//static folder for CSS
app.use(express.static(__dirname + "/app/public"));

//code for Express handling data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




//route files for app
    require("./app/data/friends");
    require("./app/routing/apiRoutes.js")(app);
    require("./app/routing/htmlRoutes.js")(app);

//confirmation the port's working
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});