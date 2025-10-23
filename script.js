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

// 2. Making the userOption case insensitive. Turning the fist letter uppercase and the rest of the word lower case

function capitalize (userOption) {
    return userOption.charAt(0).toUpperCase() + userOption.slice(1).toLowerCase();
}

console.log ("User chooses " + capitalize (userOption));

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

console.log (playRound (capitalize (userOption), (getComputerChoice(x))));

// 3. Scoring a single round

function score (winner) {
    if (winner === "Human Wins. Rock beats Scissor" || 
        winner === "Human Wins. Paper beats Rock" ||
        winner === "Human Wins. Scissor beats Paper") {
        return humanScore++;
    } else if (
        winner === "Computer Wins. Rock beats Scissor" || 
        winner === "Computer Wins. Paper beats Rock" ||
        winner === "Computer Wins. Scissor beats Paper") {
        return computerScore++;

    } else {
        return humanScore && computerScore;
    }
}

// console.log (score (playRound (capitalize (userOption), (getComputerChoice(x)))), humanScore, computerScore);

score (playRound (capitalize (userOption), (getComputerChoice(x))));

// console.log (humanScore, computerScore);


console.log ("Human Score: " + (humanScore) + " Computer Score: " + computerScore);