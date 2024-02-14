
// to hide and show 

// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function continueGame(){
    // generate a random alphabet
    const alphabet = getARandomAlphabet();

}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
    }

    function getARandomAlphabet(){
        const alphabetString='abcdefghijklmnopqrstuvwxyz';
        const alphabets = alphabetString.split('');

        const randomNumber = Math.random()*25;
        const index = Math.round(randomNumber);
        const alphabet = alphabets[index];
        return alphabet;
    }