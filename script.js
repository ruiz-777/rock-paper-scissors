let x = getComputerNumber ();

// COMPUTER CHOOSING AN OPTION

// 1. Computer choosing a random number

function getComputerNumber(){
    return Math.random()*100
}

// 2. Computer transforming this random number in game option

function getComputerChoice(number){
    if (number < 33.33) {
       return "Rock";
    } else if (number > 33.33 && number < 66.66) {
        return "Paper";
    } else {
        return "Scissor";
    }

}

console.log ("Computer chooses " + getComputerChoice(x));

// USER CHOOSING AN OPTION

// 1. Browser asking the option for the user

let userOption = prompt("Choose an option between Rock, Paper or Scissor.","Choose an option");

console.log ("User chooses " + userOption);

// SCORE

// 1. Score variables

let humanScore = 0;
let computerScore = 0;

// 2. Logic to play a single round

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "What a boring game, you guys tied!";
    } else if (humanChoice === "Rock" && computerChoice === "Scissor") {
        return "Human Wins. Rock beats Scissor";
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        return "Human Wins. Paper beats Rock";
    } else if (humanChoice === "Scissor" && computerChoice === "Paper") {
        return "Human Wins. Scissor beats Paper";
    }  else if (humanChoice === "Rock" && computerChoice === "Paper") {
        return "Computer Wins. Paper beats Rock";
    } else if (humanChoice === "Paper" && computerChoice === "Scissor") {
        return "Computer Wins. Scissor beats Paper";
    } else if (humanChoice === "Scissor" && computerChoice === "Rock") {
        return "Computer Wins. Rock beats Scissor";
    } else {
        return "Invalid";
    }
}

console.log (playRound (userOption, (getComputerChoice(x))));