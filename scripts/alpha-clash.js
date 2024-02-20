// to hide and show

// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }
let isGamePlayOn = false;

const artBoard = document.getElementById("artboard");
const modalBox = document.getElementById("modal-box");
function handleKeyboardKeyUpEvent(event) {
  if (isGamePlayOn === false) return;
  const playerPressed = event.key;
  // console.log('player pressed', playerPressed);

  const audio = new Audio();

  if (playerPressed === "Escape") {
    gameOver();
  }
  // get the expected to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();

  // check matched or not
  if (playerPressed === expectedAlphabet) {
    console.log("You got a point");
    // console.log('You have pressed correctly',expectedAlphabet);
    audio.src = "../audios/right.mp3";
    audio.play();
    const currentScore = getTextElementValueById("current-score");
    const updatedScore = currentScore + 1;
    setTextElementValueById("current-score", updatedScore);

    // update score
    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);

    // const newScore = currentScore + 1;

    // currentScoreElement.innerText = newScore;

    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    audio.src = "../audios/wrong.mp3";
    audio.play();
    const currentLife = getTextElementValueById("current-life");
    const updatedLife = currentLife - 1;
    const updatedLifePercentage = (updatedLife / 5) * 100;
    artBoard.style.background = `linear-gradient(#FFFFFFB3 ${updatedLifePercentage}%,red)`;
    setTextElementValueById("current-life", updatedLife);

    if (updatedLife === 0) {
      audio.src = "../audios/gameover.mp3";
      audio.play();
      gameOver();
    }

    // console.log("You not got a point");
    // const currentLifeElement = document.getElementById("current-life");
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);

    // const newLife = currentLife - 1;

    // currentLifeElement.innerText = newLife;
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

function audio(){
  const audio = new Audio();
  audio.src = "../audios/play.mp3";
  audio.play();
}

function play() {
  isGamePlayOn = true;
  // hide everthing and set to pg
  hideElementById("home-screen");
  hideElementById("final-score");
  showElementById("play-ground");
   audio();
  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);
  // audio.src = "../audios/play.mp3";
  // audio.play();
  continueGame();
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");
  // update final score
  const lastScore = getTextElementValueById("current-score");
  setTextElementValueById("last-score", lastScore);

  // clear selected alphabet at last
  const currentAlphabet = getElementTextById("current-alphabet");
  removeBackgroundColorById(currentAlphabet);
  isGamePlayOn = false;
  artBoard.style.background = "linear-gradient(#FFFFFFB3 100% , red)";
}

function modalOpen(event) {
  if (event.clientY < 20) {
    modalBox.style.display = "flex";
  }
}
function modalClose(event) {
  modalBox.style.display = "none";
}
document.body.onmousemove = modalOpen;
