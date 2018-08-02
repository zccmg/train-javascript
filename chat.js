window.onload = function () {
	var textArea = document.getElementById("input");
	var ul = document.getElementById("message");

	var name = localStorage.getItem("name");
	if(name == undefined) {
		name = prompt("Enter Your Name!");
		localStorage.setItem("name", name);
	}

	textArea.onkeyup = function(e) { 
		if(e.keyCode == 13) { 
			var value = textArea.value;
			textArea.value = "";
			addMessage(name, value, ul);
			storeMessages(value)
		} 
	}

	var messages = localStorage.getItem("messages");
	if(messages != undefined) {
		messages = JSON.parse(messages)
		for(var i =0; i< messages.length; i++) {
			
			addMessage(name, messages[i], ul)
		}
	}
}

function storeMessages(message) {
	message = message.replace("\n", "")

	var messages = localStorage.getItem("messages");
	if(messages == undefined) {
		messages = []
	} else {
		messages = JSON.parse(messages)
	}

	messages.push(message);

	localStorage.setItem("messages", JSON.stringify(messages));

}

function addMessage(name, value, ul) {

	var li = document.createElement("li");
	var h5 = document.createElement("h5");
	var p = document.createElement("p");

	h5.textContent = name;
	p.textContent = value;

	li.appendChild(h5);
	li.appendChild(p);
	ul.appendChild(li);
}
