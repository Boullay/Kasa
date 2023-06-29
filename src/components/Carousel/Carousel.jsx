import { useState } from 'react';
import ArrowLeft from '../../assets/Icones/ArrowLeft';
import ArrowRight from '../../assets/Icones/ArrowRight';
import '../Carousel/Carousel.scss';

const Carousel = ({ logement }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === logement.pictures.length - 1 ? 0 : slide + 1)
    }
    const prevSlide = () => {
        setSlide(slide === 0 ? logement.pictures.length - 1 : slide - 1)
    }
    return (
        <div className='Carousel'>
            {logement.pictures.length > 1 ? (
                (
                    <>
                        <span className="Arrow Left" onClick={prevSlide}><ArrowLeft /></span>
                        <img src={logement.pictures[slide]} alt={`accomodation-${slide + 1}`} className={'Slide'} />
                        <span className="Arrow Right" onClick={nextSlide}><ArrowRight /></span>
                        <span className='indicator'>{slide + 1}/{logement.pictures.length}</span>
                    </>
                )) : (
                <img src={logement.pictures[slide]} alt={`accomodation-${slide + 1}`} className={'Slide'} />
            )
            }
        </div>
    )
}

export default Carousel;