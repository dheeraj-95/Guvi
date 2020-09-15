/*
Problem:
Create a function that takes a string and returns it as an integer.
*/

var mystr = "5";
function toInteger(mystr) {
	return +mystr;
}
var myint = toInteger(mystr);
console.log(myint)