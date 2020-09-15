/*
Problem
Less Than 100?
Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
*/

function lessThan100(num1,num2) {
	return (num1+num2) < 100 ;
}
var res = lessThan100(83, 34);
console.log(res);