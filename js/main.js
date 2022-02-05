window.addEventListener('load', init);

// Global Variables
let time = 5;
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
    'goat',
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
    'supercalifragilisticexpialidocious',
];

//Initialise game function
function init() {
    //Load word from array
    showWord(words)
};

//Select then show random word from words array
function showWord(words) {
    //Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    //Output random word
    currentWord.innerHTML = words[randIndex];
}