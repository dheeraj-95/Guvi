/*
Problem:
Write a function called “getNthElement”.
Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.
*/
function getNthElement(array,n){
	return (array.length === 0) ? 'undefined' : array[n];
}
console.log(getNthElement([], 1));