//module.exports = []; // sets it equal to a blank object

function printAvatar() {
	console.log("Avatar: PG-13");
}

function printChappie() {
	console.log("Chappie: R");
}

// Export this avatar function
module.exports.avatar = printAvatar;

module.exports.chappie = printChappie;

// get rid of the code above
module.exports = {

	printAvatar: function()
	{
		console.log('Avatar');
	},

	printChappie: function()
	{
		console.log("Chappie");
	},

	favMovie: "The Matrix"
};
