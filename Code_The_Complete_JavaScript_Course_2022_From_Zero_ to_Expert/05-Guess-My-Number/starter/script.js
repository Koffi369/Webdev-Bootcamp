'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🤡 New Start Guessing';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.check').addEventListener('click', function () {
//   console.log('Testing addEventListener');
//   console.log(document.querySelector('.guess').value);
// });

let secretNum = Math.trunc(Math.random() * 20) + 1;

let currentScore = Number(document.querySelector('.score').textContent);

let the_highscore = Number(document.querySelector('.highscore').textContent);

console.log(secretNum);

document.querySelector('.check').addEventListener('click', function () {
  const guessed = document.querySelector('.guess').value;

  //   console.log(guessed, typeof guessed);

  if (!guessed) {
    document.querySelector('.message').textContent =
      'Please insert a number 🤢';
  } else if (secretNum === Number(guessed)) {
    document.querySelector('.message').textContent = 'Your Guess is correct';
    document.querySelector('body').style.backgroundColor = 'green';

    if (currentScore > the_highscore) {
      the_highscore = currentScore;
      document.querySelector('.highscore').textContent = the_highscore;
    }
  } else if (secretNum > Number(guessed)) {
    document.querySelector('.message').textContent = 'A bigger Number';

    currentScore = currentScore - 1;
    document.querySelector('.score').textContent = currentScore;

    console.log(currentScore, typeof currentScore);
  } else {
    document.querySelector('.message').textContent = 'A lower Number';

    currentScore = currentScore - 1;
    document.querySelector('.score').textContent = currentScore;

    console.log(currentScore, typeof currentScore);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...🎮';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = 'black';

  secretNum = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNum);
  document.querySelector('.guess').value = '';
});
