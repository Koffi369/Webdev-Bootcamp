'use strict';

const rollBtn = document.querySelector('.btn--roll');
const newBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');

const diceEl = document.querySelector('.dice');

const player0El = document.querySelector('.player--0');
const score0El = document.querySelector('#score--0');

const player1El = document.querySelector('.player--1');
const score1El = document.querySelector('#score--1');

console.log(typeof Number(score1El));

console.log(diceEl.src);

rollBtn.addEventListener('click', function () {
  const numdice = Math.trunc(Math.random() * 6) + 1;
  console.log(numdice);
  diceEl.src = `dice-${numdice}.png`;
  console.log(diceEl.src);

  if (player0El.classList.contains('player--active')) {
    document.querySelector('#current--0').textContent = numdice;
    score0El.textContent = Number(score0El.textContent) + Number(numdice);
  } else {
    document.querySelector('#current--1').textContent = numdice;
    score1El.textContent = Number(score1El.textContent) + Number(numdice);
  }
});

{
  /* <section class="player player--0 player--active"></section> */
}
