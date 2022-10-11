import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    let activeStyle = {
        borderBottom: "1px solid blue",
      };
    const [open , setOpen] = useState(false)
    const routes = [
        {id: 1,name: "Topics", path:"/topics"},
        {id: 3,name: "Statistics", path:"/statistics"},
        {id: 4,name: "Blog", path:"/blog"}
    ]
    return (
            <nav className=''>
                <div>
                    <h2 className=''>Quiz Master</h2>
                </div>
                <ul 
                className={`list ${open ? 'listPossition': 'listhidden'}`}>
                    {
                        routes.map(link => 
                        <li key={link.id} className=''>
                            <NavLink  to={link.path} style={({ isActive }) =>isActive ? activeStyle : undefined}>{link.name}</NavLink>
                        </li>)
                    }
                </ul>
                <div onClick={() => {setOpen(!open)}} className='hidden'>
                {
                    open ? <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>  :<FontAwesomeIcon icon={faBars}></FontAwesomeIcon> 
                }
                </div>            
            </nav>
    );
};

export default Navbar;