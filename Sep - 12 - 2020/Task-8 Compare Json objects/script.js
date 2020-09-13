//How to compare two JSON have the same properties without order?

var obj1 = {"name":"GUVI","class":"FS"};
var obj2 = {"class":"FS","name":"GUVI"};

var keys_obj1 = Object.keys(obj1);
var keys_obj2 = Object.keys(obj2);

var flag = false;
if(keys_obj1.length === keys_obj2.length){
	for(let key in obj1){
		if(obj1[key] == obj2[key]){
			flag = true;
		}else{
			flag = false;
			break;
		}
	}
}
console.log((flag)? 'Objects are Equal' : 'Objects are not Equal');
