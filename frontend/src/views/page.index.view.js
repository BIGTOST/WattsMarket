import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
//import {Link} from 'react-router-dom';
//import useParams from 'react-router-dom';
import React, {useEffect,useState} from 'react';

// exports
export default function NewMovie(){
  return(
    <>
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
              <a href="#" className="icon-link d-inline-flex align-items-center">
                Registar
              </a>
            </div>
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <svg className="bi" width="1em" height="1em"><use href="#people-circle"></use></svg>
              </div>
              <h3 className="fs-2">Vendedor</h3>
              <p>Vender excedente de energia produzida não consumida.</p>
              <a href="#" className="icon-link d-inline-flex align-items-center">
                Registar
              </a>
            </div>
          </div>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-1">
          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
              <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
            </div>
            <div class="col-md-5 order-md-1">
              <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
            </div>
          </div>
          </div>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-1">
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading fw-normal lh-1">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
              <p class="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
            </div>
            <div class="col-md-5">
              <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
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