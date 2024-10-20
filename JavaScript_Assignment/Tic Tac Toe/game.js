let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // playerX, playerO
let count = 0; // To track draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// Reset game logic
const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

// Handle click event on each box
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      // Player O's turn
      box.innerText = "O";
      box.style.color= "blue";  // Color for Player O
      turnO = false;
    } else {
      // Player X's turn
      box.innerText = "X";
      box.style.color = "red";   // Color for Player X
      turnO = true;
    }
    box.disabled = true;  // Disable the box after it has been clicked
    count++;

    let isWinner = checkWinner();

    // Check for draw
    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

// Show message for draw
const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

// Disable all boxes (after a win or draw)
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

// Enable all boxes (for reset/new game)
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    // box.style.backgroundColor = "";  // Reset color for each box
  }
};

// Show the winner
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

// Check if there's a winner
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
  return false;
};

// Add event listeners for reset and new game buttons
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
