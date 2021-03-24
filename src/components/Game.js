import React, { useEffect, useReducer } from "react";
import Board from "./Board";
import { gameReducer } from "../reducers/gameReducer"

function Game() {

  function startPoll() {
    const updater = setInterval(() => {
      fetch("http://localhost:8080/game")
      .then(res => res.json())
      .then(data => {
        if(data.moveHistory) dispatch({ type: "restore", gameState: data })
      })
    }, 1000)
  }

  // restore original game state
  useEffect(() => {
    startPoll()

    
    
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
