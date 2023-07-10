import { useState } from 'react';
import ArrowDown from '../../assets/Icones/ArrowDown';
import ArrowUp from '../../assets/Icones/ArrowUp';
import '../Barre/Barrederoulante.scss';


function Barre({info}) {
    const [toggle, setToggle] = useState(false)

    return (
        <section className='Barre-logement Barre-size'>
            <div className='Barre-display Red'>
            <span key={info.id} className='Barre-titre Info__Titre'>{info.title}</span>
                <button className={toggle ? 'Barre-btn open' : 'Barre-btn close'} onClick={() => setToggle(!toggle)}><ArrowDown /></button>
            </div>
            {toggle ? <article className='Animation'>{Array.isArray(info.description) ? 
            <ul className='List'>
                { info.description.map(desc => (<li className='Barre-text'>{desc}</li>))}
            </ul>
            : <p className='Barre-text desc'>{info.description}</p> } 
            </article> : ""}
        </section>
    )
}

export default Barre;