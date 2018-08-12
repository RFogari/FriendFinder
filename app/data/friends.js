//Array for storing friends data.  

var friendsData = [
    {   
        name: "Bruce Wayne",
        photo: "https://m.media-amazon.com/images/M/MV5BMjA1MTQ0ODM5OV5BMl5BanBnXkFtZTcwODEyMjc2Nw@@._V1_SY1000_CR0,0,1503,1000_AL_.jpg",
        scores:[1, 1, 1, 1, 5, 1, 1, 1, 5, 1]
    },
    {
        name: "Indiana Jones",
        photo: "https://upload.wikimedia.org/wikipedia/en/8/8e/Indiana_Jones_in_Raiders_of_the_Lost_Ark.jpg",
        scores:[5, 1, 1, 5, 1, 1, 1, 1, 1, 1]
    },
    {
        name: "Jack Torrance",
        photo: "https://m.media-amazon.com/images/M/MV5BOGZhNWRhMDMtZGYxMi00NDhlLWIxM2QtYmJkMzEzNDgwMDE2XkEyXkFqcGdeQXVyNjE3NjA1MzQ@._V1_.jpg",
        scores: [1, 1, 5, 1, 1, 5, 1, 1, 1, 1]
    },
    {
        name: "Rocky Balboa",
        photo: "https://m.media-amazon.com/images/M/MV5BZmFkMTM3YWYtOGIzMy00YzYwLThhMmQtNWU4OTY4NTA1ZmIwXkEyXkFqcGdeQXVyNzc5NjM0NA@@._V1_.jpg",
        scores: [1, 1, 1, 1, 1, 1, 5, 1, 1]
    },
    {
        name: "Princess Leia Organa",
        photo: "https://lumiere-a.akamaihd.net/v1/images/leia-organa-feature-image_d0f5e953.jpeg?region=0%2C0%2C1280%2C720&width=768",
        scores: [1, 1, 1, 1, 1, 1, 1, 5, 1, 5]
    },
    {
        name: "Vito Corleone",
        photo: "https://m.media-amazon.com/images/M/MV5BNGU4NmRlYjctZDgwYi00NTAzLTk4ZGMtZTU2Yzc0NDI0NTcyXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_SY1000_CR0,0,653,1000_AL_.jpg",
        scores: [1, 5, 1, 1, 1, 1, 1, 1, 5, 1]
    }
]

//code to export array to make accesible to other files through require

module.exports = friendsData;