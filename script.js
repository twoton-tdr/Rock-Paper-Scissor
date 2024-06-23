let computerGuess;
let humanGuess;
let humanScore;
let computerScore;
let start;
start = prompt("Click y to start the game");
if(start =='y' || start == 'Y'){
    rounds();
}
else{
    alert('game not started');
}
function getComputerChoice(){
    computerGuess = Math.floor(Math.random()*9)+1;
    
    if(computerGuess<4)
        {
           
            computerGuess= "ROCK";
        }
    else if(computerGuess>3 && computerGuess<7)
        {
            
            computerGuess="PAPER";
        }
    else {
        
        computerGuess="SCISSOR";
        
    }
    return computerGuess;
};
function getHumanChoice(){
    humanGuess= prompt("Rock , Paper , Scissor");
    humanGuess= humanGuess.toUpperCase();
    
   
};
function playround(humanChoice,computerChoice){
    console.log(humanChoice);
    console.log(computerChoice);
    if(humanChoice===computerChoice){
        alert('DRAW!!!!')
        alert(humanScore+' | '+computerScore)
    }
    else{
        if(humanChoice==='ROCK' && computerChoice==='PAPER'){
            alert('computer beats human!!!!!');
            computerScore = ++computerScore;
            alert(humanScore+' | '+computerScore)
        }
        else if(humanChoice==='ROCK' && computerChoice==='SCISSOR'){
            alert('human beats the computer!!!!');
            humanScore = ++humanScore;
            alert(humanScore+' | '+computerScore)
        }
        else if(humanChoice==='PAPER' && computerChoice==='ROCK'){
            alert('human beats the computer!!!!');
            humanScore = ++humanScore;
            alert(humanScore+' | '+computerScore)
        }
        else if(humanChoice==='PAPER' && computerChoice==='SCISSOR'){
            alert('computer beats the human!!!!');
            computerScore = ++computerScore;
            alert(humanScore+' | '+computerScore)
        }
        else if(humanChoice==='SCISSOR' && computerChoice==='ROCK'){
            alert('computer beats the human!!!!');
            computerScore = ++computerScore;
            alert(humanScore+' | '+computerScore);
        }
        else if(humanChoice==='SCISSOR' && computerChoice==='PAPER'){
            alert('human beats the computer!!!!');
            humanScore = ++humanScore;
            alert(humanScore+' | '+computerScore)
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
    if(humanScore<computerScore){
        alert('computer wins!!!')
    }
    else{
        alert('human wins!!!!!!')
    }
}
