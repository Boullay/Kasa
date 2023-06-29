import '../Erreur404/Rep404.scss';

const Erreur404 = () => {
  const text = "Oups! La page que vous demandez n'existe pas."
  return (<div className='Error-display'>
      <span className='Error-404'>404</span>
      <p className='Error-text'>{text}</p>
      <a className='Error-btn' href='/'>Retourner sur la page d'accueil</a>
  </div>)
}

export default Erreur404;