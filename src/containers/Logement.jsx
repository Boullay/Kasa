import { useNavigate, useParams } from "react-router-dom"
import logements from '../logements.json'
import Star from "../assets/Icones/Star/Star";
import Barre from "../components/Barre/Barre";
import '../containers/Logement.scss';
import Carousel from '../components/Carousel/Carousel';
import { useEffect } from "react";

const Logement = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const logement = logements.find(logement => logement.id === id);
    useEffect(() => {
        if (!logement || typeof (logement) == 'undefined') {
            navigate('404')
        }
    }, [navigate, logement])
 

    const showRating = (logement) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(<Star color={i <= Number(logement.rating) ? "#ff6060" : "#e3e3e3"} />)
        }
        return stars;
    }

    return (<> 
    {(logement && typeof (logement) != 'undefined') ?
    
        <div className="Logement-Display">
            <Carousel logement={logement} />
            <div className="Info-Display">
            <section className="Titre-Display">
                <div>
                    <h1 className="Titre Font-Red">{logement.title}</h1>
                    <p className="Font-Red mediaSize">{logement.location}</p>
                </div>
                <ul className="Tags-list">
                    {logement.tags.map((tag, index) => <li key={index} className="Tags">{tag}</li>)}
                </ul>
            </section>
            <section className="Titre-Display mediaDisplay">
                <div className="Fiche-Hote">
                    <span className="Font-Red mediaSize">{logement.host.name}</span>
                    <img src={logement.host.picture} alt="portrait" className="Portrait" />
                </div>
                <div className="stars">
                    {showRating(logement)}
                </div>
            </section>
            </div>
            <section className="Barre-Display">
                <Barre info={{ title: "Description", description: logement.description }} />
                <Barre info={{ title: "Equipement", description: logement.equipments }} />
            </section>
        </div>
            : ''}
    </>
    )
}

export default Logement;