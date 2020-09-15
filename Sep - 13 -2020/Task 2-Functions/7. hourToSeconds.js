/*
Problem:
Convert Hours into Seconds
Write a function that converts hours into seconds.
*/

var arr = [1, 2, 3];
function hourToSeconds(arr) {
	for(let i=0; i<arr.length; i++){
		arr[i] = arr[i] * 60 * 60;
	}
	return arr;
}
var data = hourToSeconds(arr);
console.log(data);