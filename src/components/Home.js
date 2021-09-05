import React, {Fragment, useContext, useEffect} from "react";
import Header from "./Header";
import Main from './Main';
import LoginContext from '../context/Login/loginContext';

const Home = () => {
    const loginContext = useContext(LoginContext);
    const {searchQuestions, user} = loginContext;

  useEffect(() => {
       // eslint-disable-next-line
        searchQuestions(user);
  }, []); 

return(
    <Fragment>
        <Header/>
        <Main/>
    </Fragment>
)
}

export default Home;