/*
Problem:
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
*/
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
	var sum_of_Negatives = 0;var count = 0;
	arr.filter((i) => {
		if(i<0){
			sum_of_Negatives += i; 
		}
		if(i>0)
			count++;
	});
	return [count,sum_of_Negatives];
}
console.log(ar2(arr));