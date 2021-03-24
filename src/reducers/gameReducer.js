import { checkWinner } from "../utilities/checkWinner";

const gameReducer = (state, action) => {
  switch (action.type) {
    case "move":
      const newSquaresArr = [
        ...state.moveHistory[state.moveHistory.length - 1]
      ];
      newSquaresArr[action.num] = action.player;
      const updatedHistory = [...state.moveHistory, newSquaresArr];
      
      fetch("http://localhost:8080/game", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          moveHistory: updatedHistory,
          curMoveNum: updatedHistory.length,
          currentMove: newSquaresArr,
          player: state.player === "X" ? "O" : "X"
        })
      })
      .then(res => res.json())
      .then(data => {
        console.log("sent game state")
      })

      return {
        moveHistory: updatedHistory,
        curMoveNum: updatedHistory.length,
        currentMove: newSquaresArr,
        player: state.player === "X" ? "O" : "X",
        winner: checkWinner(newSquaresArr),
      };
    case "back":
      return {
        ...state,
        curMoveNum: state.curMoveNum - 1,
        currentMove: state.moveHistory[state.curMoveNum - 2]
      };
    case "forward":
      return {
        ...state,
        curMoveNum: state.curMoveNum + 1,
        currentMove: state.moveHistory[state.curMoveNum]
      };

    case "restore":
      console.log("restore", action.gameState);
      return {
        ...state,
        ...action.gameState,
        winner: checkWinner(action.gameState.currentMove)
      };
    default:
      // when action type is not handled
      return state; // return original state without changes
  }
};

export { gameReducer };
