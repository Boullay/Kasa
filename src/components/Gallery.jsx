import Card from "./Card"
import logements from '../logements.json'
import '../styles/Card.scss';

const Gallery = () => {
    return (
        <div className="Gallery">
            <ul className="Gallery-list">
                {logements.map(({ id, cover, title }) => (
                    <Card
                        id={id}
                        cover={cover}
                        title={title}
                    />
                ))}
            </ul>
        </div>
    )
}

export default Gallery;