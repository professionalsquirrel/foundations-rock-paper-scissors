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

function getHumanChoice() {
    let input = prompt('Pick Rock, Paper, or Scissors');
    let a = (input.trim()).toLowerCase();
    let firstLetterUpper = (a.substring(0, 1)).toUpperCase();
    let c = firstLetterUpper + a.substring(1,a.length);
    let rslt = null;
    if (c == 'Rock') {rslt ='Rock'}
    else if (c == 'Paper') {rslt ='Paper'}
    else if (c == 'Scissors'){rslt ='Scissors'}
    return rslt;
}

function playRound(humanChoice, computerChoice){
    /* if h wins then h++ and print 'You lose' to console log
    if c wins then c++ and print 'You win' to console log
    else it is a tie and scores remain unchanged */
    if ((humanChoice=='Rock' && computerChoice=='Scissors')
    || (humanChoice=='Paper' && computerChoice=='Rock') 
    || (humanChoice=='Scissors' && computerChoice=='Paper')){
        console.log("You win! "+humanChoice+" beats "+computerChoice+".")
        humanScore++;
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

/*const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);*/

function playGame() {

    let humanScore = 0;
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
            humanScore++;
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
    
    if (humanScore>computerScore) { console.log("You win! Your score:"+humanScore+". Computer score:"+computerScore+".")}
    else if (computerScore>humanScore) {console.log("You lose! Your score:"+humanScore+". Computer score:"+computerScore+".")}
    else {console.log("It's a tie! Your score:"+humanScore+". Computer score:"+computerScore+".")}
    return null;
}

playGame();
