import logo from '../assets/logo-kasa.png';
import '../styles/Banner.css';
import {Link} from 'react-router-dom';
import * as React from "react";

function Banner() {
    return(
    <header className='Banner-display'>
    <img src={logo} alt='logo' />
    <nav>
        <ul className='Banner-text'>
            <li><a className='Banner-btn' href='/'>Accueil</a></li>
            <li><a className='Banner-btn' href='Apropos'>A Propos</a></li>
        </ul>
    </nav> 
    </header>)
}

export default Banner;

