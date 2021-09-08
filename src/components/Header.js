import React, { Fragment, useContext } from "react";
import EarningsContext from "../context/Earnings/earningsContext";
import LoginContext from "../context/Login/loginContext";

const Header = () => {
  const loginContext = useContext(LoginContext);
  const { user } = loginContext;
  // const earningsContext = useContext(EarningsContext)
  // const { earning } = earningsContext;

  return (
    <Fragment>
      <header className="App-header">
        <nav className="topnav">
          <a>Player: {user.userName}</a>
          <a >Level: {user.difficulty}</a>
          <a >Earnings: 0 </a>
        </nav>
      </header>
    </Fragment>
  );
};
export default Header;
