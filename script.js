function firstChar(text) {
  // your code here
	if(text.length <= 1) return "";
	
	let x;
	
	if(text.charAt(0) == " " && text.length >=0) {
		x = text.charAt(1);
	}
	else {
		x = text.charAt(0);
	}
	return x;
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
