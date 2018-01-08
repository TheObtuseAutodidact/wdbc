function myForEach(arr, func) {
    for(var i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

Array.prototype.myForEach = function(func) {
    for (var i = 0; i < this.length; i++) {
        func(this[i]);
    }
}

var colors = ["red", "orange", "yellow"]
var movies = ["The Godfather", "Star Wars", "Jaws"]


myForEach(colors, alert);
myForEach(colors, function(color) { 
    alert(color);
});

colors.myForEach(function(color) {
    console.log(color);
})

movies.myForEach(function(movie) {
    console.log(movie);
})