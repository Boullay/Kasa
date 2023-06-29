import { Link } from "react-router-dom";

const Card = ({ id, cover, title }) => {
    return (
        <Link to={`/logement/${id}`}>
            <li key={id} className="Gallery-card">
                <img src={cover} alt={`${title} cover`} className="Card img" />
                <span className="Card title shadow">{title}</span>
            </li>
        </Link>
    )
}

export default Card;