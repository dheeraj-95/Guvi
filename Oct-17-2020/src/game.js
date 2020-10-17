// const container = createClass('div', 'container');
// container.classList.add('h-100')

// const row = createClass('div','row');
// row.classList.add('h-100');
// row.classList.add('justify-content-center');
// row.classList.add('align-items-center');

// const loader = createClass('div','loader');

// const innerRow = createClass('div', 'row');
// innerRow.classList.add('d-none');
// innerRow.setAttribute('id','game');

// const col = createClass('div', 'col');
// // col.classList.add('col-md-6');
// // col.classList.add('col-lg-4');
// // innerRow.innerText = 'sdgsd sdgsdgjsndj jksbdjbsdl jsndgjb';

// innerRow.append(col);
// row.append(loader);
// row.append(innerRow);
// container.append(row);
// document.body.appendChild(container);

const fetchData = async (url) => {
    try {
        let response = await fetch(url);
        if (response.status === 200) {
            const data = await response.json();
            return data;
        } else {
            throw Error('Request Failed!');
        }
    } catch (e) {
        if (e.message == 'Request Failed!') {
            alert('Unable to get data from server!');
        }
        console.log(e);
    }
}

function startTimer() {
    var time_in_minutes = 5;
    var current_time = Date.parse(new Date());
    var deadline = new Date(current_time + time_in_minutes * 60 * 1000);
    function time_remaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return { 'total': t, 'days': days, 'hours': hours, 'minutes': minutes, 'seconds': seconds };
    }

    //function to run timer
    function run_clock(id, endtime) {
        var clock = document.getElementById('timer');
        function update_clock() {
            var t = time_remaining(endtime);
            document.getElementById("timer").innerHTML = t.minutes + ':' + t.seconds;

            if (t.total <= 0) {
                clearInterval(timeinterval);
                location.replace("end.html");
            }
        }
        update_clock();
        var timeinterval = setInterval(update_clock, 1000);
    }
    run_clock('timer', deadline);
}



const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('#choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const loader = document.querySelector('.loader');
const game = document.querySelector('.game');

// console.log(question,'-------------');
// console.log(choices, '=----======');
// const choiceNumber = document.querySelector('#choice-text');
// console.log(choiceNumber);

// console.log(progressText, '------');
// console.log(scoreText,'------');
// console.log(progressBarFull, '------');
// console.log(loader, '=======');
// console.log(game,'=====');


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [];

const url = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple';

const getQuestionsData = async () => {
    try{
        let response = await fetchData(url);
        questions = response.results.map(obj => {
            const formatQues = {
                question : obj.question,
            };
    
            const answerChoices = [...obj.incorrect_answers];
            formatQues.answer = Math.floor(Math.random() * 4) + 1;
    
            answerChoices.splice(formatQues.answer -1 , 0, obj.correct_answer);
            // console.log(answerChoices, obj.correct_answer);
            // console.log("-----------------------------");
            // console.log(formatQues);
    
            answerChoices.forEach((choice, index) => {
                formatQues['choice' + (index + 1)] = choice;
            });
    
            return formatQues;
        });
        // console.log(questions);
        startGame();
    }catch(e){
        console.warn(e);
    }
}
getQuestionsData();


// //CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
    game.classList.remove('d-none');
    loader.classList.add('d-none');
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to the end page
        return window.location.assign('./end.html');
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    //Update the progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerHTML = currentQuestion.question;

    choices.forEach((choice) => {
        // const choiceNumber = document.querySelector('#choice-text');
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};

function createClass(elementName, className) {
    let tag = document.createElement(elementName);
    if (className) {
        tag.classList.add(className);
    }
    return tag;
}