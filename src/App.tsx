import React, { useEffect, useState } from "react";
import "./App.css";
import BoardComponent from "./components/BoardComponent";
import { Board } from "./models/Board";
import { Player } from "./models/Player";
import { Colors } from "./models/Color";
import LostFigures from "./components/LostFigures";
import Timer from "./components/Timer";

const App = () => {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState(whitePlayer);
  const [turnBoard, setTurnBoard] = useState(false);

  useEffect(() => {
    restart();
  }, []);

  function restart(): void {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  function swapPlayer() {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
    );
    setTurnBoard(currentPlayer?.color === Colors.BLACK ? false : true);
  }

  return (
    <div className="app">
      <div className="lostWhiteFigures">
        <LostFigures
          title="Lost white figures"
          figures={board.lostWhiteFigures}
        />
      </div>
      <Timer currentPlayer={currentPlayer} restart={restart} />
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
        turnBoard={turnBoard}
      />
      <div className="lostBlackFigures">
        <LostFigures
          title="Lost black figures"
          figures={board.lostBlackFigures}
        />
      </div>
    </div>
  );
};

export default App;
