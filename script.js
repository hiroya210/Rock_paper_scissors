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
}
function playGame(playerChoice, computerChoice){
    
    if(playerChoice == computerChoice){
        alert("It's a tie!");
    }
    else if(playerChoice == "rock" && computerChoice == "paper"){
        alert("You Lose!");
    }
    else if(playerChoice == "scissors" && computerChoice == "rock"){
        alert("You Lose!");
    }
    else if(playerChoice == "paper" && computerChoice === "scissors"){
        alert("You Lose!")
    }
    else{
        alert("You Won!");
    }
}

function game(){
playerMove();
computerMove();
playGame(playerChoice,computerChoice);
}





