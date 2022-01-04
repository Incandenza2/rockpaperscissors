let box = document.querySelector(".logBox");
let playerScore = document.querySelector(".playerScore");
let computerScore = document.querySelector(".computerScore");
let playerDiv = document.querySelector(".player")
let computerDiv = document.querySelector(".computer");
let busy = 0;

function startNewGame() {
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    victories = 0;
    defeats = 0;
    box.replaceChildren();
    playerDiv.classList.remove("victorious", "defeated");
    computerDiv.classList.remove("victorious", "defeated");
    log("This will be a best of 5 match. Get ready.");

}

function logVictory(score) {
    playerScore.textContent = score;
}

function logDefeat(score) {
    computerScore.textContent = score;
}

function updateScroll() {
    box.scrollTop = box.scrollHeight;
}


function log(message) {
    let newP = document.createElement("p");
    newP.textContent = message;
    box.appendChild(newP);
    updateScroll();
}

function logNewGameLink(message){
    let newLink = document.createElement("button");
    newLink.addEventListener("click", () => {
        startNewGame();
    });
    newLink.textContent = message;
    box.appendChild(newLink);
    updateScroll()
}



let button
function getComputerPlay() {
    let randomnumber = Math.random();
    if (randomnumber>(2/3)) {
        let computerChoice = "rock";
        log("Computer played... " + computerChoice + "!");
        return computerChoice;
    } else if (randomnumber<(1/3)) {
        let computerChoice = "paper";
        log("Computer played... " + computerChoice + "!");
        return computerChoice;
    } else {
        let computerChoice = "scissors";
        log("Computer played... " + computerChoice + "!");
        return computerChoice;
    }

}

function computeClash() {
    if (playerChoice === computerChoice) {
        log("It's a draw.");
    } else if ((playerChoice === "rock" && computerChoice === "scissors") | 
    (playerChoice === "paper" && computerChoice === "rock") | 
    (playerChoice === "scissors" && computerChoice === "paper")) {
        log("You won!")
        let result = 1;
        showResult(result);
    } else {
        log("You lost, mate.")
        let result = 0;
        showResult(result);
    }
}

function startGame(pick) {
    busy = 1
    playerChoice = pick
    // then it calls the getComputerPlay function,
    setTimeout (function() {computerChoice = getComputerPlay();
         // then we run through the possible outcomes and
        setTimeout(function() {
            result = computeClash();
            busy = 0;
            return result;}
            , 1000);}
        , 1000);
    // for each we output a different message as we record a victory and keep count of games? maybe
}

let rockPick = document.querySelector(".rock");
rockPick.addEventListener("click", () => {
    if (busy == 1) {
        return;    
    } else if ((victories !==3) && (defeats !== 3)) {
        log("You played rock.");
        startGame("rock");
    } else {
        if (window.confirm("Start a new game?")) {
            startNewGame();
    }
}});

let paperPick = document.querySelector(".paper");
paperPick.addEventListener("click", () => {
    if (busy == 1) {
        return;    
    } else if ((victories !==3) && (defeats !== 3)) {
        log("You played paper.");
        startGame("paper");
    } else {
        if (window.confirm("Start a new game?")) {
            startNewGame();
    }
}});
let scissorsPick = document.querySelector(".scissors");
scissorsPick.addEventListener("click", () => {
    if (busy == 1) {
        return;    
    } else if ((victories !==3) && (defeats !== 3)) {
        log("You played scissors.");
        startGame("scissors");
    } else {
        if (window.confirm("Start a new game?")) {
            startNewGame();
    }
}});


let victories = 0;
let defeats = 0;
log("This will be a best of 5 match. Get ready.");
function showResult(result) {
        
        if (result === 1) {
            victories = parseInt(victories) + 1;
            logVictory(victories);
        } else if (result === 0) {
            defeats = parseInt(defeats) + 1;
            logDefeat(defeats);
        }

    if (victories === 3) {
        alert("Congratulations, you won the match!");
        playerDiv.classList.toggle("victorious");
        computerDiv.classList.toggle("defeated");
        log("Player wins " + victories + "-" + defeats + ".")
        setTimeout(function() {
            logNewGameLink("Click here to start a new game.")
        }, 1000)

    } else if (defeats === 3) {
        alert("Oof, sorry mate. Better luck next time.");
        playerDiv.classList.toggle("defeated");
        computerDiv.classList.toggle("victorious");
        log("Computer wins " + victories + "-" + defeats + ".")
        setTimeout(function() {
            logNewGameLink("Click here to start a new game.")
        }, 1000)
    }
}