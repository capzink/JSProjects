console.log("Welcome to Rock-Paper-Scissors")

function computerPlay(array){
  array=["rock","paper","scissors"]
  const compChoice = array[Math.floor(Math.random()*3)];
  return compChoice;
}


function playRound(playerSelection, computerSelection){
  if(playerSelection == computerSelection){
    return "Its a tie!!"
  }
  else if((playerSelection === "rock") && (computerSelection ==="scissors")){
    player ++;
    return "You Win!, rock beats scissors";
   
    }
  else if((playerSelection === "scissors") && (computerSelection === "rock")){
    computer++;
    return "You Loose!, rock beats scissors";
    
    }
  else if((playerSelection === "paper") && (computerSelection === "rock")){
    player++;
    return "You Win!, paper beats rock";
    
    }
  else if((playerSelection === "rock") && (computerSelection === "paper")){
    computer++;
    return "You Loose!, paper beats rock";
    
    }
  else if((playerSelection === "scissors") && (computerSelection === "paper")){
    player++;
    return "You Win!, scissors beats paper";
    
    }
  else if((playerSelection === "paper") && (computerSelection === "scissors")){
    computer++;
    return "You Loose!, scissors beats paper";
    
  }
}
var player=0;
var computer=0;
function game(){
  for (let i=0; i<5; i++){
  const playerSelection= prompt("Choose:").toLowerCase();
  const computerSelection= computerPlay();
  console.log(playRound(playerSelection, computerSelection));
  }
console.log(`player: ${player} computer: ${computer}`)
}
game();