import { useParams } from "react-router-dom"
import logements from '../logements.json'
import Star from "../assets/Icones/Star/Star";
import Barre from "../components/Barre";
import '../containers/Logement.scss';
import Carousel from '../components/Carousel/Carousel';

const Logement = () => {
    const { id } = useParams();
    const logement = logements.find(logement => logement.id === id)

    return (<>
            <div className="Logement-Display">
                <Carousel logements={logements} />
                <section className="Titre-Display">
                    <div>
                    <h1 className="Titre Font-Red">{logement.title}</h1>
                    <p className="Font-Red">{logement.location}</p>
                    </div>
                    <div>
                        <span className="Font-Red">{logement.host.name}</span>
                        <img src={logement.host.picture} className="Portrait" />
                    </div>
                </section>
                <section className="Titre-Display">
                <ul>
                    {logement.tags.map((tag) => <li>{tag}</li>)}
                </ul>
                    <div>
                        <Star classProperty={"red"} />
                    </div>
                </section>
                <section className="Barre-Display">
                    <Barre info={{ title: "Description", description: logement.description }} />
                    <Barre info={{ title: "Equipement", description: logement.equipments }} />
                </section>
            </div>
    </>
    )
}

export default Logement;