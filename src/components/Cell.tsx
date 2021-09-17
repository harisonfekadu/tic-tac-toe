import React from "react";
import "./Cell.scss";

export type CellValue = "X" | "O" | " ";
// export type Position = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

interface CellProps {
  value: CellValue;
  position: number;
}
const Cell: React.FC<CellProps> = ({ position, value }) => {
  const cellBorderClassNames = (): string => {
    let classNames: string = "";
    if (position % 3 !== 0) {
      classNames += "border-right";
    }
    if (position < 7) {
      classNames += " border-bottom ";
    }
    return classNames;
  };
  return <div className={`${cellBorderClassNames()} cell`}>{value}</div>;
};

export default Cell;
