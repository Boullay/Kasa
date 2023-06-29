import '../Images/Images.scss';
import Image from '../../assets/IMG.png'; 

function ImageHome() {
    const text = "Chez vous, partout et ailleurs"
    return (<div className='Image-banner-display'>
        <img src={Image} className='Image-banner home' alt="Falaise" />
        <div className='Image-banner home darken'></div>
        <p className='Image-banner-text'>{text}</p>
        </div>)
}

export default ImageHome;