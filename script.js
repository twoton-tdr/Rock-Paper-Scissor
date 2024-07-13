let computerGuess;
let humanGuess;
let humanScore;
let computerScore;
let round;
round = 0;
const roundDisplay = document.querySelector('#round-number');
const start = document.querySelector('#start');
const selection = document.querySelector('.choose-selection');
const playerChoice = document.querySelector('#player-choice'); //to display player choice
const cpChoice = document.querySelector("#computer-choice"); // to display comp choice
// start = prompt("Click y to start the game");
// if(start =='y' || start == 'Y'){
//     rounds();
// }
// else{
//     alert('game not started');
// }
function getComputerChoice(){
    computerGuess = Math.floor(Math.random()*9)+1;
    
    if(computerGuess<4)
        {
           
            computerGuess= "rock";
        }
    else if(computerGuess>3 && computerGuess<7)
        {
            
            computerGuess="paper";
        }
    else {
        
        computerGuess="scissor";
        
    }
    console.log("computer "+computerGuess)
    return computerGuess;
};
// function getHumanChoice(){
//     selection.addEventListener('click',(e)=>{ humanGuess=console.log(e.target.id);})
//     // console.log(humanGuess);
//     return humanGuess;
// };
function playround(humanChoice,computerChoice){
    // console.log(humanChoice);
    // console.log(computerChoice);
    if(humanChoice===computerChoice){
        alert('DRAW!!!!')
        alert(humanScore+' | '+computerScore)
    }
    else{
        if(humanChoice==='rock' && computerChoice==='paper'){
            alert('computer beats human!!!!!');
            computerScore = ++computerScore;
            alert(humanScore+' | '+computerScore)
        }
        else if(humanChoice==='rock' && computerChoice==='scissor'){
            alert('human beats the computer!!!!');
            humanScore = ++humanScore;
            alert(humanScore+' | '+computerScore)
        }
        else if(humanChoice==='paper' && computerChoice==='rock'){
            alert('human beats the computer!!!!');
            humanScore = ++humanScore;
            alert(humanScore+' | '+computerScore)
        }
        else if(humanChoice==='paper' && computerChoice==='scissor'){
            alert('computer beats the human!!!!');
            computerScore = ++computerScore;
            alert(humanScore+' | '+computerScore)
        }
        else if(humanChoice==='scissor' && computerChoice==='rock'){
            alert('computer beats the human!!!!');
            computerScore = ++computerScore;
            alert(humanScore+' | '+computerScore);
        }
        else if(humanChoice==='scissor' && computerChoice==='paper'){
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
    getComputerChoice();
    getHumanChoice();
    playround(humanGuess,computerGuess);
    
    if(humanScore<computerScore){
        alert('computer wins!!!')
    }
    else{
        alert('human wins!!!!!!')
    }
}


selection.addEventListener('click',(e)=>{
    humanScore=0;
    computerScore=0;
    getComputerChoice();
    humanGuess=e.target.id;
    console.log(humanGuess);
    playerChoice.textContent = humanGuess;
    cpChoice.textContent = computerGuess;
    playround(humanGuess,computerGuess);
    ++round;
    roundDisplay.textContent = round;
    
    
});

