import React from "react";
import Square from "./Square";

function Board(props) {
  function renderSquare(num) {
    return (
      <Square
        value={props.squares[num]}
        player={props.player}
        num={num}
        buttonHandler={props.buttonHandler}
      />
    );
  }

  return (
    <React.Fragment>
      <div className="status h2 text-center">Next player: {props.player}</div>
      <div className="board">
        {Array(9)
          .fill(null)
          .map((item, index) => renderSquare(index))}
      </div>
    </React.Fragment>
  );
}
export default Board;
