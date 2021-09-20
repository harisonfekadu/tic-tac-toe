import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table";
import TurnLabel from "./components/TurnLabel";
import { CellValue } from "./components/Cell";
import Button from "./components/Button";
import "./components/Button.scss";
import ThemeProvider, {useTheme} from "./components/providers/ThemeProvider";
type Player = {
  playerName: string;
  score?: number;
  mark: CellValue;
};

export type Turn = 0 | 1;

function App() {
  const [players, setPlayers] = useState<Player[]>([
    { playerName: "Player 1", mark: "X" },
    { playerName: "Player 2", mark: "O" },
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);
  const [turn, setTurn] = useState<Turn>(1);
  const {themeColor,toggleThemeColor} = useTheme();
  const [winner, setWinner] = useState<Turn | null>(null);

  const toggleTurn = () => {
    if(winner!==null){
      return;
    }
    setTurn(turn === 0 ? 1 : 0);
  };

  const undo = () => {
    if (historyIndex > 0 && winner===null) {
      setHistoryIndex(historyIndex - 1);
      toggleTurn();
    }
  };

  const incrementHistoryIndex = () => {
    setHistoryIndex(historyIndex + 1);
  };

  return (
    <ThemeProvider>
      <div className="app-container">
        <div className="main">
          <div className="tool-bar" onClick={undo}>
            <h3>Tic-Tac-Toe</h3>
            <Button className="button-warning-outlined">Undo</Button>
            {//TO-DO
            /*"ThemeProvider" wrapper componnent not passing down state. For some reason 
            * the inial state that is passed when creating context is the state available 
            * here. Therefore, "toggleThemeColor" is still an empty function and "themeColor" 
            * is stuck on "dark" eventhough it is updated to "light" in "ThemeProvier". 
            */ }         
             {/* <Button className="" onClick={()=>{toggleThemeColor()}}>{themeColor}</Button> */}
          </div>
          <Table
            playerMark={players[turn].mark}
            toggleTurn={toggleTurn}
            historyIndex={historyIndex}
            incrementHistoryIndex={incrementHistoryIndex}
            setWinner={()=>setWinner(turn)}
          />
          {winner===null?
          <TurnLabel
            playerName={players[turn].playerName}
            playerMark={players[turn].mark}
          />:
          <h3>{players[turn].playerName} has won</h3>}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
