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

// HANDLING DIFFERENT USER REQUESTS DEPENDING ON THE PATH
function profile(request, response)
{
	console.log("User requested profile");
}

function forum(request, response)
{
	console.log("User requested forum");
}

// When a user makes request for the profile page, the profile function will be called
app.use('/profile', profile);
app.use('/forum', forum);

http.createServer(app).listen(8888);
console.log("Server is running ...");
