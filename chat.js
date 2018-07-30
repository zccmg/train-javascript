window.onload = function () {
	var textArea = document.getElementById("input");
	var ul = document.getElementById("message");

	textArea.onkeyup = function(e) { 
		if(e.keyCode == 13) { 
			var value = textArea.value;
			textArea.value = "";
			var li = document.createElement("li");
			li.textContent = value;
			ul.appendChild(li);
		} 
	}
}

//TODO: localstorage ku shub chat history
//TODO: add name
//TODO: add some style