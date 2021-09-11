import React, { useReducer } from "react";
import LoginContext from "../Login/loginContext";
import LoginReducer from "../Login/loginReducer";
import {
  SAVE_USER,
  SAVE_QUESTIONS,
  FINISH_GAME,
  ADD_EARNINGS
} from '../../types';
const LoginState = (props) => {
  const initialState = {
    user: '',
    questions:[],
    question: '',
    earnings: 0
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

    const addEarnings = () => {
      dispatch({
        type: ADD_EARNINGS,
      })
    }

    const finishGame = () => {
      dispatch({
        type: FINISH_GAME
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
          addEarnings
        }}>
     {props.children}
     </LoginContext.Provider>
  );
};

export default LoginState;
