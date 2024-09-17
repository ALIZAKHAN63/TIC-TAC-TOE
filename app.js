let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#reset-btn");
let winnermsg = document.querySelector("#msg");
let winnerContainer = document.querySelector(".winner-msg");

winnerContainer.style.display = "none";

let turnO = true;
let count = 0;

winningPattern = [
  [0, 1, 2],
  [0, 3, 4],
  [0, 4, 8],
  [3, 4, 5],
  [1, 4, 7],
  [2, 4, 6],
  [6, 7, 8],
  [2, 5, 8],
  [0, 3, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === true) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const checkWinner = () => {
  for (let i = 0; i < winningPattern.length; i++) {
    let pattern = winningPattern[i];

    let slot1 = boxes[pattern[0]].innerText;
    let slot2 = boxes[pattern[1]].innerText;
    let slot3 = boxes[pattern[2]].innerText;

    if (slot1 != "" && slot2 != "" && slot3 != "") {
      if (slot1 === slot2 && slot2 === slot3) {
        winnermsg.innerHTML = "WINNER" + " " + ":" + " " + slot1;
        winnerContainer.style.display = "block";

        boxes.forEach((box) => {
          box.disabled = true;
        });

        return;
      }
    }
  }
};

resetbutton.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";

    box.disabled = false;
  });
  turnO = true;
  winnermsg.innerHTML = "WINNER";
  winnerContainer.style.display = "none";
});
