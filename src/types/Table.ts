import { CellValue, TurnType } from ".";
export type TableProps = {
  playerMark: CellValue;
  toggleTurn: any;
  historyIndex: number;
  incrementHistoryIndex: () => void;
  setWinner: ()=>void;
  winner:TurnType|null;
};