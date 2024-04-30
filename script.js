function getComputerChoice() {
    let n = Math.random();
    let rslt;
    if (n <= 1/3) {
        rlst = "rock";
    }
    else if (n>2/3) {
        rlst = "scissors";
    }
    else { rlst = "paper"}
    return rlst;
}

function getHumanChoice() {
    let input = prompt('Pick Rock Paper or Scissors');
    let a = (input.trim()).toLowerCase();
    let b ='invalid input';
    if (a == 'rock') {b ='rock'}
    else if (a == 'paper') {b ='paper'}
    else if (a == 'scissors'){b ='scissors'}
    return b;
}