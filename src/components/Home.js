import React, {Fragment, useContext, useEffect} from "react";
import Header from "./Header";
import Main from './Main';
import LoginContext from '../context/Login/loginContext';
import Level from "./Level";

const Home = () => {
    const loginContext = useContext(LoginContext);
    const {searchQuestions, user} = loginContext;

  useEffect(() => {
       // eslint-disable-next-line
        searchQuestions(user);
  }, []); 

return(
    <Fragment>
        <div className="fondo">
         <Header/>
         <div className="ubicacion">
           <Main/>
            <Level/>
         </div>
        </div>
    </Fragment>
)
}

export default Home;