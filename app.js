function placeAndOrder(orderNumber)
{
	// customer order 1, cutomer 2 and so on and so forth
	console.log("Customer order:", orderNumber);

	cookAndDeliverFood(function() 
	{
		// Scheduling this bit of code to run in 5 seconds
		console.log("Delivered food order:", orderNumber);
	});

}

// Querying the Database
// Simulate a 5 second operation
function cookAndDeliverFood(callback)
{
	// 'call me back', DB calls back the server when the request is done
	setTimeout(callback, 5000); // setting a schedule
}

// Simulate users web request
// 6 different users trying to connect to the DB
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);

// Tut5 - when working with Node, everything is a reference
var Bucky = {
	favFood: 'bacon';,
	favMovie: 'Chappie'
};

// No copy is made, you're making a ref to Bucky
var Person = Bucky;
Person.favFood = 'salad';
console.log(Bucky.favFood); 

// Tut6 - this
var Bucky = {
	printFirstName: function()
	console.log("My name is Bucky");
	console.log(this === Bucky);
};

Bucky.printFirstName(); // this refers to whatever thing that is calling it
// Bucky (an object) is calling it
// This test will be true

// The default calling context is global
// ie. if we build a function and it doesn't belong to any object, then it's global
function DoSomethingWorthless()
{
	console.log("\nI am worthless");
	console.log(this === Bucky);
}

DoSomethingWorthless(); 

// Tut7
function User() {
	this.name = "";
	this.life = 100;
	// giving life to whoever is hurt
	this.giveLife = function giveLife(targetPlayer)
	{
		targetPlayer.life += 1;

		console.log(this.name + " gave 1 life to " + targetPlayer.name);
	}
}

// Whenever we create a user, they don't have any name
// They have a default life of 100
var Bucky = new User();
var Wendy = new User();

// Naming them
Bucky.name = "Bucky";
Wendy.name = "Wendy";

Bucky.giveLife(Wendy);
console.log("Bucky: " + Bucky.life);
console.log("Wendy: " + Wendy.life);
// Print out 100 for Bucky and 101 for Wendy

// Prototype lets you add additional methods or functionss onto the User object
// You can add fucntions to all objects
User.prototype.uppercut = function uppercut(targetPlayer) {
	targetPlayer.life -= 3;
	console.log(this.name + " just uppercutted " + targetPlayer.name);
}

Wendy.uppercut(Bucky);
console.log("Bucky: " + Bucky.life);
console.log("Wendy: " + Wendy.life);

// Magic
// You can add properties to all objects
User.prototype.magic = 60;
console.log(Bucky.magic);
console.log(Wendy.magic);
