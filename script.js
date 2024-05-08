//Initializing scores
let playerScore = 0;
let computerScore = 0;

//Initializing round count. Game stops at a count of 5.
let numberOfRounds = 0;

//Storing elements involved in text changes:
//Player box
let playerScoreText = document.querySelector(".player-score");
let playerSelectionText = document.querySelector(".player-selection");
//Computer box
let computerScoreText = document.querySelector(".computer-score");
let computerSelectionText = document.querySelector(".computer-selection");
//Round result box
let resultText = document.querySelector(".results");

//Add eventListeners to all buttons: Upon click, play a round.
const buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++){
    let b = buttons[i];
    b.addEventListener("click",
    () => playRound(b.textContent));
}



//A function that generates the computer's choice
function getComputerChoice() {
    let n = Math.random();
    let rslt;
    if (n <= 1/3) {
        rlst = "Rock";
    }
    else if (n>2/3) {
        rlst = "Scissors";
    }
    else { rlst = "Paper"}
    return rlst;
}

/* A function that plays a round, increments #of rounds by 1, 
calculates winner of the round, and updates HTML text */
function playRound(humanChoice){
let computerChoice = getComputerChoice();
numberOfRounds++;
    /* if h wins then h++ and print 'You lose' to console log
    if c wins then c++ and print 'You win' to console log
    else it is a tie and scores remain unchanged */
    if ((humanChoice=='Rock' && computerChoice=='Scissors')
    || (humanChoice=='Paper' && computerChoice=='Rock') 
    || (humanChoice=='Scissors' && computerChoice=='Paper')){
        resultText.textContent = "You win! "+humanChoice+" beats "+computerChoice+".";
        playerScore++;
    }
    else if (humanChoice==computerChoice){
        resultText.textContent = "It's a tie! You both chose "+humanChoice+".";
    }
    else {
        resultText.textContent = "You lose! "+ computerChoice + " beats " + humanChoice+".";
        computerScore++;
    }

    if (numberOfRounds === 5) {
        //Compare scores and determine winner
        //Update resultText with game winner
        //Offer option to restart game "click to restart"
            //If restarting then all vars to 0 and empty out the text boxes
    return null;
}
}

function playGame() {

    let playerScore = 0;
    let computerScore = 0;
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    function playRound(humanChoice, computerChoice){
        /* if h wins then h++ and print 'You lose' to console log
        if c wins then c++ and print 'You win' to console log
        else it is a tie and scores remain unchanged */
        if ((humanChoice=='Rock' && computerChoice=='Scissors')
        || (humanChoice=='Paper' && computerChoice=='Rock') 
        || (humanChoice=='Scissors' && computerChoice=='Paper')){
            console.log("You win! "+humanChoice+" beats "+computerChoice+".")
            playerScore++;
        }
        else if (humanChoice==computerChoice){
            console.log("It's a tie! You both chose "+humanChoice+".")
    
        }
        else {
            console.log("You lose! "+ computerChoice + " beats " + humanChoice+".")
            computerScore++;
        }
        return null;
    }
    let i = 0;
    while (i<5){
        while (!humanSelection) { 
            console.log("Your input is invalid. Please pick Rock, Paper, or Scissors.");
            humanSelection = getHumanChoice();
        }
        playRound(humanSelection, computerSelection);
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        i++;
    }
    
    if (playerScore>computerScore) { console.log("You win! Your score:"+playerScore+". Computer score:"+computerScore+".")}
    else if (computerScore>playerScore) {console.log("You lose! Your score:"+playerScore+". Computer score:"+computerScore+".")}
    else {console.log("It's a tie! Your score:"+playerScore+". Computer score:"+computerScore+".")}
    return null;
}

//playGame();




if (numberOfRounds == 5) {
    if (playerScore>computerScore) { 
        resultText.textContent = 
        "You win! Your score:"+playerScore+
        ". Computer score:"+computerScore+".";
    }
    else if (computerScore>playerScore) {
        resultText.textContent = "You lose! Your score:"+playerScore+
        ". Computer score:"+computerScore+".";
    }
    else { 
        resultText.textContent = "It's a tie! Your score:"+playerScore+
        ". Computer score:"+computerScore+".";
    }
        computerScore = 0;
        playerScore = 0;
        numberOfRounds = 0;
    }