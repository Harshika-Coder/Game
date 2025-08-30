//Access all boxes
let boxes = document.querySelectorAll('.box');
let resetButton = document.getElementById('reset');

let turnO = true; //true = O turn; false = X turn
const winsPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [2, 4, 6],
    [6, 7, 8],
]

//Add event listener to all boxes
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log("Box clicked");
        if (turnO === true) { //O turn
            box.innerText = "O";
            turnO = false;
        } else {  //X turn
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true; //disable the box after click
    });
});