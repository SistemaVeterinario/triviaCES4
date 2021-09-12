import React, { Fragment, useContext, useState } from "react";
import LoginContext from "../context/Login/loginContext";

const Header = () => {
  const loginContext = useContext(LoginContext);
  const { user } = loginContext;
  const { earnings } = loginContext;

  return (
    <Fragment>
      <header className="App-header">
        <nav className="topnav">
          <a>Player: {user.userName}</a>
          <a >Level: {user.difficulty}</a>
          <a >Earnings: {earnings} </a>
        </nav>
      </header>
    </Fragment>
  );
};
export default Header;
