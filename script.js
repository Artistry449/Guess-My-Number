'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const messageDOM = document.querySelector('.message');
const numberDOM = document.querySelector('.number');
const bodyDOM = document.querySelector('body');
const highScoreDOM = document.querySelector('.highscore');
const scoreDOM = document.querySelector('.score');
const guessDOM = document.querySelector('.guess');

const displayMessage = function (message) {
    messageDOM.textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);


    if (!guess) {
        displayMessage('No Number🧐');
    }
    // when player wins
    else if (guess === secretNumber) {
        displayMessage('Correct Number!😋')

        bodyDOM.style.backgroundColor = '#60b347';
        numberDOM.style.width = '30rem';
        numberDOM.textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            highScoreDOM.textContent = highscore;
        }
    }
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!📈' : 'Too low!📉');
            score--;
            scoreDOM.textContent = score;
        }
        else {
            displayMessage('You lost the game!💥');
            scoreDOM.textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...')
    scoreDOM.textContent = score;
    guessDOM.value = '';
    numberDOM.textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    numberDOM.style.width = '15rem';
});