

//load data from survey.html and server.js

var friends = require("../data/friends.js");


//routing

//get request will pull data when user visits the page.  Friends JSON will be display showing all the various users.

module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });



// API post request processes user data when the survey is completed and the user clicks submit.

    app.post('/api/friends', function(req, res) {

        
        //variables for finding a match

        //data based on survey submission
        var newFriend = req.body;
        //scores variable from data submitted with form
        var newScore = newFriend.scores;

        //placeholder for bestMatch score
        var bestMatch = 1000;

        //loop through friends.js data
        for(var i = 0; i < friends.length; i++) {
           
            var difference = 0;
           
            //loop through survey scores. loop will be used for newfriend scores and friends.js data

            for(var j = 0; j < newScore.length; j++) {
                //absolute value subtracting friend score from new user score
                difference += Math.abs(friends[i].score[j] - newScore[j]);

            };
            if (difference < bestMatch){
                bestMatch = difference;
                index = i;
            }
        }
            console.log(friends[index]);
            friends.push(newFriend);
            res.json(friends[index]);
    })
}
