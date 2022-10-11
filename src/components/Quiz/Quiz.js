import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import './Quiz.css'

const Quiz = () => {
    const {data} = useLoaderData();
    const {name, total, questions} = data
    return (
        <div className='quiz'>
            <h1>Quiz of {name}</h1>
            <h3>Total Quiz {total}</h3>
            <div>
                {
                    questions.map((question,_idx)  => <Questions key={_idx} _idx={_idx} question={question}></Questions> )
                }
            </div>
        </div>
    );
};

export default Quiz;