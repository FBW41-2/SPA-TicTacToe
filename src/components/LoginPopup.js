import React from "react";
import "../styles/popup.css"

export default function LoginPopup(props) {
  return (
    <div className="overlay">
      <div className="popup login">
        <h2>Log in</h2>
        <form onSubmit={
          e => {
            e.preventDefault()
            props.loginUser({name: "Maxim"})
            props.closePopup()
          }
        }>
          <label>Username:</label>
          <input type="text" />
        </form>
      </div>
    </div>
  );
}
