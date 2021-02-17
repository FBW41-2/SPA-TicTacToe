import React from "react";

function Square(props) {
  return (
    <button
      onClick={(e) => props.buttonHandler(props.player, props.num)}
      className="square"
    >
      {props.value}
    </button>
  );
}

export default Square;
