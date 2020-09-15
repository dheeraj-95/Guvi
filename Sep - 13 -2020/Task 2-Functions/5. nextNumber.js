/*
Problem:
Create a function that takes a number as an argument, increments the number by +1 and returns the result.
*/

var myint = 0;
function nextNumber(myint) {
	return ++myint;
}
var myNextint = nextNumber(myint);
console.log(myNextint);