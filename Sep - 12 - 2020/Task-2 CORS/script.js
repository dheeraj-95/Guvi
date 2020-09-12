let request = new XMLHttpRequest();
let web_link = "https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com";
let heroku_link = "https://cors-anywhere.herokuapp.com/";

request.open("GET", heroku_link + web_link, true);
request.onload = function () {
  var data = JSON.parse(this.response);
  console.log(data);
}

request.send();

// fetch(link+'/'+web_link, {mode: 'cors'})
// .then(res=>res.json())
// .then(data => console.log(data))
// .catch(err=>console.log(err))
