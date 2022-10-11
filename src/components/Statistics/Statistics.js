import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Statistics.css'

const Statistics = () => {
    const {data} = useLoaderData()
    return (
        <div className='chart'>
            <ResponsiveContainer width="95%" height={300}>
                <LineChart className='liv' width={1000} height={300} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="total" stroke="#00aaff" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>

        </div>
    );
};

export default Statistics;