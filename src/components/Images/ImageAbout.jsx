import '../Images/Images.scss';
import Image from '../../assets/IMG2.png'; 

function ImageBanner() {
    return (<div className='Image-banner-display'>
        <img src={Image} className='Image-banner' alt="Montagne" />
        <div className='Image-banner darken'></div>
        </div>)
}

export default ImageBanner;