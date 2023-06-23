import { useState } from 'react';
import ArrowDown from '../assets/Icones/ArrowDown';
import ArrowUp from '../assets/Icones/ArrowUp';
import '../styles/Barrederoulante.scss';


function Barre({info}) {
    const [toggle, setToggle] = useState(false)

    return (
        <section className='Barre-logement Barre-size'>
            <div className='Barre-display Red'>
            <span key={info.id} className='Barre-titre Info__Titre'>{info.title}</span>
                <button className='Barre-btn' onClick={() => setToggle(!toggle)}>{toggle ? <ArrowUp /> : <ArrowDown />}</button>
            </div>
            {toggle ? <article>{Array.isArray(info.description) ? info.description.map(desc => (
                <p className='Barre-text'>{desc}</p>
            )) : <p className='Barre-text'>{info.description}</p> } 
            </article> : ""}
        </section>
    )
}

export default Barre;