
/*

console.log('You are about to start a game of ROCK PAPER SCISSORS, so be prepered. The first player to get five wins... win. To start the game write "playTheGame()" in the console')


/* Here i declear a valuebels */

/*
scissors = 'scissors'
rock = 'rock'
paper = 'paper'
let userChoice
let computerChoice
let IncorrectlySpelled
let shortGameResult
let userScore = 0
let computerScore = 0


function getComputerChoice(){
    result = Math.floor(Math.random()*3)+1 
    if (result === 1) {
        computerChoice = scissors
    } else if (result === 2) {
        computerChoice = rock
    } else {
        computerChoice = paper
    }

    return (computerChoice)
}

/* This function should make a promt that lets the user write either rock paper or 
scissors. The computer should take any value and make it toLowerCase. Then it 
should use it to give a userChoice, thats either rock paper or scissors */

/*
function getUserChoice(){
   userEntryChoice = prompt('please enter either "rock", "paper" or "scissors"').toLowerCase()
   if (userEntryChoice === 'rock') {
        userChoice = rock
    } else if (userEntryChoice === 'paper') {
        userChoice = paper
    } else if (userEntryChoice === 'scissors') {
        userChoice = scissors
    } else {
        userChoice = IncorrectlySpelled
    }
    
    return userChoice
}



/* This function should take the userChoice and compere it to the computerChoice 
and evaliuate who won, and declare a "you won" if its a win or a "you lose" if its 
a lose */

/*

function declearGameWinner(){
    if (userChoice === IncorrectlySpelled){
        console.log('You probably spelled it wrong.')
        shortGameResult = IncorrectlySpelled
    } else if (userChoice === computerChoice) {
        shortGameResult = 'tieGame'
    } else if (userChoice === rock && computerChoice === scissors || userChoice === paper && computerChoice === rock || userChoice === scissors && computerChoice === paper){
        shortGameResult = 'userWon' 
    } else { 
        shortGameResult = 'computerWon'} 
}

/* 
This function adds one point to either userScore or computerScore, if either one wo,
and the logs the score in the console
*/

/*
function scoreCounter(){
    if (shortGameResult === 'userWon') {
        userScore += 1
    } else if (shortGameResult === 'computerWon') {
        computerScore += 1 
    }

    console.log ('Computer score:' + computerScore + ' Your score: '+ userScore)
}

/* 
This function plays a game. First a have added a loop to play until userScore or computerScore
is above 5 points. It runs the functions to play a game and declears how it went.
At last it declears a ultimate winner. 
*/

/*

function playTheGame(){

    while (userScore !== 5 && computerScore !== 5) {
    getComputerChoice()
    getUserChoice()

    if (userChoice !== IncorrectlySpelled) {console.log("the computer chose " + computerChoice)}

    declearGameWinner()
     
    if (shortGameResult === 'tieGame') {
        console.log("Tie game!, try again")
    } else if (shortGameResult === 'userWon') {
        console.log('CONGRATS! YOU WON!')
    } else if (shortGameResult === 'computerWon') {
        console.log("OH! You are a LOOSER!")
    } else {
        console.log('Try again.')
    }

    scoreCounter()
}
    /*if (userScore === 5) {
    userScore = 0; computerScore = 0; console.log('YOU ARE THE ULTIMATE WINNER!!')
    } else if (computerScore === 5) {
    userScore = 0; computerScore = 0; console.log('Wich mean you lose. Wow you really are a losser...')
    }

    console.log('If you wanna try agin write "playTheGame()" in the console') 
}
*/
let paper = 'paper'
let rock = 'rock'
let scissors = 'scissors'

let userScore = 0
let computerScore = 0


function getComputerChoice(){
    result = Math.floor(Math.random()*3)+1 
    if (result === 1) {
        computerChoice = scissors
        computerChoiceShow.textContent = 'The computer chose scissors!'
    } else if (result === 2) {
        computerChoice = rock
        computerChoiceShow.textContent = 'The computer chose rock!'
    } else {
        computerChoice = paper
        computerChoiceShow.textContent = 'The computer chose paper!'
    }

    return (computerChoice)
}

function declearGameWinner(){
    if (userChoice === computerChoice) {
        shortGameResult = 'tieGame'
        declearWinnerText.textContent = 'Tie Game! Try again.'
    } else if (userChoice === rock && computerChoice === scissors || userChoice === paper && computerChoice === rock || userChoice === scissors && computerChoice === paper){
        shortGameResult = 'userWon' 
        declearWinnerText.textContent = 'You won the round!' 
    } else { 
        shortGameResult = 'computerWon'
        declearWinnerText.textContent = 'Oh, you lost the round!'
    } 
        
}

function scoreCounter(){
    if (shortGameResult === 'userWon') {
        userScore += 1
        userScoreContainerRef.textContent = 'Your score: '+ userScore

    } else if (shortGameResult === 'computerWon') {
        computerScore += 1
        computerScoreContainerRef.textContent = "The computer's score: " + computerScore
    }
}

function declearUltimateWinner () {
        if (userScore === 5) {
            declearWinnerContainerRef.appendChild(userWonGameShow)
            userWonGameShow.textContent = 'Yay, you won the game! Press the button and play again!'
            computerWonGameShow.textContent = 'Oh, you are a looooooser!'
            declearWinnerText.textContent = '';
            Rock.parentNode.removeChild(Rock)
            Paper.parentNode.removeChild(Paper)
            Scissors.parentNode.removeChild(Scissors)
            buttensContainerRef.appendChild(playButton);
            userScore = 0; 
            computerScore = 0;       
            computerChoiceShow.textContent = ''
            userChoiceShow.textContent = ''
        } else if (computerScore === 5) {
            declearWinnerContainerRef.appendChild(computerWonGameShow)
            userWonGameShow.textContent = 'Yay, you won the game! Press the button and play again!'
            computerWonGameShow.textContent = 'Oh, you are a looooooser!'
            declearWinnerText.textContent = '';
            Rock.parentNode.removeChild(Rock)
            Paper.parentNode.removeChild(Paper)
            Scissors.parentNode.removeChild(Scissors)
            buttensContainerRef.appendChild(playButton);     
            userScore = 0; 
            computerScore = 0;        
            computerChoiceShow.textContent = ''
            userChoiceShow.textContent = ''
        }
}


let removePlaybutton = document.getElementById("playbutton");

const removeStartText = document.getElementById("startText");

const playButton = document.querySelector('#playbutton');
playButton.addEventListener('click', () => {
  addUserOptions();
  removePlaybutton.parentNode.removeChild(removePlaybutton);
  removeStartText.parentNode.removeChild(removeStartText);
});

const buttensContainerRef = document.querySelector('#buttensContainer');

const userChoiceContainerRef = document.querySelector('#userChoiceContainer');
const computerChoiceContainerRef = document.querySelector('#computerChoiceContainer');

const declearWinnerContainerRef = document.querySelector('#declearWinnerContainer')

const userScoreContainerRef = document.querySelector('#userScoreContainer')
const computerScoreContainerRef = document.querySelector('#computerScoreContainer')

userScoreContainerRef.classList.add('userScoreContainer')
computerScoreContainerRef.classList.add('computerScoreContainer')

const declearWinnerText = document.createElement('div') 

declearWinnerText.classList.add('declearWinnerText')
declearWinnerText.textContent = 'First to 5 points win! Chose ROCK!, PAPER! or SCISSORS!'

const Scissors = document.createElement('button');
const Paper = document.createElement('button');
const Rock = document.createElement('button');

const userWonGameShow = document.createElement('div');
const computerWonGameShow = document.createElement('div');

userWonGameShow.classList.add('someoneWonGameShow')
computerWonGameShow.classList.add('someoneWonGameShow')

userWonGameShow.textContent = 'Yay, you won the game! Press the button and play again!'
computerWonGameShow.textContent = 'Oh, you are a looooooser!'

const computerChoiceShow = document.createElement('div')
const userChoiceShow = document.createElement('div')

computerChoiceContainerRef.appendChild(computerChoiceShow)
userChoiceContainerRef.appendChild(userChoiceShow)

userChoiceShow.classList.add('choiceShow')
computerChoiceShow.classList.add('choiceShow')

Rock.classList.add('TheButtons');
Rock.textContent = 'Rock';

Paper.classList.add('TheButtons');
Paper.classList.add('paperButton');
Paper.textContent = 'Paper';

Scissors.classList.add('TheButtons');
Scissors.textContent = 'Scissors';
Scissors.classList.add('scissorsButton');

 function addUserOptions() {
    userScoreContainerRef.textContent = 'Your score: '+ userScore
    computerScoreContainerRef.textContent = "The computer's score: " + computerScore
    buttensContainerRef.appendChild(Rock);
    buttensContainerRef.appendChild(Paper);
    buttensContainerRef.appendChild(Scissors);
    declearWinnerContainerRef.appendChild(declearWinnerText);
    computerWonGameShow.textContent = '';
    userWonGameShow.textContent = '';
}



Rock.addEventListener('click', () => {
    userChoice = rock;
    getComputerChoice();
    declearGameWinner();
    userChoiceShow.textContent = 'You chose rock!'
    scoreCounter()
    declearUltimateWinner()
});

Paper.addEventListener('click', () => {
    userChoice = paper
    getComputerChoice();
    declearGameWinner();
    userChoiceShow.textContent = 'You chose paper!'
    scoreCounter()
    declearUltimateWinner()
});

Scissors.addEventListener('click', () => {
    userChoice = scissors
    getComputerChoice();
    declearGameWinner();
    userChoiceShow.textContent = 'You chose rock!'
    scoreCounter()
    declearUltimateWinner()
});



