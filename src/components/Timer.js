import { TrainRounded } from "@material-ui/icons";
import React, {Fragment, useEffect, useContext, useState} from "react";
import LoginContext from '../context/Login/loginContext';

const Timer = () => {

    const loginContext = useContext(LoginContext);
    const {finishGame} = loginContext;
    const { timer } = loginContext;

    const [seconds, setSeconds] = useState(timer);

    useEffect(() => {
        if (seconds > 0) {
          setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
          finishGame(true);
        }
    });

    return (
        <div>
        {  seconds === 0
           ? <h1>!Has perdido!</h1>
            : <h1> {0}:{seconds < 10 ?  `0${seconds}` : seconds}</h1>
        }
        </div>
    );
}
    
export default Timer;