//Print odd numbers in an array 
var arr = [10, 51, 89, 42, 69, 35, 72];

arr.forEach(item => {
	if(item%2 === 1){
		console.log(item);
	}
});