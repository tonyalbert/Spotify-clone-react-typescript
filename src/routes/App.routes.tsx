import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Album from '../pages/Album';
import Podcast from '../pages/Podcast';
import UnderConstructionPage from '../pages/UnderConstructionPage/UnderConstructionPage';


const Rotas = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/album/:id" element={<Album />} />
                <Route path="/podcast/:id" element={<Podcast />} />
                <Route path='/programas' element={<UnderConstructionPage />} />
            </Routes>
        </Router>
    );
}

export default Rotas;