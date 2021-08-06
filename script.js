'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

console.log(document.querySelector('.answer').textContent);
document.querySelector('.answer').textContent = '13';

document.querySelector('.score').textContent = '💯 Score: 23';
document.querySelector('.input').value = 23;
console.log(document.querySelector('.input').value);

*/

// let count = 0;

let score = 20;
let highScore = 0;
const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.answer').textContent = '?';


//Add 'click' event for check button
document.querySelector('.check').addEventListener('click', function () {
    let userAnswer = Number(document.querySelector('.input').value);
    //when there is no too high
    if (!userAnswer) {
        console.log("⛔No input!!!");

        //when player wins
    } else if (userAnswer === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.high-score').textContent = `🥇 Highscore: ${highScore}`;
        }

        document.querySelector('body').style.backgroundColor = '#66a80f';
        document.querySelector('.answer').textContent = secretNumber;

        //when guess is too low
    } else if (userAnswer < secretNumber) {
        document.querySelector('.message').textContent = '👇 Too low!';
        score--;
        document.querySelector('.score').textContent = `💯 Score: ${score}`;
        if (score === 0) {
            document.querySelector('.message').textContent = '😢 GAME OVER!!!';
            document.querySelector('.input').value = '';

        }

        //when guess is too high
    } else {
        document.querySelector('.message').textContent = '👇 Too high!';
        score--;
        document.querySelector('.score').textContent = `💯 Score: ${score}`;
        if (score === 0) {
            document.querySelector('.message').textContent = '😢 GAME OVER!!!';
            document.querySelector('.input').value = '';
        }
    }
})


document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.answer').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#343a40';
    document.querySelector('.message').textContent = '❓ Start guessing...';
    score = 20;
    document.querySelector('.score').textContent = `💯 Score: ${score}`;
    document.querySelector('.input').value = '';
})