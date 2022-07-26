'use strict';

let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 10;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number To Check!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🤑 You Win The Game!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😭 You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = 'rgb(185, 26, 26)';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 10) + 1;

  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '😐';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = 'rgb(9, 67, 82)';
  document.querySelector('.number').style.width = '15rem';
});
