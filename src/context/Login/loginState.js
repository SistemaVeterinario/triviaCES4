import React, { useReducer } from "react";
import LoginContext from "../Login/loginContext";
import LoginReducer from "../Login/loginReducer";
import {
  SAVE_USER,
  SAVE_QUESTIONS,
  FINISH_GAME,
  ADD_EARNINGS,
  RESET_TIMER
} from '../../types';

const LoginState = (props) => {
  
  const initialState = {
    user: '',
    questions:[],
    question: '',
    earnings: 0,
    timer: 30,
    gameOver: false
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

   return (
    <LoginContext.Provider 
        value={{
          user: state.user,
          questions: state.questions,
          saveUser,
          searchQuestions,
          finishGame,
          gameOver: state.gameOver,
          addEarnings,
          earnings: state.earnings,
          timer: state.timer,
          resetTimer
        }}>
     {props.children}
     </LoginContext.Provider>
  );
};

export default LoginState;
