import React, { Fragment, useContext, useState } from "react";
import LoginContext from "../context/Login/loginContext";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Header = () => {
  const loginContext = useContext(LoginContext);
  const { user,earnings } = loginContext;

  return (
    <Fragment>
      <header className="App-header">
        <nav className="topnav">
        <a  href="/"
           className="btn btn-outline-light"><LockOutlinedIcon /></a>
          <a>Player: {user.userName}</a>
          <a >Level: {user.difficulty}</a>
          <a >Earnings: {earnings} </a>
        </nav>
      </header>
    </Fragment>
  );
};
export default Header;
