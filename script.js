let currentPlayer = 'X';
let cells = document.querySelectorAll('.cell');
let gameActive = true;

function cellClicked(cellIndex) {
  if (gameActive && cells[cellIndex].innerText === '') {
    cells[cellIndex].innerText = currentPlayer;
    if (checkWin() || checkDraw()) {
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];

  for (let combo of winningCombos) {
    if (cells[combo[0]].innerText === currentPlayer &&
        cells[combo[1]].innerText === currentPlayer &&
        cells[combo[2]].innerText === currentPlayer) {
      document.getElementById('message').innerText = `${currentPlayer} wins!`;
      return true;
    }
  }
  return false;
}

function checkDraw() {
  for (let cell of cells) {
    if (cell.innerText === '') {
      return false;
    }
  }
  document.getElementById('message').innerText = "It's a draw!";
  return true;
}
