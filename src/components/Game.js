import React, { useEffect, useReducer } from "react";
import Board from "./Board";
import { gameReducer } from "../reducers/gameReducer"
import { getStoredGame } from "../dataSources/localStorage"

function Game() {
  // restore original game state
  useEffect(() => {
    const storedGame = getStoredGame()
    storedGame && dispatch({ type: "restore", gameState: storedGame });
  }, []);

  //                   1. state updater function   2. initial state
  const [state, dispatch] = useReducer(gameReducer, {
    moveHistory: [Array(9).fill(null)],
    curMoveNum: 0,
    currentMove: Array(9).fill(null),
    player: "X",
    winner: null
  });

  const buttonHandler = (player, num) => {
    // player making move
    dispatch({ type: "move", player, num });
  };

  return (
    <article className="game container mt-5">
      <section className="row">
        <div className="col-sm-8 game-board">
          {state.moveHistory.length}
          <Board
            squares={state.currentMove}
            player={state.player}
            buttonHandler={buttonHandler}
          />
        <button onClick={() => dispatch({type: "back"})}>Previous Move</button>
        <button onClick={() => dispatch({type: "forward"})}>Next Move</button>
        </div>
        <div className="col-sm-4 game-info">
          <p className="h2">{state.winner && `Player ${state.winner} won!`}</p>
          <ul className="nav nav-pills flex-column">{/* TODO */}</ul>
        </div>
      </section>
    </article>
  );
}
export default Game;
