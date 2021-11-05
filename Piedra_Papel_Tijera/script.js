const game = ()=> {
let hplayer=0;
let cplayer=0;

//start game
  const playIntro =() =>{
      const playBtn = document.querySelector(".play");
      const intro= document.querySelector(".intro");
      const match= document.querySelector(".match");

      playBtn.addEventListener("click", ()=>{
          intro.classList.add('fadeOut');
          match.classList.add('fadeIn');
        })  
    }
    const playGame =(array) =>{
        const choices= document.querySelectorAll(".choices div");
        const phand= document.querySelector('.phand');
        const chand= document.querySelector('.chand');
        array=["Rock","Paper","Scissors"];
        choices.forEach(choice =>{
            choice.addEventListener('click', function click(){
                const computerSelection = array[Math.floor(Math.random()*3)];
                playRound(this.textContent, computerSelection)
                phand.src=`./images/${this.textContent}.png`
                chand.src=`./images/${computerSelection}.png`
                update(); 
                endGame(); 
            })
        })
    }
    // playthegame compare
    function playRound(playerSelection, computerSelection){
        const win=document.querySelector(".win")

        if(playerSelection === computerSelection){
            win.textContent="Its a tie!!";
            return ;
        }
        else if((playerSelection === "Rock") && (computerSelection ==="Scissors")){
          hplayer ++;
          win.textContent="You Win!, Rock beats Scissors";
          return ;
          }
        else if((playerSelection === "Scissors") && (computerSelection === "Rock")){
          cplayer++;
          win.textContent="You Loose!, Rock beats Scissors";
          return ;
          }
        else if((playerSelection === "Paper") && (computerSelection === "Rock")){
          hplayer++;
          win.textContent="You Win!, Paper beats Rock";
          return ;
          }
        else if((playerSelection === "Rock") && (computerSelection === "Paper")){
          cplayer++;
          win.textContent="You Loose!, Paper beats Rock";
          return ;
          }
        else if((playerSelection === "Scissors") && (computerSelection === "Paper")){
          hplayer++;
          win.textContent="You Win!, Scissors beats Paper";
          return ;
          }
        else if((playerSelection === "Paper") && (computerSelection === "Scissors")){
          cplayer++;
          win.textContent="You Loose!, Scissors beats Paper";
          return ;
        }
        

      }
        //update the score
        
        const update= () =>{
          const player =document.querySelector(".hplayer p")
          const computer=document.querySelector(".cplayer p")
          player.textContent=hplayer;
          computer.textContent=cplayer;
      }
      const endGame=()=>{
        const choices= document.querySelectorAll(".choices div");
        const win=document.querySelector(".win")
        if((hplayer===5) && (hplayer > cplayer)){
          win.textContent=("You win!! " + hplayer+ " to "+ cplayer + " hit any key to Play Again")
          choices.forEach(choice =>{
            choice.addEventListener('click', ()=>location.reload())
                
            })
          return;
        }
        else if((cplayer ===5)&& (cplayer > hplayer)){
          win.textContent=("You loose!! " + hplayer+ " to "+ cplayer + " hit any key to Play Again") 
          choices.forEach(choice =>{
            choice.addEventListener('click', ()=>location.reload())
                
            })
          return;
        }
        
      
    }
    
    playGame()
    playIntro(); 
}
game();
