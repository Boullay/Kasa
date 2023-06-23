import { useState } from 'react';
import ArrowLeft from '../../assets/Icones/ArrowLeft';
import ArrowRight from '../../assets/Icones/ArrowRight';
import '../Carousel/Carousel.scss';
import { useParams } from "react-router-dom";

const Carousel = ({ logements }) => {
    const { id } = useParams();
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === logements.length - 1 ? 0 : slide + 1)
    }
    const prevSlide = () => {
        setSlide(slide === 0 ? logements.lenght - 1 : slide - 1)
    }
    return (
        <div className='Carousel'>
            <span className="Arrow Left" onClick={prevSlide}><ArrowLeft /></span>
            {logements.filter(logement => logement.id === id).map((item, index) => (
                <img src={item.pictures} alt={item.pictures} key={index} className={slide === index ? "Slide" : "Slide Hidden"} />
            ))}
            <span className="Arrow Right" onClick={nextSlide}><ArrowRight /></span>
            <span className='indicator'>1/4</span>
        </div>
    )
}

export default Carousel;