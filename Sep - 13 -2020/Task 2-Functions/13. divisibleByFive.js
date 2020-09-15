/*
Problem:
Check if an Integer is Divisible By Five
Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
*/
function divisibleByFive(num1) {
	return (num1 % 5 === 0) ? 'true' : 'false';	
}
var divisible = divisibleByFive(5);
console.log(divisible);