function submitform(event) {
	event.prevent.Default();

	var user = document.getElementById("user").value;
	var password = document.getElementById("password").value;
	if (user === "" || password === "") {
		alert("Please fill out all fields.");
		return false;
}

	if (user === "SEAN" && password === "2005") {
		alert("Login Successful!");
		alert("Welcome, SEAN!");
		return false;
		} else {
			alert ("Invalid Input.");
			return false;
		}
}
		
