import React, {Fragment, useEffect, useContext, useState} from "react";
import LoginContext from '../context/Login/loginContext';
import Timer from './Timer';

window.updatedQuestions = [];
window.triviaFinished = false;

const Main = ()=> {

    const loginContext = useContext(LoginContext);
    const {questions} = loginContext;
    const [answer, setAnswer] = useState([]);
    const [question ,setQuestion] = useState('');
    const [selectedAnswer, setSelectedAnswer]=useState('');
    const [currentCorrectAnswer, setCurrentCorrentAnswer]=useState('');
    const [answerClicked, setAnswerClicked]=useState(false);
    const {addEarnings} = loginContext;
    const [currentEarnings, setCurrentEarnigs] = useState(0);
    const {resetTimer} = loginContext;
    const {finishGame} = loginContext;
    const {gameOver} = loginContext;
    const {earnings } = loginContext;

    useEffect(() => {
      sendQuestion();
      }, [questions]);  

    const sendQuestion = () => { 
      if(window.updatedQuestions.length < 1 && !window.triviaFinished) {
         window.updatedQuestions = questions;
      } 

      if(gameOver) {
        window.updatedQuestions = [];
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
      else {
        alert("Has perdido, tu puntuación es:" + earnings);
        finishGame(true);
      } 
    }

    const removeQuestion = (question) => {
        window.updatedQuestions = window.updatedQuestions.filter(function( obj ) {
          return obj.question !== question;
        });

        if(window.updatedQuestions.length < 1){
          window.triviaFinished = true;
          window.updatedQuestions = [];
          finishGame(true);
          alert("Felicidades, has ganado:" + earnings);
        }

        setTimeout(() => {
          addEarnings();
          sendQuestion();
          setAnswerClicked(false);
          var earnings = currentEarnings + 1000;
          setCurrentEarnigs(earnings);
          addEarnings(earnings);
          resetTimer(30);
        }, 3000);
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