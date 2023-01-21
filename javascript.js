

function getComputerChoice() {
    let word = ["Paper","Rock","Scissor"];
    let rand= Math.floor((Math.random() * word.length));
    let randomWord=word[rand]; 
    return randomWord;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();


function playRound(playerSelection,computerSelection){
    let translatePlayer = playerSelection.toUpperCase();
    let translateComputer = computerSelection.toUpperCase();
    if(translatePlayer == "PAPER" && translateComputer == "ROCK" || translatePlayer == "ROCK" && translateComputer == "SCISSOR" || translatePlayer =="SCISSOR" && translateComputer =="PAPER")
    {
        let response = "Well played, you won because you chose : " + translatePlayer + " and the computer chose : " + translateComputer;
        console.log(response);
        
    }
    else if (translatePlayer == translateComputer){
        let response = translatePlayer +" vs "+ translateComputer +" That's a Tie ! ";
        console.log(response);
    }
    else{
        let response = " You lost " + translateComputer + " beats " + translatePlayer;
        console.log(response);
    }
}
 

function game() {
    let response = prompt("What's your choice ?");
      
    playRound(response,getComputerChoice());
    
        
    
}

console.log(game());