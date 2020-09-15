//Remove duplicates from an array

var arr = [1, 2, 4, 2, 1, 5];
(function(){
	var obj = {};
	for(let i=0; i<arr.length; i++){
		if(obj[arr[i]] === undefined){
			obj[arr[i]] = 1;
		}else{
			obj[arr[i]]++;
		}
	}
	var keys = Object.keys(obj);
	arr.length = 0;
	for(let j=0; j<keys.length; j++){
		if(obj[keys[j]] === 1){
			arr.push(+keys[j]);
		}
	}
	console.log(arr);
})()
