import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({topic}) => {
    console.log(topic);
    return (
        <div className='topic'>
            <img src={topic.logo} alt="" />
            <div className='topicsDetails'>
                 <div className='info'>
                    <h3>{topic.name}</h3>
                    <p>Questions :{topic.total}</p>
                </div>
                <button><Link to={`/topics/${topic.id}`}>Start Quiz</Link></button>
            </div>
        </div>
    );
};

export default Topic;