
var Safari = function (param) {
	if(typeof param == "string") {
		console.log(param)
	} else if(typeof param == "function") {
		window.onload = param
	} else {
		console.error("Unknown Type")
	}
}


Safari("I'm String")

Safari(function() {
	document.getElementsByTagName("p")[0].textContent = "Soo dhawoow"
})