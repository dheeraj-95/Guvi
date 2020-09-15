/*
Problem:
Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
*/

function powersOfTwo(n){
	var res = [];
  	for(let i=0; i<=n; i++){
  		res.push(Math.pow(2,i))
	}
  return res.join(",");
}
console.log(powersOfTwo(0))