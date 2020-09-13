//Parsing JSON objects and Compare:

var securityQuestions = [
    {
        question: 'What was your first pet\’\s name?',
        expectedAnswer: 'FlufferNutter'
    },
    {
        question: 'What was the model year of your first car?',
        expectedAnswer: '1985'
    },
    {
        question: 'What city were you born in?',
        expectedAnswer: 'NYC'
    }
];
var flag = false;
function chksecurityQuestions(securityQuestions, question, answer) {
    for(let item of securityQuestions){
        if((item.question === question) && (item.expectedAnswer === answer)){
            flag = true;
            break;
        }
    }
    return flag;
}

var ques = 'What was your first pet\’\s name?';
var ans  =  'DufferNutter';
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // false