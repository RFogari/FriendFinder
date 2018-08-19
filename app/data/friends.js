//Array for storing friends data.  

var friendsData = [
    {   
        name: "Bruce Wayne",
        photo: "https://www.technobuffalo.com/wp-content/uploads/2016/03/christian-bale-batman-disappointed-the-dark-knight-470x310@2x.jpg",
        scores:[1, 1, 1, 1, 5, 1, 1, 1, 5, 1]
    },
    {
        name: "Indiana Jones",
        photo: "https://upload.wikimedia.org/wikipedia/en/8/8e/Indiana_Jones_in_Raiders_of_the_Lost_Ark.jpg",
        scores:[5, 1, 1, 5, 1, 1, 1, 1, 1, 1]
    },
    {
        name: "Jack Torrance",
        photo: "https://i.stack.imgur.com/sLvHa.gif",
        scores: [1, 1, 5, 1, 1, 5, 1, 1, 1, 1]
    },
    {
        name: "Rocky Balboa",
        photo: "https://images.amcnetworks.com/blogs.amctv.com/wp-content/uploads/2011/11/rocky-stallone-560.jpg",
        scores: [1, 1, 1, 1, 1, 1, 5, 1, 1]
    },
    {
        name: "Princess Leia Organa",
        photo: "https://lumiere-a.akamaihd.net/v1/images/leia-organa-feature-image_d0f5e953.jpeg?region=0%2C0%2C1280%2C720&width=768",
        scores: [1, 1, 1, 1, 1, 1, 1, 5, 1, 5]
    },
    {
        name: "Vito Corleone",
        photo: "https://upload.wikimedia.org/wikipedia/en/2/21/Godfather15_flip.jpg",
        scores: [1, 5, 1, 1, 1, 1, 1, 1, 5, 1]
    }
]

//code to export array to make accesible to other files through require

module.exports = friendsData;