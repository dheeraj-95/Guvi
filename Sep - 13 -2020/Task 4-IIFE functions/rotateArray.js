//Rotate an array by k times and return the rotated array

var arr = [1, 2, 3, 4, 5];
k = 3;
(function(){
	
	for(i=0; i<k; i++){
		var last_element = arr[arr.length - 1];
		arr.length = arr.length - 1;
		arr = [last_element].concat(arr);
	}
	console.log(arr);
})();
