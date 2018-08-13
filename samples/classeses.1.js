
var parent = ""
function User() {


	this.name = ""
	this.age = 0

	this.print = function() {
		return this.name + " " + parent + " " + this.age 
	}
}


var user = new User();
parent = "Mustaf"

var user2 = new User();
parent = "Jaamac"

user.name = "Geedi"
user2.name = "faarax"

console.log("USER 1")
console.log(user.print())

console.log("USER 2")
console.log(user2.print())