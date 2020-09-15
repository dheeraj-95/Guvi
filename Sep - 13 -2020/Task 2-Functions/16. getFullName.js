/*
Problem:
Write a function called “getFullName”.
Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.
*/
function getFullName(name){
	return name.join("");
}
let a = [, 'GEEK'];
let b = ['GUVI',];
let c = ['', ''];
console.log(getFullName(a));
console.log(getFullName(b));
console.log(getFullName(c));