import { infos } from './infos';
import Barre from './Barre/Barre';

function Menu() {
    
    return(<div className='Menu-display'>
        {infos.map((info) => (
        <Barre info={info}/>
        ))}
    </div>)
}

export default Menu;