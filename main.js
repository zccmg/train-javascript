var user = {
	name: "Jaamac",
	age: 32,
	birth: new Date("1980-09-08"),
	brothers: ["Mustaf", "Mayaw", "Xirsi"],
	printInfo: function () {
		var table = document.getElementsByTagName("table")[0]
		table.style.display = "block";
		
		var tds = table.getElementsByTagName("td")

		tds[0].textContent = user.name;
		tds[1].textContent = user.age;
		tds[2].textContent = user.birth.getFullYear();
		tds[3].textContent = user.brothers.join(", ");
	}
}


window.onload = function() {
	var loader = document.getElementById("loader");
	setTimeout(function() {
		loader.style.display = "none"
		user.printInfo();
	}, 2000)
};