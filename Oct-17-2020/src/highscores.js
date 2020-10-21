const container = createClass('div', 'container');
container.classList.add('h-100');

const row = createClass('div', 'row');
row.classList.add('h-100');
row.classList.add('align-items-center');
row.classList.add('justify-content-center');

const col = createClass('div', 'col-sm-6');
col.setAttribute('id', 'highScores');
col.classList.add('col-md-6');
col.classList.add('col-lg-4');
col.classList.add('text-center');

const heading = createClass('h1');
heading.innerText = 'High Scores';
heading.setAttribute('id', 'finalScore');

const ul = createClass('ul');
heading.setAttribute('id', 'highScoresList');

const homeBtn = createClass('a', 'btn');
homeBtn.innerText = 'Go Home';
homeBtn.classList.add('btn-light');
homeBtn.setAttribute('href', '../index.html');
homeBtn.setAttribute('id', 'goHome');

col.append(heading, ul, homeBtn);
row.append(col);
container.append(row);
document.body.append(container);

const highScoresList = document.querySelector("#highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
    .map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
    })
    .join("");

function createClass(elementName, className) {
    let tag = document.createElement(elementName);
    if (className) {
        tag.classList.add(className);
    }
    return tag;
}