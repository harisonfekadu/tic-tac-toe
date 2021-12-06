import { CellValue } from ".";
import { v4 as uuidv4 } from "uuid";

export class Player {
  pid: string;
  playerName: string;
  sessionScore: number = 0;
  highScore: number = 0;
  playerSymbol: CellValue;

  constructor(playerName: string, playerSymbol: CellValue) {
    this.pid = uuidv4();
    this.playerName = playerName;
    this.playerSymbol = playerSymbol;
  }

  incrementScore(score: number | undefined) {
    if (score !== undefined) {
      this.sessionScore += score;
      this.highScore += score;
    }
    this.sessionScore++;
    this.highScore++;
  }
  
}
