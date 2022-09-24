import React from 'react';
import './Navbar.css';
import phIcon from '../assets/ph.png'

export default function Navbar(){
    return(
        <nav className='nav'>
            <img className='phicon' src={phIcon} alt="" />
            <p className='nav-text'>My Tavel Journal.</p>
        </nav>
    )
}