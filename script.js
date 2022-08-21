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

// to prevent both winners
let playing = true;

// rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
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
    }
  }
});

// work with the btnhold
btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. add current score to activ player score
    scores[activPlayer] += currentScore;
    document.getElementById(`score--${activPlayer}`).textContent =
      scores[activPlayer];

    // 2. check if user >= 100
    if (scores[activPlayer] >= 20) {
      // set playing to false
      playing = false;
      // :hide th image of dice
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activPlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activPlayer}`)
        .classList.remove("player--active");
    } else {
      // 3. switch player
      document.getElementById(`current--${activPlayer}`).textContent = 0;
      // change the activ playr
      activPlayer = activPlayer === 0 ? 1 : 0;
      currentScore = 0;
      player0El.classList.toggle("player--active");
      player1El.classList.toggle("player--active");
    }
  }
});

// wowrk with btn new and set all value to initial status
btnNew.addEventListener("click", function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  diceEl.classList.add("hidden");
  scores = [0, 0]; // use alt+arrow to move it
  currentScore = 0;
  activPlayer = 0;
  playing = true;
});
