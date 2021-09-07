import React, {Fragment, useEffect, useContext, useState} from "react";
import LoginContext from '../context/Login/loginContext';
import Timer from './Timer';
const Main = ()=> {

    const loginContext = useContext(LoginContext);
    const {questions} = loginContext;
    const [answer, setAnswer] = useState([]);
    var answers = [];
    const [question ,setQuestion] = useState('');

    useEffect(() => {
       // eslint-disable-next-line
      sendQuestion();
    }, [questions]);  

    const sendQuestion = () => {   
      var index = Math.floor(Math.random()*questions.length);
      var correct = questions[index]?.correct_answer;
      console.log(correct);
      answers = questions[index]?.incorrect_answers;
      answers?.push(correct)
      answers?.sort();
      
      setQuestion(questions[index]?.question);
      setAnswer(answers);
    }

return(
    <Fragment>
     <div className="contenedor-principal">
        <div class="row">
          <Timer>hola</Timer>
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
                       <button className="btn btn-primary btn-lg btn-block">{a}</button>
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