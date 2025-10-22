let x = getComputerNumber ();

function getComputerNumber(){
    return Math.random()*100
}

function getComputerChoice(number){
    if (number < 33.33) {
       return "Rock";
    } else if (number > 33.33 && number < 66.66) {
        return "Paper";
    } else {
        return "Scissor";
    }

}

console.log (getComputerChoice(x));