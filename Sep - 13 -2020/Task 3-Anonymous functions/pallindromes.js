//Return all the palindromes in an array
var arr = ['civic', 'madam', 'level', 'banana', 'apple'];

var pallindromes = function(arr){
	var result = [];
	for(i=0; i<arr.length; i++){
		var str = arr[i].split("").reverse().join("");
		if(arr[i] === str){
			result.push(arr[i]);
		}
	}
	return result.join(" ");
}
console.log(pallindromes(arr));
