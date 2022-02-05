window.addEventListener('load', init);

// Global Variables

// Available Levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2,
}

//To change level
const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

//Target DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time')
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    /*'goat',
    'heavy',
    'drawn',
    'green',
    'their',
    'wart',
    'sold',
    'where',
    'pills',
    'tiger',
    'astroid',
    'trail',
    'yarn',
    'execute',
    'exercise',
    'supercalifragilisticexpialidocious',*/
    'hei',
    'kiitos',
    'moi',
    'sisu',
    'rakas anu',
    'muumi',
    'sukat',
    'ei',
    'terve',
    'kaunis',
    'lentokonesuihkuturbiinimoottoriapumekaanikkoaliupseerioppilas'

];

//Initialise game function
function init() {
    //Show number of seconds in UI
    seconds.innerHTML = currentLevel;
    //Load word from array
    showWord(words)
    //Start matching on word input
    wordInput.addEventListener('input', startMatch)
    // Call countdown every second
    setInterval(countdown, 1000);
    //Check game status
    setInterval(checkStatus, 50);
};

//Start Match
function startMatch() {
    if(matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = "";
        score++;
    }

    //If score is -1 display 0
    if(score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

//Match currentWord to wordInput
function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = "CORRECT";
        return true;
    } else {
        message.innerHTML = "";
        return false;
    }
}

//Select then show random word from words array
function showWord(words) {
    //Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    //Output random word
    currentWord.innerHTML = words[randIndex];
}

//Countdown timer
function countdown() {
    if(time > 0) {
    time--;
    } else if(time === 0){
        //Game Over
        isPlaying = false;
    }
    // Show time
    timeDisplay.innerHTML = time;
}

//Check game status
function checkStatus() {
    if(!isPlaying && time ===0) {
        message.innerHTML = "Game Over";
        score = -1;
    }
}