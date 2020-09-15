/*
Problem:
Write a function called “isEven”.
Given a number, “isEven” returns whether it is even.
*/

function isEven(num){
	return (typeof num === 'number') ? (num%2 === 0) : '-1';
}
var even = isEven(15)
console.log(even);