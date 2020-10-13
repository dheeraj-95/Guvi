const apiKey = 'a5d42a377fd2a24f2eda684df8102354';
let container = createClass('div','container');
container.classList.add('container-sm');
container.classList.add('container-md');
container.classList.add('container-lg');
container.classList.add('container-xl');
let row1 = createClass('div','row');

container.append(row1);
document.body.appendChild(container);

function createClass (elementName, className) {
    let tag = document.createElement(elementName);
    if(className){
        tag.classList.add(className);
    }
    return tag;
}

function createCard(countryName, flagpath, countryCapital, region, countryCode){
    let col = createClass('div');
    col.classList.add('col-lg-4');
    col.classList.add('col-sm-12');

    let card = createClass('div','card');
    let cardHeader = createClass('div','card-header')
    cardHeader.classList.add('text-center');
    cardHeader.classList.add('bg-dark');
    cardHeader.classList.add('text-white');
    cardHeader.innerText = countryName;

    let flag = createClass('img','card-img-top');
    flag.classList.add('img-fluid');
    flag.setAttribute('src',flagpath);
    flag.setAttribute('alt',`${countryName} flag`);

    let cardBody = createClass('div','card-body');

    let capital = createClass('p','card-text');
    capital.classList.add('text-center');
    capital.innerText = `Capital : ${countryCapital}`;

    let reg = createClass('p','card-text');
    reg.classList.add('text-center');
    reg.innerText = `Region : ${region}`;

    let cCode = createClass('p','card-text');
    cCode.classList.add('text-center');
    cCode.innerText = `Country Code : ${countryCode}`;

    let divForButton = createClass('div','text-center');
    let buttonTag = createClass('button','btn');
    buttonTag.classList.add('btn-primary');
    buttonTag.innerText = 'Click For Weather';

    let weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${countryCapital},${countryCode}&appid=${apiKey}`;
    let result;
    
    let pTagForBtn = createClass('p','card-text');
    buttonTag.addEventListener('click', function(){
        pTagForBtn.classList.add('text-center');
        fetchData(weatherApi)
          .then(data => {
            if(data){
                result = data.main.temp;
                pTagForBtn.innerText = `Temperature : ${result}K`;  
            }
        })
        .catch(err => console.error(err));

    });
    divForButton.append(buttonTag,pTagForBtn,createClass('br'));

    cardBody.append(capital, reg, cCode, divForButton);
    card.append(cardHeader, createClass("br"), flag, cardBody);
    col.append(card,createClass('br'));

    row1.append(col);

}

function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
          .then(res => res.json())
          .then(data => resolve(data))
          .catch(err => reject(err));
    })
}

let countriesApi = 'https://restcountries.eu/rest/v2/all';
fetchData(countriesApi)
  .then(country => {
      country.forEach(obj => {
          createCard(obj.name, obj.flag, obj.capital, obj.region, obj.alpha3Code);
      })
  })
  .catch(e => console.error(e));