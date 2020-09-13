//Create a new http request using XMLHttpRequest object.
let request = new XMLHttpRequest();
let web_link = "https://dog.ceo/api/breeds/list/all";

try{
	request.pen('GET', web_link, true); // throws error due to wrong method
	request.onload = function(){
		var data = JSON.parse(this.response);
		console.log(data);
	}
	request.send();
}catch(err){
	console.log('Found Error :',err.message);
}