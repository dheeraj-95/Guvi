//Return all the palindromes in an array
var arr = ['civic', 'madam', 'level', 'banana', 'apple'];

var result = arr.filter(item => {
	var str = item.split("").reverse().join("");
	if(item === str){
		return item;
	}
});
console.log(result.join(" "));