import React, {Fragment, useEffect, useContext, useState} from "react";
import EarningsContext from "../context/Earnings/earningsContext";
import LoginContext from '../context/Login/loginContext';
import Timer from './Timer';

window.updatedQuestions = [];

const Main = ()=> {

    const loginContext = useContext(LoginContext);
    const {questions} = loginContext;
    const [answer, setAnswer] = useState([]);
    const [question ,setQuestion] = useState('');
    const [selectedAnswer, setSelectedAnswer]=useState('');
    const [currentCorrectAnswer, setCurrentCorrentAnswer]=useState('');
    const [answerClicked, setAnswerClicked]=useState(false);

    useEffect(() => {
      sendQuestion();
      }, [questions]);  

    const sendQuestion = () => { 
      if(window.updatedQuestions.length < 1 && !window.triviaFinished) {
         window.updatedQuestions = questions;
      } 

      var index = Math.floor(Math.random()* window.updatedQuestions.length);
      var correct = window.updatedQuestions[index]?.correct_answer;
      setCurrentCorrentAnswer(correct);
      
      var answers = window.updatedQuestions[index]?.incorrect_answers;
      answers?.push(correct);
      answers?.sort();

      setQuestion(window.updatedQuestions[index]?.question);
      setAnswer(answers);

    }

    const answerSelected = (answerSelected, currentQuestion) => {
      setAnswerClicked(true);
      if(answerSelected === currentCorrectAnswer) {
          setSelectedAnswer(answerSelected)
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

        setTimeout(() => {
          sendQuestion();
        }, 5000);
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
                answer?.map(currentAnswer=> (
                 <div class="col-sm-6">
                    <div class="card text-center">
                      <div class="card-body">  
                       {answerClicked ? (
                            <button  className={selectedAnswer === currentAnswer ? "btn btn-success" : "btn btn-danger"}
                                     onClick={() => answerSelected( currentAnswer, question)}>
                                    {currentAnswer}
                            </button>
                       ) : (
                            <button className={"btn btn-primary btn-lg btn-block"}
                                    onClick={() => answerSelected( currentAnswer, question)}>
                                    {currentAnswer}
                            </button>
                       )};
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