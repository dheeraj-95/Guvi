//Sum of all numbers in an array
var arr = [1,2,3,4,5,6,7,8];
var sum = 0;

(function(){
	for(i=0; i<arr.length; i++){
		sum += arr[i];
	}
	console.log(sum);
})();
