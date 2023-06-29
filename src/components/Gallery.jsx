import Card from "./Card/Card"
import logements from '../logements.json'
import '../components/Card/Card.scss';

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