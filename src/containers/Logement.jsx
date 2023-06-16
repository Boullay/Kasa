import { useParams } from "react-router-dom"
import logements from '../logements.json'
import Star from "../assets/Icones/Star/Star";
import Barre from "../components/Barre";

const Logement = () => {
    const{id} = useParams();

    return(<>
    {logements.filter(logement => logement.id === id).map((item, index) => (
        <div key={index}>
    <h1>{item.title}</h1>
    <p>{item.location}</p>
    <Barre info={{title:"Equipement", description: item.equipments}}/>
    <Barre info={{title:"Description", description: item.description}}/>
    <Star classProperty={"red"} />
        </div>
    ))}
    </>
    )
}

export default Logement;