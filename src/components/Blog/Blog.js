import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blogQuestion'>
            <h1>Question And Answer</h1>
            <section className="blogAnswerSection">
                <div className="card">
                    <h2>Question 1: What is the purpose of the react router?</h2>
                    <h3><span>Answer : </span>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</h3>
                    <p>
                    </p>
                </div>
                <div className="card">
                    <h2>Question 2: How does context api work</h2>
                    <h3><span>Answer : </span>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</h3>
                    <p></p>
                </div>
                <div className="card">
                    <h2>Question 3: Write something about useRef()</h2>
                    <h3><span>Answer : </span>useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</h3>
                    <p></p>
                </div>
            </section> 
        </div>
    );
};

export default Blog;