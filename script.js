let humanScore = 0;
let computerScore = 0;

for (i=1; i<=5; i++){

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

// USER CHOOSING AN OPTION

// 1. Browser asking the option for the user

let userOption = prompt("Choose an option between Rock, Paper or Scissor.","Choose an option");

// 2. Making the userOption case insensitive. Turning the fist letter uppercase and the rest of the word lower case

function capitalize (userOption) {
    return userOption.charAt(0).toUpperCase() + userOption.slice(1).toLowerCase();
}

console.log (i + "." + " You: " + capitalize (userOption) + " | Computer: " + getComputerChoice(x));

// SCORE

// 1. Score variables

// let humanScore = 0;
// let computerScore = 0;

// 2. Logic to play a single round

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "What a boring game, you guys tied!";
    } else if (humanChoice === "Rock" && computerChoice === "Scissor") {
        return "You win. Rock beats Scissor";
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        return "You win. Paper beats Rock";
    } else if (humanChoice === "Scissor" && computerChoice === "Paper") {
        return "You win. Scissor beats Paper";
    }  else if (humanChoice === "Rock" && computerChoice === "Paper") {
        return "You lose. Paper beats Rock";
    } else if (humanChoice === "Paper" && computerChoice === "Scissor") {
        return "You lose. Scissor beats Paper";
    } else if (humanChoice === "Scissor" && computerChoice === "Rock") {
        return "You lose. Rock beats Scissor";
    } else {
        return "You typed anything wrong!";
    }
}

console.log (playRound (capitalize (userOption), (getComputerChoice(x))));

// 3. Scoring a single round

function score (winner) {
    if (winner === "You win. Rock beats Scissor" || 
        winner === "You win. Paper beats Rock" ||
        winner === "You win. Scissor beats Paper") {
        return humanScore++;
    } else if (
        winner === "You lose. Rock beats Scissor" || 
        winner === "You lose. Paper beats Rock" ||
        winner === "You lose. Scissor beats Paper") {
        return computerScore++;

    } else {
        return humanScore && computerScore;
    }
}

score (playRound (capitalize (userOption), (getComputerChoice(x))));

}

// Definying the overall winner

function overallWinner (hScore,cScore) {
    if (hScore > cScore) {
        return "You win! =D";
    } else if (hScore < cScore) {
        return "You lose! :'(";
    } else {
        return "You tied! :|";
    }
}

console.log (overallWinner(humanScore,computerScore));

// Logging the final result

console.log ("Final Result: Human Score: " + (humanScore) + " Computer Score: " + computerScore);