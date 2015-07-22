// Server FW called Connect
// A lot of functionality we commonly write to handle user request has been written and packaged up in a nice FW called Connect 

/* Go to terminal/cmd etc. and type 'npm install connect'
> go to net and look for packagae called connect
> downloads it 
> installs and configures with the project */

var connect = require('connect');
var http = require('http');

// Before we start using connect fw, we need a connect dispatcher
// This is a core connect object
// Takes request and respond arguments

var app = connect(); 
// Whenever we connect to the website, to our server 
// What it will do is look to our code for app ie. as stated above
// It will ask on how to handle the request

// Use a method called use
// Code to handle user request is called middlewear

// Stacking of the functions which Connect allows us to do
/* 1 function */
function doFirst(request, response, next)
{
	console.log("Bacon"); // Whenever they make a request, they get to see bacon in the terminal
	next(); // if this exists, then it will go to the next object in the stack
}

/* 2 function */
function doSecond(request, response, next)
{
	console.log("Tuna"); // Whenever they make a request, they get to see bacon in the terminal
	next(); // used to test if the user has permission to do this or that
}

app.use(doFirst); // run first and then look for the method called next
app.use(doSecond);

http.createServer(app).listen(8888);
console.log("Server is running ...");
