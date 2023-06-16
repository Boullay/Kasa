
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from './containers/Home';
import Erreur404 from './containers/Erreur404';
import Logement from './containers/Logement';
import Layout from './Layout/Layout';
import About from './containers/About';

function App() {
  return (<Layout>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='Apropos' element={<About />} />
      <Route path='logement/:id' element={<Logement />} />
      <Route path="404" element={<Erreur404 />}/>
      <Route path="*" element={<Navigate to="/404"/>}/>
    </Routes>
    </BrowserRouter>
  </Layout>
  );
}

export default App;
