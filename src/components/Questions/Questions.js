import React from 'react';
import Options from '../Options/Options';
import './Questions.css'

const Questions = ({question}) => {
    const {options} = question
    return (
        <div className='question'>
            <h4>{question.question}</h4>
            <div className='options'>
                {
                    options.map((option,_idx) => <label key={_idx}><input type="radio"/>{option}</label>)
                }
            </div>
        </div>
    );
};

export default Questions;