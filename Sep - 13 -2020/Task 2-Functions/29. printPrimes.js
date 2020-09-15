/*
Problem:
Print the first 100 prime numbers
*/
printPrimes(100);
// Function prints the first nPrimes numbers
function printPrimes(nPrimes){
	var n = 0;
 	var i = 2;
 
 	while(n < nPrimes){
 		if(isPrime(i)){
 			console.log(n, ' → ', i);
			n++;	
 		}
 		i++;
 	}
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