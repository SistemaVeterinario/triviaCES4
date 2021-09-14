import React, {Fragment, useEffect, useContext, useState} from "react";
import LoginContext from '../context/Login/loginContext';
import Timer from './Timer';

window.updatedQuestions = [];
window.triviaFinished = false;

const Main = ()=> {

    const loginContext = useContext(LoginContext);
    const {questions,
        addEarnings,
        resetTimer,
        finishGame,
        gameOver,
        earnings,start } = loginContext;
    const [answer, setAnswer] = useState([]);
    const [question ,setQuestion] = useState('');
    const [selectedAnswer, setSelectedAnswer]=useState('');
    const [currentCorrectAnswer, setCurrentCorrentAnswer]=useState('');
    const [answerClicked, setAnswerClicked]=useState(false);
    const [currentEarnings, setCurrentEarnigs] = useState(0);

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
        finishGame(true);
        alert("Has perdido, tu puntuación es:" + earnings);
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
          sendQuestion();
          setAnswerClicked(false);
          var earnings = currentEarnings + 1000;
          setCurrentEarnigs(earnings);
          addEarnings(earnings);
          resetTimer(30);
        }, 2000);
 
    }


return(
 <Fragment>
     <div className="contenedor-principal">
       <Timer/>
         {questions? (
           <div className="row">
           </div>,
           <div className="question">
              <h3>{question}</h3>
           </div>
         ):null}
    
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