const PLAYER_ONE_SYMBOL = 'X';
const PLAYER_TWO_SYMBOL = 'O';

class TicTacToe {
  handleSquareClick(event) {
    this.executeMove(event.target.id);
  }

  executeMove(moveIndex) {
    if (this.board[moveIndex] == '') {
      this.board[moveIndex] = this.currentPlayer;
      this.updateBoard();

      if (!this.gameHasWinner()) {
        this.currentPlayer =
          this.currentPlayer == PLAYER_ONE_SYMBOL
            ? PLAYER_TWO_SYMBOL
            : PLAYER_ONE_SYMBOL;
      } else {
        alert(`Player ${this.currentPlayer} is the WINNER!!`);
        this.start();
      }
      console.log(this.board);
    }
  }

  updateBoard() {
    let gameBoard = document.getElementById('gameboard');
    let squareElements = gameBoard.childNodes;
    squareElements.forEach((element, index) => {
      if (element.innerText != this.board[index]) {
        element.innerText = this.board[index];
      }
    });
  }

  gameHasWinner() {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return winningCombos.find((combo) => {
      if (
        this.board[combo[0]] != '' &&
        this.board[combo[1]] != '' &&
        this.board[combo[2]] != '' &&
        this.board[combo[0]] == this.board[combo[1]] &&
        this.board[combo[1]] == this.board[combo[2]]
      ) {
        return true;
      } else {
        return false;
      }
    });
  }

  drawBoard() {
    document.body.innerHTML = '';
    let gameBoard = document.createElement('div');
    gameBoard.id = 'gameboard';
    gameBoard.classList.add('board');
    gameBoard.addEventListener('click', this.handleSquareClick.bind(this));

    this.board.forEach((square, index) => {
      let squareElement = document.createElement('div');
      squareElement.id = index;
      squareElement.classList.add('square');
      gameBoard.appendChild(squareElement);
    });
    document.body.appendChild(gameBoard);
  }

  start() {
    this.board = ['', '', '', '', '', '', '', '', ''];
    this.currentPlayer = PLAYER_ONE_SYMBOL;

    this.drawBoard();
  }
}

const game = new TicTacToe();
game.start();
