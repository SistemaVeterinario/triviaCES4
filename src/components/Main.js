import React, {Fragment, useEffect, useContext, useState} from "react";
import EarningsContext from "../context/Earnings/earningsContext";
import LoginContext from '../context/Login/loginContext';
import Timer from './Timer';

window.correctAnswer = "";
window.updatedQuestions = [];
window.triviaFinished = false;

const Main = ()=> {

    const loginContext = useContext(LoginContext);
    const {questions} = loginContext;
    const [answer, setAnswer] = useState([]);
    const [question ,setQuestion] = useState('');

    useEffect(() => {
      sendQuestion();
      }, [questions]);  

    const sendQuestion = () => { 
      if(window.updatedQuestions.length < 1 && !window.triviaFinished) {
         window.updatedQuestions = questions;
      } 
      console.log(window.updatedQuestions);

      var index = Math.floor(Math.random()* window.updatedQuestions.length);
      var correct = window.updatedQuestions[index]?.correct_answer;
      window.correctAnswer = correct;
      var answers = window.updatedQuestions[index]?.incorrect_answers;
      answers?.push(correct);
      answers?.sort();
      
      setQuestion(window.updatedQuestions[index]?.question);
      setAnswer(answers);
    }

    const answerSelected = (answer, currentQuestion) => {
      if(answer === window.correctAnswer){
          console.log(answer);
          console.log(window.correctAnswer);
          removeQuestion(currentQuestion);
      }
    }

    const removeQuestion = (question) => {
        window.updatedQuestions = window.updatedQuestions.filter(function( obj ) {
          return obj.question !== question;
        });

        if(window.updatedQuestions.length < 1){
          window.triviaFinished = true;
        }
        console.log(window.updatedQuestions);
        sendQuestion();
    }

    const AddNewEarning = () => {
      // const earningsContext = useContext(EarningsContext);
      // const {plusEarnings} = earningsContext;
      // const [earning, setEarning] = useState({
      //   earning: earning + 1000,
      // });
    }

return(
    <Fragment>
     <div className="contenedor-principal">
        <div class="row">
          <Timer></Timer>
        </div>
       <div className="question">
         {questions? (
           <h3>{question}</h3>
         ):null}
       </div>
       <div className="contenedor">
           <div class="row">
             {questions ? (
                answer?.map(a=> (
                 <div class="col-sm-6">
                    <div class="card text-center">
                      <div class="card-body">                      
                       <button className="btn btn-primary btn-lg btn-block" onClick={() => answerSelected(a, question)}>{a}</button>
                    </div>
                  </div>
                 </div>
                ))
             ):null}
            </div>
        </div>
     </div>
  </Fragment>
)


}
export default Main;