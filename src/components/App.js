import React, { useReducer, useState } from "react";
import { Route, NavLink } from "react-router-dom";
import Game from "./Game";
import Highscores from "./Highscores";
import LoginPopup from "./LoginPopup";

function App() {
  const [loginPopupVisible, setLoginPopupVisible] = useState(false);
  const [user, setUser] = useState(null);

  function closePopup() {
    setLoginPopupVisible(false);
  }

  return (
    <div>
      <nav className="nav nav-pills">
        <li className="nav-item">
          <NavLink activeClassName="active" exact className="nav-link" to="/">
            Game
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            activeClassName="active"
            className="nav-link"
            to="/highscores"
          >
            Highscores
          </NavLink>
        </li>
      </nav>
      <nav className="nav nav-pills float-right">
        <li className="nav-item">
          {user ? (
            "🧔"
          ) : (
            <button onClick={() => setLoginPopupVisible(!loginPopupVisible)}>
              Login
            </button>
          )}
          {loginPopupVisible && (
            <LoginPopup loginUser={setUser} closePopup={closePopup} />
          )}
        </li>
      </nav>
      <Route path="/" exact>
        <Game />
      </Route>
      <Route path="/highscores">
        <Highscores />
      </Route>
    </div>
  );
}

export default App;
