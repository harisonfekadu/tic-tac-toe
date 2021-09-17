import React, { useEffect, useState } from "react";
import Cell, { CellValue } from "./Cell";
import "./Table.css";

type TableProps = {};

const Table = () => {
  const [cellsState, setCellsState] = useState<CellValue[] | []>([]);

  useEffect(() => {
    setCellsState(["O", "O", "O", "X", "O", "O", "O", "O", "O"]);
  }, []);

  return (
    <div className="table table-grid">
      {cellsState.map((state, key) => (
        <Cell value={state} position={key+1} key={key} />
      ))}
    </div>
  );
};

export default Table;
