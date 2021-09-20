import React from "react";
import "./Cell.scss";

export type CellValue = "X" | "O" | " ";
// export type Position = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

interface CellProps {
  cellValue: CellValue;
  cellNumber: number;
  handleClick: (cellNumber: number, playerMark: CellValue) => void;
  playerMark: CellValue;
}
const Cell: React.FC<CellProps> = ({ cellNumber, cellValue, handleClick, playerMark }) => {
  const cellBorderClassNames = (): string => {
    let classNames: string = "";
    if ((cellNumber+1) % 3 !== 0) {
      classNames += "border-right";
    }
    if ((cellNumber+1) < 7) {
      classNames += " border-bottom ";
    }
    return classNames;
  };
  return <div className={`${cellBorderClassNames()} cell`} onClick={(e)=>{handleClick(cellNumber, playerMark)}}>{cellValue}</div>;
};

export default Cell;
