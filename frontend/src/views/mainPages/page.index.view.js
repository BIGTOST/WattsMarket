import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import {Link} from 'react-router-dom';
//import useParams from 'react-router-dom';
import React, {useEffect,useState} from 'react';


// exports
export default function NewMovie(){
  return(
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
          <Link  to={'/login'}  type="button" className="btn btn-outline-primary me-2">Entrar</Link>
          <Link to={'/registro'} type="button" className="btn btn-primary">Registar</Link>
        </div>
      </header>
      <section id="destaques">
        <div className="container px-4 py-5" id="featured-3">
          <h2 className="pb-2 border-bottom">WattsMarket</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-2">
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <svg className="bi" width="1em" height="1em"><use href="#collection"></use></svg>
              </div>
              <h3 className="fs-2">Comprador</h3>
              <p>Comprar pacotes de energia a baixo custo.</p>
              <Link to={'/registro'} className="icon-link d-inline-flex align-items-center">
                Registar
              </Link>
            </div>
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <svg className="bi" width="1em" height="1em"><use href="#people-circle"></use></svg>
              </div>
              <h3 className="fs-2">Vendedor</h3>
              <p>Vender excedente de energia produzida não consumida.</p>
              <Link to={'/registro'} className="icon-link d-inline-flex align-items-center">
                Registar
              </Link>
            </div>
          </div>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-1">
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
              <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
            </div>
            <div className="col-md-5 order-md-1">
              <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
            </div>
          </div>
          </div>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-1">
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
              <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
            </div>
            <div className="col-md-5">
              <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
            </div>
          </div>
          </div>
        </div>
      </section>
      <main>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
      </main>
    </>
  );
}