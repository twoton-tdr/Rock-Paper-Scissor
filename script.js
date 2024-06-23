let computerGuess;
let humanGuess;
let humanScore;
let computerScore;
function getComputerChoice(){
    computerGuess = Math.floor(Math.random()*9)+1;
    // console.log(computerGuess);
    if(computerGuess<4)
        {
            // console.log("ROCK");
            computerGuess= "ROCK";
        }
    else if(computerGuess>3 && computerGuess<7)
        {
            // console.log("PAPER")
            computerGuess="PAPER";
        }
    else {
        // console.log("SCISSOR");
        computerGuess="SCISSOR";
        
    }
    return computerGuess;
};
function getHumanChoice(){
    humanGuess= prompt("Rock , Paper , Scissor");
    humanGuess= humanGuess.toUpperCase();
    
    // console.log(humanGuess);
};
function playround(humanChoice,computerChoice){
    console.log(humanChoice);
    console.log(computerChoice);
    if(humanChoice===computerChoice){
        console.log('DRAW!!!!')
        console.log(humanScore+' | '+computerScore)
    }
    else{
        if(humanChoice==='ROCK' && computerChoice==='PAPER'){
            console.log('computer beats human!!!!!');
            computerScore = ++computerScore;
            console.log(humanScore+' | '+computerScore)
        }
        else if(humanChoice==='ROCK' && computerChoice==='SCISSOR'){
            console.log('human beats the computer!!!!');
            humanScore = ++humanScore;
            console.log(humanScore+' | '+computerScore)
        }
        else if(humanChoice==='PAPER' && computerChoice==='ROCK'){
            console.log('human beats the computer!!!!');
            humanScore = ++humanScore;
            console.log(humanScore+' | '+computerScore)
        }
        else if(humanChoice==='PAPER' && computerChoice==='SCISSOR'){
            console.log('computer beats the human!!!!');
            computerScore = ++computerScore;
            console.log(humanScore+' | '+computerScore)
        }
        else if(humanChoice==='SCISSOR' && computerChoice==='ROCK'){
            console.log('computer beats the human!!!!');
            computerScore = ++computerScore;
            console.log(humanScore+' | '+computerScore);
        }
        else if(humanChoice==='SCISSOR' && computerChoice==='PAPER'){
            console.log('human beats the computer!!!!');
            humanScore = ++humanScore;
            console.log(humanScore+' | '+computerScore)
        }
        else{
            alert("invalid input")
        }
    }

}
function rounds(){
    humanScore=0;
    computerScore=0;
    for(let i=0;i<5;i++){
    getComputerChoice();
    getHumanChoice();
    playround(humanGuess,computerGuess);
    };
}
