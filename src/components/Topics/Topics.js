import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css'

const Topics = () => {
    const {data} = useLoaderData()
    console.log(data);
    return (
        <div>
            <div>Here my all topics</div>
            <div className='topics'>
                {
                    data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                }
            </div>
        </div>
    );
};

export default Topics;