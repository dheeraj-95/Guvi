const container = createClass('div','container');
container.classList.add('h-100');

const row = createClass('div', 'row');
row.classList.add('align-items-center');
row.classList.add('justify-content-center');
row.classList.add('h-100');

const col = createClass('div', 'text-center');
col.classList.add('col-sm-6');
col.classList.add('col-md-6');
col.classList.add('col-lg-4');
col.setAttribute('id','end');

const h1 = createClass('h1');
h1.setAttribute('id','finalScore');

const form = createClass('form', 'form-group');

const inputForUser = createClass('input', 'form-control');
inputForUser.setAttribute('type','text');
inputForUser.setAttribute('id','username');
inputForUser.setAttribute('name','username');
inputForUser.setAttribute('placeholder','username');

const btnToSaveName = createClass('button','btn');
btnToSaveName.setAttribute('type','submit');
btnToSaveName.classList.add('btn-dark');
btnToSaveName.classList.add('form-control');
btnToSaveName.setAttribute('id','saveScoreBtn');
btnToSaveName.setAttribute('disabled','');
btnToSaveName.setAttribute('onclick','saveHighScore(event)');
btnToSaveName.innerText = 'Save';

const pTag = createClass('p', 'text-center');

const playAgain = createClass('a', 'btn');
playAgain.classList.add('btn-success');
playAgain.setAttribute('href', './game.html');
playAgain.setAttribute('id', 'playAgain');
playAgain.innerText = 'Play Again';

const goHome = createClass('a', 'btn');
goHome.classList.add('btn-primary');
goHome.setAttribute('href', '../index.html');
goHome.setAttribute('id', 'goHome');
goHome.innerText = 'Go Home';

pTag.append(playAgain,  createClass('br'), goHome);
form.append(inputForUser, createClass('br'), btnToSaveName);
col.append(h1, form, pTag);
row.appendChild(col);
container.appendChild(row);
document.body.appendChild(container);

function createClass(elementName, className) {
    let tag = document.createElement(elementName);
    if (className) {
        tag.classList.add(className);
    }
    return tag;
}


const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
};