import React from 'react';
import mainImg from '../../images/7354902.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className='container'>
            <div><img src={mainImg} alt="" /></div>
            <div>
                <h1>Welcome To Quiz Master</h1>
                <h2>Text Your Basic Knowledge From Here</h2>
                <p>We organise a big and effective plan for our students. Here you can test yourself, Test your knowledge and Many More</p>
            </div>
        </div>
    );
};

export default Header;