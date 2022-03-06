"use strict";

const textResult =
  document.querySelector(
    ".js-result-text"
  );
let headsScore = 0;
let tailsScore = 0;
const headsCount =
  document.querySelector(
    ".js-heads-result"
  );
const tailsCount =
  document.querySelector(
    ".js-tails-result"
  );

function flipCoin() {
  let randomNumber = Math.floor(
    Math.random() * 30 + 1
  );
  if (randomNumber <= 15) {
    headsScore++;
    headsCount.innerHTML = headsScore;
    textResult.innerHTML =
      "The coin has landed on HEADS!";
  } else {
    tailsScore++;
    tailsCount.innerHTML = tailsScore;
    textResult.innerHTML =
      "The coin has landed on TAILS!";
  }
}

document
  .querySelector(".js-flip-btn")
  .addEventListener("click", flipCoin);

document
  .querySelector(".js-reset-btn")
  .addEventListener("click", reset);

function reset() {
  location.reload();
}

//# sourceMappingURL=main.js.map
