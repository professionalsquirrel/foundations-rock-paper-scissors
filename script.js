function getComputerChoice() {
    let n = Math.random();
    let rslt;
    if (n <= 1/3) {
        rlst = "rock";
    }
    else if (n>=2/3) {
        rlst = "scissors";
    }
    else { rlst = "paper"}
    return rlst;
}