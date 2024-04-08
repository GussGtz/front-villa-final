import React from 'react';
import { Link } from 'react-router-dom';
import './Gallina.css'; 
import Navbar from './NavInicio';

const Gallina = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="main-card">
          <h1>Gallina</h1>
          <img src="https://png.pngtree.com/png-clipart/20240218/original/pngtree-3d-cartoon-hen-design-png-image_14353877.png" alt="Gallina" />
          <Link to="/">
          <button className="back-button">Regresar</button>
          </Link>
        </div>
        <div className="parameter-cards">
          <div className="parameter-card">
            <h3>Parámetros de temperatura</h3>
            <p>Temperatura óptima: 37°C</p>
            <p>Rango de temperatura: 36°C - 38°C</p>
          </div>
          <div className="parameter-card">
            <h3>Parámetros de humedad</h3>
            <p>Humedad óptima: 60%</p>
            <p>Rango de humedad: 55% - 65%</p>
          </div>
          <div className="parameter-card">
            <h3>Tiempo de incubación</h3>
            <p>Tiempo estimado: 21 días</p>
            <p>Rango de tiempo: 20 - 23 días</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallina;
