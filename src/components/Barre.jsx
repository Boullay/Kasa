import { useState } from 'react';
import ArrowDown from '../assets/Icones/ArrowDown';
import ArrowUp from '../assets/Icones/ArrowUp';
import '../styles/Barrederoulante.css';


function Barre({info}) {
    const [toggle, setToggle] = useState(false)

    return (
        <article>
            <div className='Barre-display Red'>
            <span key={info.id} className='Barre-titre'>{info.title}</span>
                <button className='Barre-btn' onClick={() => setToggle(!toggle)}>{toggle ? <ArrowUp /> : <ArrowDown />}</button>
            </div>
            {toggle ? <p className='Barre-text'>{Array.isArray(info.description) ? info.description.map(desc => (
                <p>{desc}</p>
            )) : <p>{info.description}</p> } 
            </p> : ""}
        </article>
    )
}

export default Barre;