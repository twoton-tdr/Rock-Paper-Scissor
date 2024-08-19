let computerGuess;
let humanGuess;
let humanScore=0;
let computerScore=0;
let round=1;

const modal = document.querySelector('#modal');
const message = document.querySelector('#message') // to assign content to modal

const roundDisplay = document.querySelector('#round-number');
roundDisplay.textContent = round; //displaying the round at round 1 then its done through inside the function
const start = document.querySelector('#start');
const selection = document.querySelector('.choose-selection');
const playerChoice = document.querySelector('#player-choice'); //to display player choice
const cpChoice = document.querySelector("#computer-choice"); // to display comp choice

const playerPoint = document.querySelector("#player");
playerPoint.textContent=humanScore;

const compPoint = document.querySelector("#computer");
compPoint.textContent=computerScore;

const notify = document.querySelector(".notify");
const notificat = document.createElement("p");
notify.appendChild(notificat);
let output='';

notificat.textContent = "Rock Paper Scissors!";

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


function playround(humanChoice,computerChoice){
    
    if(humanChoice===computerChoice){
        output = "Draw!!!!";
        notification();
        playerPoint.textContent=humanScore;
        compPoint.textContent=computerScore;
    }
    else{
        if(humanChoice==='rock' && computerChoice==='paper'){
            output = "You lose!!!!";
            notification();
            computerScore = ++computerScore;
            playerPoint.textContent=humanScore;
            compPoint.textContent=computerScore;
        }
        else if(humanChoice==='rock' && computerChoice==='scissor'){
            output = "You Win!!!!"
            notification();
            humanScore = ++humanScore;
            playerPoint.textContent=humanScore;
            compPoint.textContent=computerScore;
        }
        else if(humanChoice==='paper' && computerChoice==='rock'){
            output = "You Win!!!!";
            notification();
            humanScore = ++humanScore;
            playerPoint.textContent=humanScore;
            compPoint.textContent=computerScore;
        }
        else if(humanChoice==='paper' && computerChoice==='scissor'){
            output = "You lose!!!!";
            notification();
            computerScore = ++computerScore;
            playerPoint.textContent=humanScore;
            compPoint.textContent=computerScore;
        }
        else if(humanChoice==='scissor' && computerChoice==='rock'){
            output = "You lose!!!!";
            notification();
            computerScore = ++computerScore;
            playerPoint.textContent=humanScore;
            compPoint.textContent=computerScore;
        }
        else if(humanChoice==='scissor' && computerChoice==='paper'){
            output = "You Win!!!!";
            notification();
            humanScore = ++humanScore;
            playerPoint.textContent=humanScore;
            compPoint.textContent=computerScore;
        }
        else{
            alert("invalid input")
        }
    }

}

selection.addEventListener('click',(e)=>{
  
    if(round<5){
        playerChoice.className="";
        cpChoice.className="";
        getComputerChoice();
        humanGuess=e.target.id;
        playerChoice.classList.add(humanGuess);
        cpChoice.classList.add(computerGuess);
        playround(humanGuess,computerGuess);
        ++round;
        roundDisplay.textContent = round;
    }
    else if(round===5){
        
        if(humanScore<computerScore){
            message.textContent="Computer wins!!!!";
            output = "Computer wins!!";
            notificat.textContent = "Rock Paper Scissors!"

         }
        else if(humanScore == computerScore){
            message.textContent = "Its a draw!!!";
            output = "Its a draw";
            notificat.textContent = "Rock Paper Scissors!"

        }
        else{
             message.textContent="You wins!!!!";
             output = "You Wins!!!!";
             notificat.textContent = "Rock Paper Scissors!"

         }

        modalpop();
        round=1;
        humanScore=0;
        computerScore=0;
        roundDisplay.textContent = round;
        compPoint.textContent = 0;
        playerPoint.textContent = 0;
        playerChoice.className='';
        cpChoice.className='';
    }
});


let modalpop =function (){
    modal.showModal();
    setTimeout(modalclose,500);
};
function modalclose(){
    modal.close();
}

//to send the message who won in the current round to the screen
function notification(){
    notificat.textContent = output;
    setTimeout(()=>{
        notificat.textContent = "";
    },500)
}

// TO-DO
// setup a breath effect for rock paper scissor in the notification
