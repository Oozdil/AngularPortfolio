import { Component, OnInit } from '@angular/core';
import { TileModel } from './tile-model';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent implements OnInit {

  isGameOver = true;
  winnerText = "O";
  PLAYER_X = "X";
  PLAYER_O = "O";
  turn = this.PLAYER_X;

  boardState: string[] = [];
  strikeClassList: string = "strike";
  gameOverSound = new Audio("./assets/sounds/sounds_game_over.wav");
  clickSound = new Audio("./assets/sounds/sounds_click.wav");

  winningCombinations = [
    //rows
    { combo: [1, 2, 3], strikeClass: "strike-row-1" },
    { combo: [4, 5, 6], strikeClass: "strike-row-2" },
    { combo: [7, 8, 9], strikeClass: "strike-row-3" },
    //columns
    { combo: [1, 4, 7], strikeClass: "strike-column-1" },
    { combo: [2, 5, 8], strikeClass: "strike-column-2" },
    { combo: [3, 6, 9], strikeClass: "strike-column-3" },
    //diagonals
    { combo: [1, 5, 9], strikeClass: "strike-diagonal-1" },
    { combo: [3, 5, 7], strikeClass: "strike-diagonal-2" },
  ];
  tiles: TileModel[] = [];
  constructor() {
  }

  ngOnInit(): void {
    this.setBoard();
    this.boardState.length = 9;
    this.setHoverText();

  }
  setHoverText() {
    //remove all hover text
    this.tiles.forEach((tile) => {
      tile.classList = tile.classList.filter(function (e) { return e !== 'x-hover' })
      tile.classList = tile.classList.filter(function (e) { return e !== 'o-hover' })
    });

    const hoverClass = `${this.turn.toLowerCase()}-hover`;

    this.tiles.forEach((tile) => {
      if (tile.innerText == "") {
        tile.classList.push(hoverClass);
      }
    });
  }

  setBoard() {
    for (let i = 0; i < 9; i++) {
      let tile = new TileModel();
      tile.name = (i + 1).toString();
      tile.classList.push("tile");
      this.tiles.push(tile);
    }

    this.tiles[0].classList.push("bottom-border", "right-border");
    this.tiles[1].classList.push("bottom-border", "right-border");
    this.tiles[2].classList.push("bottom-border");
    this.tiles[3].classList.push("bottom-border", "right-border");
    this.tiles[4].classList.push("bottom-border", "right-border");
    this.tiles[5].classList.push("bottom-border");
    this.tiles[6].classList.push("right-border");
    this.tiles[7].classList.push("right-border");

  }


  startNewGame() {
    this.strikeClassList = "strike";
    this.isGameOver = false;
    this.boardState = [];
    this.boardState.length = 9;
    this.tiles.forEach((tile) => (tile.innerText = ""));
    this.turn = this.PLAYER_X;
    this.setHoverText();
  }

  tileClick(event) {


    if (this.isGameOver) {
      return;
    }
    const tileNumber = (event.target.id);
    const tile = this.tiles.find(t => t.name == tileNumber);


    if (tile.innerText != "") {

      return;
    }

    if (this.turn === this.PLAYER_X) {
      tile.innerText = this.PLAYER_X;
      this.boardState[tileNumber - 1] = this.PLAYER_X;
      this.turn = this.PLAYER_O;
    } else {
      tile.innerText = this.PLAYER_O;
      this.boardState[tileNumber - 1] = this.PLAYER_O;
      this.turn = this.PLAYER_X;
    }

    this.clickSound.play();
    this.setHoverText();
    this.checkWinner();
  }

  checkWinner() {
    //Check for a winner
    for (const winningCombination of this.winningCombinations) {
      //Object Destructuring
      const { combo, strikeClass } = winningCombination;



      const tileValue1 = this.boardState[combo[0] - 1];
      const tileValue2 = this.boardState[combo[1] - 1];
      const tileValue3 = this.boardState[combo[2] - 1];

      if (
        tileValue1 != null &&
        tileValue1 === tileValue2 &&
        tileValue1 === tileValue3
      ) {

        this.strikeClassList="strike "+strikeClass;
        this.gameOverScreen(tileValue1);
        return;
      }
    }

    //Check for a draw
    const filledTiles = this.tiles.filter((tile) => tile.innerText !== "").length;


    if (filledTiles == 9) {
      this.gameOverScreen(null);
    }
  }

  gameOverScreen(winnerText) {
    let text = "Draw!";
    if (winnerText != null) {
      text = `Winner is ${winnerText}!`;
    }
    this.isGameOver = true;
    this.winnerText = text;
    this.gameOverSound.play();
  }


}
