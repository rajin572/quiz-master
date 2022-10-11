import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blogQuestion'>
            <h1>Question And Answer</h1>
            <section class="blogAnswerSection">
                <div class="card">
                    <h2>Question 1: </h2>
                    <h3><span>Answer : </span></h3>
                    <p>
                    </p>
                </div>
                <div class="card">
                    <h2>Question 2: </h2>
                    <h3><span>Answer : </span></h3>
                    <p></p>
                </div>
                <div class="card">
                    <h2>Question 3: </h2>
                    <h3><span>Answer : </span>
                    </h3>
                    <p></p>
                </div>
            </section> 
        </div>
    );
};

export default Blog;