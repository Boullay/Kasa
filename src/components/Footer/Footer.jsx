import logo from '../../assets/logo-kasa-blanc.png';
import '../Footer/Footer.scss';

function Footer() {
    const text = "© 2020 Kasa. All rights reserved";
    return (<div className='Footer-display'>
        <img src={logo} className='Footer-logo' alt='logo' />
        <p className='Footer-text'>{text}</p>
    </div>)
}

export default Footer;