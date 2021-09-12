import React, { useReducer } from "react";
import LoginContext from "../Login/loginContext";
import LoginReducer from "../Login/loginReducer";
import {
  SAVE_USER,
  SAVE_QUESTIONS
} from '../../types';
const LoginState = (props) => {
  
  const initialState = {
    user: '',
    questions:[],
    question: ''
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

   return (
    <LoginContext.Provider 
        value={{
          user: state.user,
          questions: state.questions,
          saveUser,
          searchQuestions,
        }}>
     {props.children}
     </LoginContext.Provider>
  );
};

export default LoginState;
