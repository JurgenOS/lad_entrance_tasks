const fs = require('fs');
const readline = require('readline');
const readlineSync = require('readline-sync');
// const questionDir = '/home/jos/Downloads/lad_nn/task_3/questions';
const questionDir = '/home/jos/Downloads/node-v12.16.1-linux-x64/bin/lad/task_3/questions/';


function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function readFileIntoList(pathToFile){
    let lines = [];

    let data = fs.readFileSync(pathToFile);

    lines = data.toString().split(/\r?\n/);

    // console.log(lines);
    return lines
    }

function askQuestion(fullQuestionFileName) {
    let currentQuestion = readFileIntoList(fullQuestionFileName);
    let answer = readlineSync.question(
        currentQuestion[0] + '\n' + currentQuestion[2] + '\n' + currentQuestion[3] + '\n' + currentQuestion[4] + '\n'  + currentQuestion[5] + '\n'
    );

    if (answer === currentQuestion[1]) {
        // console.log('correct!');
        return true
    } else {
        // console.log('incorrect!');
        return false
    }
}
function countNumbersOfQuestions(pathToDir){
   return  fs.readdirSync( pathToDir, function(error, files) {}).length;
}

let positiveAnswers = 0;
let negativeAnswers = 0;

for (i=0;i<5;i++){

    let filesNumbers = [];
    let questionFileName = '';

    while(true) {
        let randomNumber = randomInteger(
            1,
            countNumbersOfQuestions(questionDir)
        );

        if (randomNumber in filesNumbers) continue;

        questionFileName = questionDir + '/' + 'question_' + randomNumber;

        filesNumbers.push(randomNumber);
        break;
    }

    if (askQuestion(questionFileName)){
        positiveAnswers ++
    }else{
        negativeAnswers ++
    }

}

console.log(
    `there are ${positiveAnswers} positive answers and`+ '\n' +`there are ${negativeAnswers} negative answers`
);
