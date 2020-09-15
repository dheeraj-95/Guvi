/*
Problem:
Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”
*/
console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt){
// your code here
	var n = 0;
	var i = 2
	var res = [];
	while(startAt){
		if(res.length === 10)
			break;
		if(isPrime(startAt)){
			res.push(startAt);
		}
		startAt++;
	}
	// for(let i = 2; i < startAt; startAt++){
	// 	if(res.length === 10){
	// 		break;
	// 	}
	// 	if (isPrime(startAt)){
	// 		//startAt++;
	// 		res.push(startAt);
	// 	}
	// }
	return res;
}
// Returns true if a number is prime
function isPrime(n){
	var count = 0;
 	for(let k = 2; k < n; k++){
 		if(n % k === 0){
 			count++;
 		}
 	}
 	if(count === 0)
 		return true;
}