import React, {useEffect, useContext, useState} from "react";
import LoginContext from '../context/Login/loginContext';

const Timer = () => {

    const loginContext = useContext(LoginContext);
    const {finishGame, timer,setSeconds} = loginContext;

    useEffect(() => {
        if (timer > 0) {
          setTimeout(() => setSeconds(timer - 1), 1000);
        } else {
          finishGame(true);
        }
    },[]);

    return (
        <div>
        {  timer === 0
           ? <h1 className="white">!Has perdido!</h1>
            : <h1> {0}:{timer < 10 ?  `0${timer}` : timer}</h1>
        }
        </div>
    );
}
    
export default Timer;