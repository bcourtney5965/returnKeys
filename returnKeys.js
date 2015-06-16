var james = {
	name: "James", 
	age: 25, 
	gender: "male"
}
function returnKeys(argument) {
	var array = [];
	if (argument instanceof Function || argument instanceof Array || typeof(argument) === "string" || typeof(argument) === "number" ) {
		return "Please only use an object as an argument";
	} else if (typeof(argument) === "object") {
		for (var event in argument) {
			array.push(event);
		}
		return array;
	} 
}
returnKeys(variable);