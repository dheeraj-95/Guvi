/*
Problem:
Write a function called “removeProperty”.
Given an object and a key, “removeProperty” removes the given key from the given object.
*/
var obj = {name : "Guvi"};
function removeProperty(obj, key){
	delete obj[key];
	return obj[key]
}
console.log(removeProperty(obj, 'name'));