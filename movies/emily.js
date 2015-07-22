var movies = require('./movies'); // import that module

var emilyMovies = movies();
emilyMovies.favMovie = "The Notebook";
console.log("Emily's favourite movie is: " + emilyMovies.favMovie);
