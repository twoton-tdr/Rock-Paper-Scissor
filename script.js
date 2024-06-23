let computerGuess;
let humanGuess;
function getComputerChoice(){
    computerGuess = Math.floor(Math.random()*9)+1;
    console.log(computerGuess);
    if(computerGuess<4)
        {
            console.log("ROCK");
            computerGuess= "ROCK";
        }
    else if(computerGuess>3 && computerGuess<7)
        {
            console.log("PAPER")
            computerGuess="PAPER";
        }
    else {
        console.log("SCISSOR");
        computerGuess="SCISSOR";
        
    }
    return computerGuess;
};
function getHumanChoice(){
    humanGuess= prompt("Rock , Paper , Scissor");
    humanGuess= humanGuess.toUpperCase();
    console.log(humanGuess);
}
