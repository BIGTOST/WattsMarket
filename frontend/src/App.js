import './css/App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
// import views
import Index from './views/mainPages/page.index.view';
import BackOffice from './views/mainPages/page.backoffice.view';
import FrontOffice from './views/mainPages/page.frontoffice.view';
import LoginPage from './views/components/login.components.view'

function App() {
  return (
    <>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          HOME
        </a>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 link-secondary">Destaques</a></li>
          <li><a href="#" className="nav-link px-2 link-dark">Vender/Comprar</a></li>
          <li><a href="#" className="nav-link px-2 link-dark">Contactos</a></li>
        </ul>
        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2">Entrar</button>
          <button type="button" className="btn btn-primary">Registar</button>
        </div>
      </header>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='/admin' element={<BackOffice/>}/>
            <Route path='/cliente' element={<FrontOffice/>}/>
            <Route path='/login' element={<LoginPage/>}/>
          </Routes>
        </div>
      </Router>
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Início</a></li>
          <li className="nav-item"><a href="#destaques" className="nav-link px-2 text-body-secondary">Destaques</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Vender/Comprar</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Contactos</a></li>
        </ul>
        <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
      </footer>
    </>
);
}

export default App;
