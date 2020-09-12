let request = new XMLHttpRequest();
let web_link = "http://api.openweathermap.org/data/2.5/weather?q=goa,india&appid=a5d42a377fd2a24f2eda684df8102354"

request.open("GET", web_link, true);
request.onload = function () {
  var data = JSON.parse(this.response);
  console.log(data);
}

request.send();

//fetch(web_link).then(res=>res.json()).then(data=>console.log(data))
