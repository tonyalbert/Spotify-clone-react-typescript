import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import UnderConstructionPage from '../pages/UnderConstructionPage/UnderConstructionPage';

const Rotas = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/album/:id" element={<UnderConstructionPage />} />
                <Route path="/podcast/:id" element={<UnderConstructionPage />} />
                <Route path='/programas' element={<UnderConstructionPage />} />
            </Routes>
        </Router>
    );
}

export default Rotas;