import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../css/estiloCard.css'
import axios from 'axios';
import authHeader from '../auth/auth-header.views';
import {Link, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import useParams from 'react-router-dom';
import React, {useEffect,useState} from 'react';
import CompradorPage from './frontOfficePages/comprador.frontOffice.views';
import VendedorPage from './frontOfficePages/vendedor.frontOffice.views';


// exports
export default function PageFrontOffice(){

  const [dataPack, setDataPack] = useState([]);

  useEffect(()=>{
    const url = "http://localhost:3000/pack/";
    axios.get(url)
    .then(res=>{
      if(res.data.success)
      {
        const data = res.data.data;
        setDataPack(data)
      }
      else
      {
        alert('Error Web Service');
      }
    })
    .catch(error =>{
      alert(error)
    });
  },[])
  return(
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="#">Hidden brand</a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
      </header>
       <Routes>
       <Route path='/comprador' element={<VendedorPage/>}/>
        <Route path='/vendedor' element={<CompradorPage/>}/>
       </Routes>
      <main>
          <LoadFillData/>
      </main>
    </>
  );

  function LoadFillData(){
    return dataPack.map((data)=>{
      return(
        <div className="card centro">
          <div className="card-body">
            <h5 className="card-title mb-3">{data.vandor.name}</h5>
            <h6 className="tam"><strong>{data.KW}</strong></h6>
            <p className="tam cin mb-1">{data.value}</p>
            <p className="cin">{data.valueData}</p>
            <a href="#" className="btn btn-primary" >Comprar</a>
          </div>
        </div>
        )
    });
  }
}