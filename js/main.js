window.addEventListener('load', start);

// Global Variables
let time = 5;
let score = 0;
let isPlaying;

//Targeting DOM Elements
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

//Start Game
function start() {
    console.log('start')
};