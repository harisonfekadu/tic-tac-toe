import React from "react";
import "./App.css";
import Game from "./components/Game";
import ThemeProvider from "./context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <div className="app-container dark">
        <h3 className="brand">Tic-Tac-Toe</h3>
        <Game />
      </div>
    </ThemeProvider>
  );
}

export default App;
