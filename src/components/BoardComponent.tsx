import React from "react";
import { Board } from "../models/Board";
import CellComponent from "./CellComponent";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: React.FC<BoardProps> = ({ board, setBoard }) => {
  return (
    <div className="board">
      {board.cells.map((row, index) =>
        row.map((cell, index) => <CellComponent key={cell.id} cell={cell} />)
      )}
    </div>
  );
};

// {board.cells.map((row, index) => {
//         <React.Fragment key={index}>
//           {row.map((cell) => {
//             <CellComponent />;
//           })}
//         </React.Fragment>;
//       })}

export default BoardComponent;
