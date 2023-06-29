import logo from '../../assets/logo-kasa.png';
import '../Banner/Banner.scss'
import {Link} from 'react-router-dom';
import * as React from "react";

function Banner() {
    return(
    <header className='Banner-display'>
    <img src={logo} alt='logo' className='logo'/>
    <nav>
        <ul className='Banner-text'>
            <Link className='Banner-btn' to={'/'}>Accueil</Link>
            <Link className='Banner-btn' to={'/Apropos'}>A Propos</Link>
        </ul>
    </nav> 
    </header>)
}

export default Banner;

