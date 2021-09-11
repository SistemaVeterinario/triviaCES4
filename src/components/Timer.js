import React, {Fragment, useEffect, useContext, useState} from "react";
import LoginContext from '../context/Login/loginContext';

const Timer = () => {

    const loginContext = useContext(LoginContext);
    const {finishGame} = loginContext;

    const {initialMinute = 0,initialSeconds = 30} = 0;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);

    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
            
            if(minutes === 0 && seconds === 0){
                finishGame();
            }

        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });


    return (
        <div>
        { minutes === 0 && seconds === 0
            ? <h1>!Has perdido!</h1>
            : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        }
        </div>
    )
}
    
export default Timer;