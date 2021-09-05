import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import LoginState from "./context/Login/loginState";

function App() {
  return (
     <LoginState>
      <Router>
        <Switch>
             <Route exact path="/" component={Login} />
             <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
    </LoginState>
  );
}

export default App;
