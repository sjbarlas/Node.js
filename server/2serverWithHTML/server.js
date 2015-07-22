// Responsive Server

var http = require('http');

// file system module
var fs = require('fs');

// Send back a 404 response ie. a response for when things go back
function send404Response(response) {
	response.writeHead(404, {"Contect-Type": "text/plain"});
	response.write("Error 404! Page not Found!");
	response.end(); // knows we're done writing the data and it can send it off
}

// Handle a User request 
// Responsible for:
// Listening for requests AND sending back whatever they requested
function onRequest(request, response) {
	// Inside if: we will inspect for request
	if(request.method == 'GET' && request.url == '/') // '/' = they are trying to connect to the home page
	{
		response.writeHead(200, {"Contect-Type": "text/html"}); // sending back a HTML doc

		// we don't know how big our file is or if the file size will get changed etc
		// Hence we want to send it back in a stream
		// BECAUSE we want to avoid errors and have it perform well

		fs.createReadStream("./temp.html").pipe(response); // pipe it out or write/feed it out the stream to the response object which is pretty much the response we're sending back ie. we're going to send the info 'temp.html' through the response object
	}

	else // trying to connect to the page we don't have 
	{
		send404Response(response);
	}

}

http.createServer(onRequest).listen(8888);
console.log("Server is now running ... ");
