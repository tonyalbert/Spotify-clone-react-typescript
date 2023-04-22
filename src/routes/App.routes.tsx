import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Album from '../pages/Album';
import Podcast from '../pages/Podcast';
import UnderConstructionPage from '../pages/UnderConstructionPage/UnderConstructionPage';


const Rotas = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/album/:id" element={<Album />} />
                <Route path="/podcast/:id" element={<Podcast />} />
                <Route path='/UnderConstructionPage' element={<UnderConstructionPage />} />
            </Routes>
    );
}

export default Rotas;