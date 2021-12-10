

function computerPlay() {
    let randomnumber = Math.random();
    if (randomnumber>(2/3)) {
        let computerChoice = "rock";
        console.log("Computer played... " + computerChoice + "!");
        return computerChoice;
    } else if (randomnumber<(1/3)) {
        let computerChoice = "paper";
        console.log("Computer played... " + computerChoice + "!");
        return computerChoice;
    } else {
        let computerChoice = "scissors";
        console.log("Computer played... " + computerChoice + "!");
        return computerChoice;
    }

}
function userPlay() {
    let userInput = prompt("Will you pick rock, paper, or scissors?");
        if (userInput.match(/^rock$/i)) {
            let playerChoice = "rock";
            console.log("You have played " + playerChoice + "!")
            return playerChoice;
        } else if (userInput.match(/^paper$/i)) {
            let playerChoice = "paper";
            console.log("You have played " + playerChoice + "!")
            return playerChoice;
        } else if (userInput.match(/^scissors$/i)) {
            let playerChoice = "scissors";
            console.log("You have played " + playerChoice + "!")
            return playerChoice;
        } else {
            alert("Pick either rock, paper, or scissors!");
            userPlay();
        }
}

function computeClash() {
    if (playerChoice === computerChoice) {
        console.log("It's a draw.");
    } else if ((playerChoice === "rock" && computerChoice === "scissors") | 
    (playerChoice === "paper" && computerChoice === "rock") | 
    (playerChoice === "scissors" && computerChoice === "paper")) {
        console.log("You won!.")
        let result = 1;
        return result;
    } else {
        console.log("You lost, mate.")
        let result = 0;
        return result;
    }
}

function game() {
    // first it prompts you to type rock, paper, or scissors,
    playerChoice = userPlay();
    // then it calls the computerPlay function,
    computerChoice = computerPlay();
    // then we run through the possible outcomes and for each we
    result = computeClash();
    return result;
    // output a different message as we record a victory and keep count of games? maybe
}

function match() {
    let victories = 0;
    let defeats = 0;
    console.log("This will be a best of 3 match. Get ready.");
    for (;victories !== 3 && defeats !== 3;) {
        result = game()
        if (result === 1) {
            victories = parseInt(victories) + 1;
            console.log("Score is currently " + victories + " to " + defeats + ".");
        } else if (result === 0) {
            defeats = parseInt(defeats) + 1;
            console.log("Score is currently " + victories + " to " + defeats + ".");
        }
        }
    if (victories === 3) {
        alert("Congratulations, you won the match!");
        console.log("Player wins." + victories + "-" + defeats + ".");
    } else if (defeats === 3) {
        alert("Oof, sorry mate. Better luck next time.");
        console.log("Computer wins " + victories + "-" + defeats + ".");
    }
}