// Core modules are already built into node.js

var fs = require('fs'); // file system module
// No need to include the path here, just the name of the module

// Creating a new text file
fs.writeFileSync('corn.txt', 'Corn is good, corn is life');
// this takes 3 parameters ie.
// path - name of the file
// data - text you wanbt inside the file
// optional third para which is not needed

// Reading the files
console.log(fs.readFileSync('corn.txt').toString()); // converts to a string

// File is created
// Reads it 
// Then it logs out
