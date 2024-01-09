let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset');
let newGamebtn = document.querySelector('.newbtn');
let msgcontainer = document.querySelector(".winningmsg");
let msg = document.querySelector(".msg");
let turn = true;
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
const resetGame = () => {
    turn = true;
    enableBoxes();
    msgcontainer.classList.add("hide")
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) {
            box.innerText = "O";
            turn = false;
        } else {
            box.innerText = "X"
            turn = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations,the winner is ${winner}`
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const checkWinner = () => {
    for (let pattern of winPattern) {

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winer", pos1);

                showWinner(pos1);
            }
        }
    }
}
newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);