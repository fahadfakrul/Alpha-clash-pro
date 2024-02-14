// to hide and show

// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function handleKeyboardKeyUpEvent(event) {
  const playerPressed = event.key;
  // console.log('player pressed', playerPressed);

  // get the expected to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();

  // check matched or not
  if (playerPressed === expectedAlphabet) {
    console.log("You got a point");
    // console.log('You have pressed correctly',expectedAlphabet);
    const currentScoreElement = document.getElementById("current-score");
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);

    const newScore = currentScore + 1;

    currentScoreElement.innerText = newScore;

    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log("You not got a point");
    const currentLifeElement = document.getElementById("current-life");
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);

    const newLife = currentLife - 1;

    currentLifeElement.innerText = newLife;
  }
}
//capture keyboard press
document.addEventListener("keyup", handleKeyboardKeyUpEvent);

function continueGame() {
  // generate a random alphabet
  const alphabet = getARandomAlphabet();
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  setBackgroundColorById(alphabet);
}

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}
