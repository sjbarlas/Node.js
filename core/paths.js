// File module is good when you want to work with file paths
var path = require('path');
var websiteHome = "Desktop/Bucky//thenewboston/index.html";
var websiteAbout = "Desktop/Bucky/thenewboston/about.html";

// Path modules can normalise '/' '\' depending on your OS

console.log(path.normalise(websiteHome));
// It puts all the forward slashes as backward slashes
// It also converts double slashes to one slash
// Need this when working with web servers

console.log(path.dirname(websiteAbout)); // gives name of directory or path without the file portion of it e.g. 'Desktop/Bucky/thenewboston'
console.log(path.basename(websiteAbout)); // looks at the base aka the file name e.g. 'about.html'
console.log(path.extname(websiteAbout)); // type of file e.g. '.html'
