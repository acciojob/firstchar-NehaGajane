function firstChar(text) {
  // your code here
	if(text.charAt(0)===" ") return "";
	
	let x = text.charAt(0);

	return x;
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
