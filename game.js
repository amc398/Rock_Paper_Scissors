


// initialize game variables
var gameNumber = 1;
var computerScoreNum = 0;
var playerScoreNum= 0;
let clicked_id = null;

//listen for button click and whcih one clicked

function reply_click(clicked_id)
{

    // store the clicked button in a variable
    var playerPlay = clicked_id;

    //prevent firing on page load
    if (playerPlay==undefined){
        return;
    }
    //run exactly five rounds, if we hit the 5th round display the results of the game as a new div
    else {
        if (gameNumber < 5) {
            playRound(playerPlay);
            gameNumber = gameNumber+1;
        }
        else if (gameNumber == 5) {
                gameNumber = gameNumber+1;
                playRound(playerPlay);

                if(playerScoreNum > computerScoreNum){
                    const r1 = document.createElement('h2');
                    r1.classList.add('h2');
                    r1.textContent="Player wins the game!";
                    gameResults.appendChild(r1)
                }
                else if (playerScoreNum < computerScoreNum){
                    const r2 = document.createElement('h2');
                    r2.classList.add('h2');
                    r2.textContent="Computer wins the game!";
                    gameResults.appendChild(r2)
                }
                const r3 = document.createElement('h2');
                r3.classList.add('h2');
                r3.textContent="Game Over!";
                gameResults.appendChild(r3)
            return
        }
        //exit to prevent further games
        else {
            return
        }

    }
}
//generate a random computer play
function computerPlay() {
    let integer = Math.floor(Math.random() * (3) );
    if (integer == 0) {
    computerValue = "rock";}
    else if (integer == 1) {
    computerValue = "scissors";}
    else {
    computerValue = "paper";}
    return computerValue;

}

//compare the results and store them to determine game winner
function playRound(playerPlay) {
    computerPlay()
    if ((playerPlay== "Rock")&&(computerValue == "rock")) {
        result = "It's a tie!";
        winner = "Tie";

    }
    else if ((playerPlay == "Scissors")&&(computerValue == "scissors")) {
        result = "It's a tie!";
        winner = "Tie";
    }
    else if ((playerPlay == "Paper")&&(computerValue == "paper")) {
        result = "It's a tie!";
        winner = "Tie";
    }
    else if ((playerPlay == "Rock")&&(computerValue == "paper")) {
        result = "You lose! Paper beats rock";
        winner = "Computer";
        computerScoreNum = computerScoreNum +1;
    }
    else if ((playerPlay== "Rock")&&(computerValue == "scissors")) {
        result = "You win! Rock beats scissors";
        winner = "Player";
        playerScoreNum = playerScoreNum+1;
    }
    else if ((playerPlay == "Scissors")&&(computerValue == "paper")) {
        result = "You win! Scissors beats paper";
        winner = "Player";
        playerScoreNum = playerScoreNum+1;
    }
    else if ((playerPlay == "Scissors")&&(computerValue == "rock")) {
        result = "You lose! Rock beats scissors";
        winner = "Computer";
        computerScoreNum = computerScoreNum+1;
    }
    else if ((playerPlay == "Paper")&&(computerValue == "scissors")) {
        result = "You lose! Scissors beats paper";
        winner = "Computer";
        computerScoreNum = computerScoreNum+1;
    }
    else {
        result = "You win! Paper beats rock";
        winner = "Player";
        playerScoreNum = playerScoreNum+1;
    }

    //display scores and results
    document.getElementById('playerScore').innerHTML = "Player Score: " + playerScoreNum;
    document.getElementById('computerScore').innerHTML = "Computer Score: " + computerScoreNum;
    document.getElementById('container').innerHTML = result;

    
}