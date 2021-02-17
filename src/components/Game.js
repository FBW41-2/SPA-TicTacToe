import React, { useState } from "react";
import Board from "./Board";
function Game() {
  const [squares, setSquares] = useState(
    ["X", "O", null] /*Array(9).fill(null)*/
  );
  const [player, setPlayer] = useState("X");

  const buttonHandler = (player, num) => {
    // player making move
    const newGameState = [...squares]; // copy of state
    newGameState[num] = player;
    setSquares(newGameState);

    // switch player
    setPlayer(player == "X" ? "O" : "X");
  };

  return (
    <article className="game container mt-5">
      <section className="row">
        <div className="col-sm-8 game-board">
          <Board
            squares={squares}
            player={player}
            buttonHandler={buttonHandler}
          />
        </div>
        <div className="col-sm-4 game-info">
          <p className="h2">{/* status */}</p>
          <ul className="nav nav-pills flex-column">{/* TODO */}</ul>
        </div>
      </section>
    </article>
  );
}
export default Game;
