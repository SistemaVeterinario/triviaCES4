import React, { Fragment, useContext } from "react";
import LoginContext from "../context/Login/loginContext";

const Header = () => {
  const loginContext = useContext(LoginContext);
  const { user } = loginContext;

  return (
    <Fragment>
      <header className="App-header">
        <nav className="topnav">
          <a>Player: {user.userName}</a>
          <a >Level: {user.difficulty}</a>
          <a >Earnings:$ </a>
        </nav>
      </header>
    </Fragment>
  );
};
export default Header;
