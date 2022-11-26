
console.log('You are about to start a game of ROCK PAPER SCISSORS, so be prepered. The first player to get five wins... win. To start the game write "playTheGame()" in the console')


/* Here i declear a valubels */

scissors = 'scissors'
rock = 'rock'
paper = 'paper'
let userChoice
let computerChoice
let IncorrectlySpelled
let shortGameResult
let userScore = 0
let computerScore = 0

/*  This function creates a random number from 0-2 and the adds one. It then copy the 
value to be either rock paper or scissors by testing if the random number equals the 
value recurret for that valuble. At last i returns the value of what it was equal to  */

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

function scoreCounter(){
    if (shortGameResult === 'userWon') {
        userScore += 1
    } else if (shortGameResult === 'computerWon') {
        computerScore += 1 
    }

    console.log ('Computer score:' + computerScore + ' Your score: '+ userScore)
}


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
    if (userScore === 5) {
    userScore = 0; computerScore = 0; console.log('YOU ARE THE ULTIMATE WINNER!!')
    } else if (computerScore === 5) {
    userScore = 0; computerScore = 0; console.log('Wich mean you lose. Wow you really are a losser...')
    }

    console.log('If you wanna try agin write "playTheGame()" in the console')
}