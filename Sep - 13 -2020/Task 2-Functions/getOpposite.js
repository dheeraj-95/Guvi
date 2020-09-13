var num = 5;
function getOpposite(num) {
	if(typeof(num) === 'number' && num === parseInt(num) && num !== 0){
		return -num;
	}
	else if(num === 0){
		return '0';
	}
	else{
		return '-1';
	}
}
var result = getOpposite(num);
console.log(result);
// getOpposite(5);
// getOpposite(0);
// getOpposite(-5);
// getOpposite('5a');
// getOpposite(5.5);