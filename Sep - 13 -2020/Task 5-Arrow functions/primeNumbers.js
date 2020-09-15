//Return all the prime numbers in an array
var arr = [1,3,5,6,4,236,346,45];

var result = arr.filter(item => {
	var count = 0;
	if(item !== 0 && item !== 1){
		for(let j=2; j<item; j++){
			if(item%j === 0)
				count++;
		}
		if(count === 0){
			return item;
		}
	}
});
console.log(result);
