function processForm() {
	var number1 = document.getElementById("number1");
	var number2 = document.getElementById("number2");	
	var content = document.getElementById("output");
	
	for(var j = 1; j <= number2.value; j++){
	output.innerHTML += "<div>";
	  for(var i = 1; i <= number1.value; i++){
		content.innerHTML += i + "";
	  }	
	output.innerHTML += "</div>";
	}
}


