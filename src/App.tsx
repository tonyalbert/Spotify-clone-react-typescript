import React from 'react';
import './App.css';
import Rotas from './routes/App.routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Aside from './components/Aside';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    
    <div className="container-fluid">
      <div className="row min-vh-100">
        <div className="col-2" id='aside' style={{ width: '240px' }}>
          <Aside />
        </div>
        <div className="col" id='content'>
          <Rotas />
        </div>
      </div>
    </div>
  );
}

export default App;
