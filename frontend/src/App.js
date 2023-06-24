import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import React, {useEffect, useState} from 'react'
import './App.css';

function App() {

  const [dataInflationMax, setInflationMax] = useState('');
  const [dataProductionCap, setProdutionCap] = useState('');
  const [dataVars, setDataVars] = useState([]);

  useState(()=>{
    const url ="http://localhost:3000/var/";
    axios.get(url)
    .then(res =>{
      if(res.data.success){
        const data =res.data.data;
        setDataVars(data);
      }
      else{
        alert('error web server');
        console.log(res);
      }
    })
    .catch(err=>{
      alert(err)
    });
  },[]);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-6" >
            <form className="row row-cols-lg-auto g-3 align-items-center">
                <div className="col-12">
                  <label className="visually-hidden" htmlFor="InflationMax">InflationMax</label>
                  <div className="input-group">
                    <input 
                      type="number" 
                      className="form-control" 
                      step={0.00001}
                      id="InflationMax" 
                      placeholder="Inflation Max" 
                      value={dataInflationMax}
                      onChange={value=>setInflationMax(value.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label className="visually-hidden" htmlFor="dataProductionCap">InflationMax</label>
                  <div className="input-group">
                    <input 
                      type="number" 
                      className="form-control" 
                      step={0.00001}
                      id="dataProductionCap" 
                      placeholder="Inflation Max" 
                      value={dataProductionCap}
                      onChange={value=>setProdutionCap(value.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary" onClick={() => sendSave()}>Submit</button>
              </div>
            </form>
          </div>
          <div className="col-6" >
            <table className='table table-hover table-striped'>
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Inflation Max</th>
                  <th scope="col">Production Cap</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <th>0</th>
                <td>0.0005</td>
                <td>25.0005</td>
                <td><button type="submit" className="btn btn-primary" >Submit</button></td>
              </tr>
                <LoadFillData/>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
  function LoadFillData(){
    return dataVars.map((data, index)=>{
      return(
        <tr key={index}>
            <th>{data.idVar}</th>
            <td>{data.InflationMax}</td>
            <td>{data.ProductionCap}</td>
            <td><button type="submit" className="btn btn-primary" >Submit</button></td>
        </tr>
      )
    });
  }

  function sendSave(){
    if(dataInflationMax === ''){
      alert('Campo não preenchido')
    }else if(dataProductionCap === ''){
      alert('Campo não preenchido')
    }
    else{
      const baseUrl = 'http://localhost:3000/var/create';
      console.log(dataInflationMax,dataProductionCap)
      const datapost={
        InflationMax: dataInflationMax,
        ProductionCap: dataProductionCap
      }
      axios.post(baseUrl, datapost)
      .then(response =>{
        if(response.data.success){

          alert(response.data.message);
        }
        else{
          alert(response.data.message);
        } 
      })
      .catch(error=>{
        alert('Error 34 ' + error);
      })
    }
  }

}

export default App;
