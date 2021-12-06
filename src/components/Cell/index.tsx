import React from "react";
import "./style.scss";
import { CellProps } from "../../types";


const Cell: React.FC<CellProps> = ({ cellNumber, cellValue, handleClick, playerMark, winningCell }) => {
  const cellBorderClassNames = (): string => {
    let classNames: string = "";
    if ((cellNumber+1) % 3 !== 0) {
      classNames += "border-right";
    }
    if ((cellNumber+1) < 7) {
      classNames += " border-bottom ";
    }
    if (winningCell===true){
      classNames += " winning-cell ";
    }
    return classNames;
  };
  return <div className={`${cellBorderClassNames()} cell `} onClick={(e)=>{handleClick(cellNumber, playerMark)}}>{cellValue}</div>;
};

export default Cell;
