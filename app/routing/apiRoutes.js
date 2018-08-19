

//load data from survey.html and server.js

var friendsData = require("../data/friends.js");


//routing

//get request will pull data when user visits the page.  Friends JSON will be display showing all the various users.

module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
        res.json(friendsData);
    });



// API post request processes user data when the survey is completed and the user clicks submit.

    app.post('/api/friends', function(req, res) {

        
        

        //variable for new friend from submitting survey
        var newFriend = req.body;

            //loop through new friend scores
            for(var i = 0; i < newFriend.scores.length; i++) {
                newFriend.scores[i] = parseInt(newFriend.scores[i]);
            };


        //array to store score differences
        var differencesArray = [];

        for(var i = 0; i < friendsData.length; i++) {
            var comparedFriend = friendsData[i];
            var totalDifference = 0;

            //loop through friends data scores.  Subtract new friend score from friends data score.  Take absolute value of difference.
            for(var j = 0; j < comparedFriend.scores.length; j++) {
                var differenceOneScore = Math.abs(comparedFriend.scores[j] - newFriend.scores[j]);

                    totalDifference += differenceOneScore;
            }

                differencesArray[i] = totalDifference;
        };


        //loop through friend match array.  compare new friend with friend array
        var friendMatch = differencesArray[0];
        var friendMatchIndex = 0;

        for(var i = 1; i < differencesArray.length; i++) {
            if (differencesArray[i] < friendMatch) {
                friendMatch = differencesArray[i];
                
                friendMatchIndex = i;
            }
        }
         
        
        
           
        
        console.log(friendsData[friendMatchIndex]);

        //push new friend to friend data array
        friendsData.push(newFriend);
            //push friend match to html
         res.json(friendsData[friendMatchIndex]);
    })
}
