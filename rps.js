const choices = document.querySelectorAll('button');  ///['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

choices.forEach(choice => choice.addEventListener('click', playGame));


function playGame(e){
    const playerSelection = e.target.id;
    const computerSelection = computerChoice(); 
    roundWinner(playerSelection, computerSelection.textContent.toLowerCase());
    document.querySelector('.computer-choice').textContent = `Computer choice: ${computerSelection.textContent}`;
    document.querySelector('.scoreboard').textContent = `Player Score: ${playerScore} || Computer Score: ${computerScore}`;

    if (playerScore >= 5){
        return document.querySelector('.winner').textContent= `You're the winner of this game !`;
    } else if (computerScore >=5){
        return document.querySelector('.winner').textContent= `The computer is the winner of this game`;
    }
} 


function computerChoice(){
    rand = choices[Math.floor(Math.random()*choices.length)];
    return rand;
    
}

function roundWinner(choiceP,choiceC){
    if (choiceP === choiceC){
        return document.querySelector('.round-result').textContent = 'Result: Tie';
    } else if (
        (choiceP === 'rock' && choiceC === 'scissors')||
        (choiceP === 'scissors' && choiceC === 'paper')||
        (choiceP === 'paper' && choiceC ==='rock')
        ){
            playerScore++; 
            return document.querySelector('.round-result').textContent = 'Result: Player is the round winner!'; 
        } else {
            computerScore++;
            return document.querySelector('.round-result').textContent = 'Result: Computer won this round.';
        }

}



/*
function playerChoice(){

  let input = prompt('Select Rock, Paper or Scissors.');  
    input = input.toLowerCase();
    return input;                     

}
*/


///const btns = document.querySelectorAll('button');

/*  querySelectorAll returns a node list and has no addEventListener method.
    Node list behaves similaryly to an array. Code below selects all 3 buttons
    and plays 3 rounds the moment the page is loaded.

btns.forEach(()=>{
    playRound();
} )*/

/*
btn.addEventListener('click', () =>{
    playRound();
})
*/

/*
function game(){
        ///This function plays 5 round game.    
        for (let i = 1; i <= 5; i++){
            console.log(`Round: ${i}`);
            playRound();
            console.log(`Player: ${playerScore} || Computer:${computerScore}`);
        }
    
        console.log('Final Result');
    
        if (playerScore > computerScore){
            console.log('Player won the game!');
        } else if ( computerScore > playerScore){
            console.log('Computer won the game.');
        }
    
        console.log(`Player: ${playerScore} || Computer:${computerScore}`);
    
    }
    
    
    
    }
*/