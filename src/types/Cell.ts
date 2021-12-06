export type CellValue = "X" | "O" | " ";

export interface CellProps {
    cellValue: CellValue;
    cellNumber: number;
    handleClick: (cellNumber: number, playerMark: CellValue) => void;
    playerMark: CellValue;
    winningCell: boolean;
  }

// export type Position = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
