/*
Problem:
Write a function called “areBothOdd”.
Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
*/

function areBothOdd(num1, num2){
	return (num1 % 2 === 1 && num2 % 2 === 1);
}
console.log(areBothOdd(1, 3));