import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Questions.css'

const Questions = ({question}) => {
    const correct = () => toast.success("Your Answer is correct");
    const wrong = () => toast.error("Your Answer is wrong");
    const {options, correctAnswer} = question
    const ans = () => toast.info(`Your Answer is:     ${correctAnswer}`);
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
            <FontAwesomeIcon onClick={showAnswer} className='icon' icon={faEye}></FontAwesomeIcon>
            <h3>{question.question}</h3>
            <div className='options'>
                {
                    options.map((option,_idx) => <label><input  type="radio" name='q' onClick={() => getAnswer(option)} id={_idx}/>
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