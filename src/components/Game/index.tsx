import React, { useState } from "react";
import Table from "../Table";
import TurnLabel from "../TurnLabel";
import Button from "../Button";
import { Player, TurnType, CellValue } from "../../types";
import UndoIcon from "@mui/icons-material/Undo";
import ReplayIcon from "@mui/icons-material/Replay";

function App() {
  const [players, setPlayers] = useState<Player[]>([
    new Player("Player 1", "X"),
    new Player("Player 2", "O"),
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);

  const [turn, setTurn] = useState<TurnType>(
    Math.floor(Math.random() * 2) as TurnType
  );
  const [winner, setWinner] = useState<TurnType | null>(null);

  const toggleTurn = () => {
    if (winner !== null) {
      return;
    }
    setTurn(turn === 0 ? 1 : 0);
  };

  const resetTurn = () => {
    setTurn(Math.floor(Math.random() * 2) as TurnType);
  };

  const undo = () => {
    if (historyIndex > 0 && winner === null) {
      setHistoryIndex(historyIndex - 1);
      toggleTurn();
    }
  };

  const resetGame = () => {
    setHistoryIndex(0);
    setWinner(null);
    resetTurn();
  };

  const incrementHistoryIndex = () => {
    setHistoryIndex(historyIndex + 1);
  };

  return (
    <div className="app-container dark">
      <div className="main">
        <Table
          playerMark={players[turn].playerSymbol}
          toggleTurn={toggleTurn}
          historyIndex={historyIndex}
          incrementHistoryIndex={incrementHistoryIndex}
          setWinner={() => setWinner(turn)}
          winner={winner}
        />
        <div className="tool-bar">
          <div>
            {winner === null ? (
              <TurnLabel
                playerName={players[turn].playerName}
                playerMark={players[turn].playerSymbol}
              />
            ) : (
              <h3>{players[turn].playerName} has won</h3>
            )}
          </div>
          <div>
            <Button onClick={undo} className="button-plain button-circular">
              <UndoIcon sx={{ fontSize: 18 }} className="button-icon" />
            </Button>
            <Button
              onClick={resetGame}
              className="button-plain button-circular"
            >
              <ReplayIcon sx={{ fontSize: 18 }} className="button-icon" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
