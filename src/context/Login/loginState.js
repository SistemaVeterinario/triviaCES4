import React, { useReducer } from "react";
import LoginContext from "../Login/loginContext";
import LoginReducer from "../Login/loginReducer";
import {
  SAVE_USER,
  SAVE_QUESTIONS,
  FINISH_GAME,
  ADD_EARNINGS,
  RESET_TIMER,
  CLOSE_APP,
  CHANGE_TIME,
  START
} from '../../types';

const LoginState = (props) => {
  
  const initialState = {
    user: '',
    questions:[],
    question: '',
    earnings: 0,
    timer: 30,
    gameOver: false,
  };

  const [state, dispatch] = useReducer(LoginReducer, initialState);

  const saveUser = userSend => {
    dispatch({
      type: SAVE_USER,
      payload: userSend
    })
  }
  
    const searchQuestions = async (user) => {
      const url = `https://opentdb.com/api.php?amount=10&category=${user.category}&difficulty=${user.difficulty}&type=multiple`;
      const data = await fetch(url);
      const questions = await data.json();

        dispatch({
           type: SAVE_QUESTIONS,
           payload: questions.results 
        })

    }

    const addEarnings = earnings => {
      dispatch({
        type: ADD_EARNINGS,
        payload: earnings
      })
    }

    const resetTimer = timer =>{
      dispatch({
        type: RESET_TIMER,
        payload: timer
      })
    }

    const finishGame = gameOver => {
      dispatch({
        type: FINISH_GAME,
        payload: gameOver
      })
    }

    const setSeconds = timer =>{
      dispatch({
        type: CHANGE_TIME,
        payload: timer
      })

    }

    const start =()=>{
      dispatch({
        type: START
      })
    }

    const closeApp = ()=>{
      dispatch({
        type: CLOSE_APP
      })
    }

   return (
    <LoginContext.Provider 
        value={{
          user: state.user,
          questions: state.questions,
          gameOver: state.gameOver,
          earnings: state.earnings,
          timer: state.timer,
          saveUser,
          searchQuestions,
          finishGame,
          addEarnings,
          resetTimer,
          closeApp,
          setSeconds,
          start
        }}>
     {props.children}
     </LoginContext.Provider>
  );
};

export default LoginState;
