import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom';

// import views
import BackOffice from './views/mainPages/page.backoffice.view';
import FrontOffice from './views/mainPages/page.frontoffice.view';
import Index from './views/mainPages/page.index.view';
import LoginPage from './views/components/login.components.view';
import RegistraUser from './views/components/registro.components.view';
import React,{useState,useEffect } from 'react';
import AuthService from './views/auth/auth.service.views';






function App() {

  const [currenUser, setCurrentUser] = useState("")

  useEffect(()=>{
    const user = AuthService.getCurrentUser();
    if(user){
      setCurrentUser({currenUser: user})
    }
  }, []);
  // logOut(){
  //   AuthService.logout();
  // }
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='/admin' element={<BackOffice/>}/>
            <Route path='/cliente' element={<FrontOffice/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/registro' element={<RegistraUser/>}/>
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
