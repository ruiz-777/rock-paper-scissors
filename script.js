let x = getComputerNumber ();

// Computer choosing an option

// 1. Computer choosing a random number

function getComputerNumber(){
    return Math.random()*100
}

// 2. Computer transforming this random number in game option

function getComputerChoice(number){
    if (number < 33.33) {
       return "Computer chooses Rock";
    } else if (number > 33.33 && number < 66.66) {
        return "Computer chooses Paper";
    } else {
        return "Computer chooses Scissor";
    }

}

console.log (getComputerChoice(x));

// User choosing an option

// 1. Browser asking the option for the user

let userOption = prompt("Choose an option between Rock, Paper or Scissor.","Choose an option");

console.log ("User chooses " + userOption);

