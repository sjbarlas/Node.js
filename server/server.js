// HTTP Server
// Below code will be on the server
var http = require('http');

// Whenever a user wants to connect to our server, we need to call the function 'onRequest'
function onRequest(request, response) {
	console.log("A user made a rquest " + request.url);

	response.writeHead(200, {"Context-Type": "text/plain"})
	// 1. status code ie. 404 [request can't be found], 200 [everything went ok] etc.
	// 2. header info ie. what type of data is being sent back, files etc

	response.write("Here is some data"); // what you will show them

	response.end();

}
// request = info about the user's request ie. info, webpage they tryna get
// response = object we can send back to them ie. status info (connection was good wagera wagera)

// Server will be listening to traffic or listening to the requests of the user through this port
http.createServer(onRequest).listen(8888); // callback or the code you want to run whenever the user tries to connect to your server
console.log("Server is now running ... ");

/*
- When you referesh the page on the browser, it shows that the user made 2 requests
- Whenever a user tries to connect to your server
- Your broswer first sends a request to whatever page they were looking for
- It also makes another request for the favicon ie. the icon that is used for the tab of the site 
*/
