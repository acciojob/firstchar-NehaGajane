function firstChar(text) {
  // your code here
	if(text.length <= 0) return "";
	
	let x;
	
	if(text.charAt(0) == " " && text.length >=0) {
		x = text.charAt(1);
	}
	return x;
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
