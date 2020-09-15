//Sum of all numbers in an array
var arr = [1,2,3,4,5,6,7,8];

var sum_of_numbers = arr.reduce((sum,item) => {
	return sum += item;
},0);
console.log(sum_of_numbers);