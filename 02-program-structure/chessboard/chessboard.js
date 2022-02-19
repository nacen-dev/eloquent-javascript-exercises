// My solution
let chessboard = "";
let size = 8;
for (let row = 0; row < size; row++) {
  for (let column = 0; column < size; column++) {
    if ((row+column) % 2 === 0) chessboard += " ";
    else chessboard += "#"
  }
  chessboard += "\n";
}
console.log(chessboard)

// Eloquent Javascript's solution

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);