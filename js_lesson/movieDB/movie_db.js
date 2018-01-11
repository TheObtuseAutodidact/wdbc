movies = [
    {
        title: "In Bruges",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Frozen",
        rating: 4.5,
        hasWatched: false
    },
    {
        title: "Mad Max Fury Road",
        rating: 5,
        hasWatched: false
    },
    {
        title: "Les Miserables",
        rating: 3.5,
        hasWatched: true
    }
]

movies.forEach(function(movie) {
    console.log(buildString(movie));
})

function buildString(movie) {
    var seen =  movie.hasWatched ? "seen" : "not seen";
    var title = movie.title;
    var rating = movie.rating;
    return "You have " + seen + " " + title + " - " + rating + " stars";

}