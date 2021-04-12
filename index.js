const PLAYER_ONE_SYMBOL = 'X';
const PLAYER_TWO_SYMBOL = 'O';

class TicTacToe {
  handleSquareClick(event) {
    this.executeMove(event.target.id);
  }

  executeMove(moveIndex) {
    if (this.board[moveIndex] == '') {
      this.board[moveIndex] = this.currentPlayer;
      this.currentPlayer =
        this.currentPlayer == PLAYER_ONE_SYMBOL
          ? PLAYER_TWO_SYMBOL
          : PLAYER_ONE_SYMBOL;
      this.updateBoard();
      console.log(this.board);
    }
  }

  updateBoard() {
    let gameBoard = document.getElementById('gameboard');
    let squareElements = gameboard.childNodes;
    squareElements.forEach((element, index) => {
      if (element.innerText != this.board[index]) {
        element.innerText = this.board[index];
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
