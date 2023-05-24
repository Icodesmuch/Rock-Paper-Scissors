function getComputerChoice(){
    // create an array with all possible moves
    const moves = ["Rock", "Paper", "Scissors"];
    const arrayLength = moves.length;
    
    // generate a whole number between 0 and arraylength.
    const index = Math.floor(Math.random() * arrayLength);
    
    // return value at index
    return moves[index];

}


function playRound(playerSelection, computerSelection){

    // set both playerSelection and computerSelection to lowercase
    let message = " ";
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // create the logic for the game.
    switch (playerSelection) {
        case "rock":
            if(computerSelection === "scissors"){
                message = "You Win! Rock beats scissors.";
            }
            else if(computerSelection === "paper"){
                message = "You lose! Paper beats Rock.";
            }
            else{
                message = "Tied! Rock and Rock are equal.";
            }
            break;
        case "paper":
            if(computerSelection === "scissors"){
                message = "You Lose! Scissors beats Paper.";
            }
            else if(computerSelection === "rock"){
                message = "You Win! Paper beats Rock.";
            }
            else{
                message = "Tied! Paper and Paper are equal.";
            }
            break;

        case "scissors":
                if(computerSelection === "paper"){
                    message = "You Win! Scissors beats Paper.";
                }
                else if(computerSelection === "rock"){
                    message = "You Lose! Rock beats Scissors.";
                }
                else{
                    message = "Tied! Scissors and Scissors are equal.";
                }
            break;
        default:
                message = "did you do something wrong ?"
            break;
    }

    // return to message 
    return message;
}

function game(){
    
    let gameScore = 0;
    let playerMove;

    for(i = 0; i < 5; i++){
        computerMove = getComputerChoice();
        playerMove = prompt("Whats your move? (Rock, Paper or Scissors)");
        
    
        let message = playRound(playerMove, computerMove);
        alert(message);

        if(message.includes("Win")){
            gameScore++;
        }

    }
    alert("Your final score is " + gameScore)
}

