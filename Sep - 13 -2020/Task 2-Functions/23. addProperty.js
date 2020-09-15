/*
Problem:
Write a function called “addProperty”.
Given an object and a key, “addProperty” adds a new property on the given object with a value of true.
*/

var obj = {};
function addProperty(obj, key){
	(obj[key] === undefined) ? obj[key] = true : '';
	return obj;
}
console.log(addProperty(obj,'mykey'))