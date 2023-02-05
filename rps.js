const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;



function game(){
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

function playRound(){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice(); 
    let winner = roundWinner(playerSelection, computerSelection);
    console.log(`Player choice: ${playerSelection}`);
    console.log(`Computer choice: ${computerSelection}`);
    console.log(winner);
   
    

} 

function playerChoice(){
    let input = prompt('Select Rock, Paper or Scissors.');
    input = input.toLowerCase();
    return input;

}

function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];

}

function roundWinner(choiceP,choiceC){
    if (choiceP === choiceC){
        return 'This round is a tie';
    } else if (
        (choiceP === 'rock' && choiceC === 'scissors')||
        (choiceP === 'scissors' && choiceC === 'paper')||
        (choiceP === 'paper' && choiceC ==='rock')
        ){
            playerScore++; 
            return 'Player won this round!'; 
        } else {
            computerScore++;
            return 'Computer won this round.';
        }

}

game();