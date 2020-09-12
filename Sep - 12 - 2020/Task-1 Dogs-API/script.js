let request = new XMLHttpRequest();
let web_link = "https://dog.ceo/api/breeds/list/all"

request.open("GET", web_link, true);
request.onload = function () {
  var data = JSON.parse(this.response);
  console.log(data); 
}

request.send();

//fetch(web_link).then(res=>res.json()).then(data=>console.log(data)).catch(err=>console.log(err))
