import React, {Fragment, useEffect, useContext, useState} from "react";
import LoginContext from '../context/Login/loginContext';
import Timer from './Timer';
const Main = ()=> {

    const loginContext = useContext(LoginContext);
    const {questions} = loginContext;
    const [answer, setAnswer] = useState([]);
    var answers = [];
    const [question ,setQuestion] = useState('');
    let correctAnswer;

    useEffect(() => {
       // eslint-disable-next-line
      sendQuestion();
    }, [questions]);  

    const sendQuestion = () => {   
      var index = Math.floor(Math.random()*questions.length);
      var correct = questions[index]?.correct_answer;
      answers = questions[index]?.incorrect_answers;
      answers?.push(correct);
      correctAnswer = correct;
      answers?.sort();
      
      setQuestion(questions[index]?.question);
      setAnswer(answers);
    }

    const removeQuestion = (question) => {

    }

    const answerSelected = (answer, question) =>{
      console.log(global.correct_answer);
      console.log(answer);
      if (answer === correctAnswer) {
         console.log("si es");
      }
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
                       <button className="btn btn-primary btn-lg btn-block" onClick={(index) => answerSelected(a, question)}>{a}</button>
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