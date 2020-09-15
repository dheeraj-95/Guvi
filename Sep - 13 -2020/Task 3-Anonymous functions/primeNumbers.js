//Return all the prime numbers in an array
var arr = [1,3,5,6,4,236,346,45];

var primes = function(arr){
	var result = [];
	for(let i=0; i<arr.length; i++){
		var count = 0;
		if(arr[i] !== 0 && arr[i] !== 1){
			for(let j=2; j<arr[i]; j++){
				if(arr[i]%j === 0)
					count++;
			}
			if(count === 0){
				result.push(arr[i]);
			}	
		}	
	}
	return result.join(" ")
}
console.log(primes(arr));