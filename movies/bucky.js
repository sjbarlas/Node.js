var movies = require('./movies'); // import that module

var buckyMovies = movies();
buckyMovies.favMovie = "Good Will Hunting";
console.log("Bucky's favourite movie is: " + buckyMovies.favMovie);
