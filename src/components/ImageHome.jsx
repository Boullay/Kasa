import '../styles/Images.css';
import Image from '../assets/IMG.png'; 

function ImageHome() {
    const text = "Chez vous, partout et ailleurs"
    return (<div className='Image-banner-display'>
        <img src={Image} className='Image-banner' alt="Falaise" />
        <div className='Image-banner darken'></div>
        <p className='Image-banner-text'>{text}</p>
        </div>)
}

export default ImageHome;