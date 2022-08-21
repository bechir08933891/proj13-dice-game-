"use strict";
// select the palyer score
let score0El = document.querySelector("#score--0");
let score1El = document.getElementById("score--1");
// bring the dice class
let diceEl = document.querySelector(".dice");
// bring the 3 btn
let btnNew = document.querySelector(".btn--new");
let btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");
// set those score to zero
score0El.textContent = 0;
score1El.textContent = 0;
// bring the current score
let current0El = document.getElementById("current--0");
let current1El = document.getElementById("current--1");
// plyr selection
let player0El = document.querySelector(".player--0");
let player1El = document.querySelector(".player--1");

// add the hiden class to dice
diceEl.classList.add("hidden");

// player score
let currentScore = 0;

// activ player
let activPlayer = 0;

// set the cores of two player
let scores = [0, 0];

// rolling dice functionality
btnRoll.addEventListener("click", function () {
  // 1. generate a random number between 1 and 6
  let dice = Math.trunc(Math.random() * 6) + 1;

  // 2. display dice images
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  // 3. check of roll dice not one
  if (dice !== 1) {
    // add dice value to current score
    currentScore += dice;
    // bring the current player
    document.getElementById(`current--${activPlayer}`).textContent =
      currentScore;
    // current0El.textContent = currentScore;
  } else {
    document.getElementById(`current--${activPlayer}`).textContent = 0;
    // change the activ playr
    activPlayer = activPlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
    // vid 85
  }
});
