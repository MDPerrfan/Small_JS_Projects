let userscore = 0;
let compscore = 0;
const usrscr = document.querySelector("#user-score");
const cmpscr = document.querySelector("#comp-score");
const msg = document.querySelector("#mssg");
const choices = document.querySelectorAll(".options");

const getCompChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randIndx = Math.floor(Math.random() * 3);

    return choices[randIndx];
}

const drawGame = () => {
    console.log("Game Draw!");
    msg.innerText = "Game Draw!";
    msg.style.background = "#9799ba";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.background = "green";
        userscore++;
    } else {
        console.log("You lose!");
        msg.innerText = `You lost! ${compChoice} beats Your ${userChoice}`;
        msg.style.background = "rgb(168, 5, 5)";
        compscore++;
    }
    usrscr.innerText = userscore;
    cmpscr.innerText = compscore;
}
const playGame = (userChoice) => {
    console.log(userChoice);
    const compChoice = getCompChoice();
    console.log(compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((option) => {
    option.addEventListener("click", () => {
        const userChoice = option.getAttribute("id");
        playGame(userChoice);
    });
});