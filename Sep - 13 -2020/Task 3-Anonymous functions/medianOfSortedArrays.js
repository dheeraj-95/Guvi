//Return median of two sorted arrays of same size 

var arr1 = [1,3,5,7,9];
var arr2 = [2,4,6,8,10];

var medianOfSortedArrays = function(a,b){
	// var resultArr = (arr1.concat(arr2)).sort((a,b)=>a-b);
	var resultArr = a.concat(b);
	for(let i = 0; i<resultArr.length; i++){
		for(let j = 0; j<resultArr.length; j++){
			if(resultArr[j] > resultArr[j+1]){
				var temp = resultArr[j];			
				resultArr[j] = resultArr[j+1];
				resultArr[j+1] = temp;
			}
		}
	}
	var median = 0;
	median = (resultArr[(resultArr.length)/2 - 1] + resultArr[(resultArr.length)/2])/2; // As we have two arrays of same size, resultant array length will always be even 
	
	return median;
}
console.log(medianOfSortedArrays(arr1,arr2));