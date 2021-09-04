function computerMove(){
    x = Math.floor(Math.random()*3);
    switch(x){
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
}
function playerMove(){
    playerChoice = prompt("make your move","").toLowerCase();

    if (playerChoice.toLowerCase() === ""){
        playerMove();
    }
}
function playGame(playerChoice, computerChoice){
    
    if(playerChoice === computerChoice){
        alert("It's a tie!");
    }
    else if(playerChoice === "rock" && computerChoice === "paper"){
        alert("You Lose!");
    }
    else if(playerChoice === "scissors" && computerChoice === "rock"){
        alert("You Lose!");
    }
    else if(playerChoice === "paper" && computerChoice === "scissors"){
        alert("You Lose!")
    }
    else if(playerChoice === "paper" && computerChoice === "rock"){
    alert("You Won!");
    }
    else if(playerChoice === "rock" && computerChoice === "scissors"){
    alert("You Won!");
    }
    else if(playerChoice === "scissors" && computerChoice === "paper"){
    alert("You Won!")
    }
    else{
        alert("Invalid Move! Try Again!")
        game();
    }
}
   

function game(){
playerMove();
computerMove();
playGame(playerChoice,computerChoice);
}

game();
game();
game();





