import React, { useEffect, useState } from "react";
import Cell, { CellValue } from "./Cell";
import "./Table.css";

type TableProps = {
  playerMark: CellValue;
  toggleTurn: any;
  historyIndex: number;
  incrementHistoryIndex: () => void;
  setWinner: ()=>void;
};

const Table: React.FC<TableProps> = ({
  playerMark,
  toggleTurn,
  historyIndex,
  incrementHistoryIndex,
  setWinner
}) => {
  const [cellValueList, setCellValueList] = useState<CellValue[][] | [][]>([
    [],
  ]);
  useEffect(() => {
    setCellValueList([[" ", " ", " ", " ", " ", " ", " ", " ", " "]]);
  }, []);

  const handelClick = (cellNumber: number, playerMark: CellValue) => {
    if (cellValueList[historyIndex][cellNumber] !== " ") {
      return;
    }
    cellValueList[historyIndex + 1] = cellValueList[historyIndex].slice();
    cellValueList[historyIndex + 1][cellNumber] = playerMark;
    setCellValueList(cellValueList);
    incrementHistoryIndex();
    const winningTuple = isWin(cellValueList[historyIndex + 1]);
    if(winningTuple!==undefined){
      setWinner();
    }
    toggleTurn();
  };

  const isWin = (cellValueList: CellValue[]) => {
    const winningTuple:string|undefined = getIndicesOfCellValue(
      cellValueList,
      playerMark
    ).match(/123|456|789|147|258|369|159|357/g)?.pop();
    return winningTuple;
  };

  const getIndicesOfCellValue = (
    cellValueList: CellValue[],
    playerMark: CellValue
  ) => {
    let playerMarkIndices: number[] = [];
    for (let i = 0; i < cellValueList.length; i++) {
      if (cellValueList[i] === playerMark) {
        playerMarkIndices.push(i + 1);
      }
    }
    return playerMarkIndices.join("");
  };

  return (
    <div className="table table-grid">
      {cellValueList[historyIndex].map((cellValue, key) => (
        <Cell
          cellValue={cellValue}
          playerMark={playerMark}
          cellNumber={key}
          key={key}
          handleClick={handelClick}
        />
      ))}
    </div>
  );
};

export default Table;
