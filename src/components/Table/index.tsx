import React, { useEffect, useState } from "react";
import { TurnType, CellValue, TableProps } from "../../types";
import Cell from "../Cell";
import "./style.scss";



const Table: React.FC<TableProps> = ({
  playerMark,
  toggleTurn,
  historyIndex,
  incrementHistoryIndex,
  setWinner,
  winner
}) => {
  const [cellValueList, setCellValueList] = useState<CellValue[][] | [][]>([
    [],
  ]);
  const [winningTuples, setWinningTuples] = useState<boolean[]>([]);

  useEffect(() => {
    setCellValueList([[" ", " ", " ", " ", " ", " ", " ", " ", " "]]);
  }, []);

  const handelClick = (cellNumber: number, playerMark: CellValue) => {
    if (cellValueList[historyIndex][cellNumber] !== " " || winner!==null) {
      return;
    }
    cellValueList[historyIndex + 1] = cellValueList[historyIndex].slice();
    cellValueList[historyIndex + 1][cellNumber] = playerMark;
    setCellValueList(cellValueList);
    incrementHistoryIndex();
    const winningTuple = isWin(cellValueList[historyIndex + 1]);
    if(winningTuple===true){
      setWinner();
    }
    toggleTurn();
  };

  const isWin = (cellValueList: CellValue[]) => {
    const winningTupleString:string = getIndicesOfCellValue(
      cellValueList,
      playerMark
    ).match(/123|456|789|1\d*4\d*7|2\d*5\d*8|3\d*6\d*9|1\d*5\d*9|3\d*5\d*7/g)?.pop() || "";
    let winningTupleArray:boolean[] = [];
    for(let i=0; i<winningTupleString.length;i++){

    winningTupleArray[Number.parseInt(winningTupleString.charAt(i))-1]=true;
    }
    setWinningTuples(winningTupleArray);
    return winningTupleArray.some(tuple => tuple===true);
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
    console.log(playerMarkIndices.join(""))
    return playerMarkIndices.join("");
  };

  return (
    <div className="table table-grid table-dark">
      {cellValueList[historyIndex].map((cellValue, key) => (
        <Cell
          cellValue={cellValue}
          playerMark={playerMark}
          cellNumber={key}
          key={key}
          winningCell={winningTuples[key]}
          handleClick={handelClick}
        />
      ))}
    </div>
  );
};

export default Table;
