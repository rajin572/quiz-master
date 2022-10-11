import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Questions.css'

const Questions = ({question,_idx}) => {
    const correct = () => toast.success("Your Answer is correct");
    const wrong = () => toast.error("Your Answer is wrong");
    const {options, correctAnswer} = question
    const ans = () => toast.info(`Your Answer is: ${correctAnswer}`);
    const getAnswer = (data)=>{
        if(data === correctAnswer){
            correct();
        }
        else{
            wrong()
        }
    }
    const showAnswer = () =>{
        ans();
    }
    return (
        <div className='question'>
            <div className='quizHeader'>
            <h2>Quiz {_idx+1} : {question.length}</h2>
            <FontAwesomeIcon onClick={showAnswer} className='icon' icon={faEye}></FontAwesomeIcon>
            </div>
            <h3>{question.question.slice(3, -4)}</h3>
            <div className='options'>
                {
                    options.map((option,_idx) => <label key={_idx} ><input type="radio" name='q' onClick={() => getAnswer(option)} id={_idx}/>
                    {option}</label>)
                }
            </div>
            <ToastContainer />
            <ToastContainer />
            <ToastContainer />
        </div>
    );
};

export default Questions;