//Parsing an JSON object and convert it to a list:
var object = {name: 'ISRO', age: 35, role: 'Scientist'};

function convertListToObject(obj) {
	return Object.entries(obj);
}
console.log(convertListToObject(object))