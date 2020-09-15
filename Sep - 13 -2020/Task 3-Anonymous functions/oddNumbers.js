//Print odd numbers in an array 
var arr = [10, 51, 89, 42, 69, 35, 72];

var oddNumbers = function(arr){
	for(let i=0; i<arr.length; i++){
		if(arr[i]%2 === 1){
			console.log(arr[i]);
		}
	}
}
oddNumbers(arr)