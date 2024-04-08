import React from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css';
import Navbar from './NavInicio';

const Inicio = () => {
  return (
    <>
    <Navbar />
    <div className="dashboard">
      <div className="incubation-info">
        <div className="incubation-card">
          <h3 className='subtitulo'>En este momento estás incubando:</h3>
          <h2> Huevos de Gallina</h2>
          <p>Temperatura: 37°C</p>
          <p>Humedad: 60%</p>
          <p>Hora de inicio de la incubación: 09:00 AM</p>
        </div>
      </div>
      <h3>Escoge el huevo que deseas incubar</h3>
      <div className="cards-container">
        <div className="card">
          <h2>Gallina</h2>
          <img src="https://png.pngtree.com/png-clipart/20240218/original/pngtree-3d-cartoon-hen-design-png-image_14353877.png" alt="Gallina" />
          <Link to="/gallina" className="button-bar">Seleccionar</Link>
        </div>
        <div className="card">
          <h2>Pato</h2>
          <img src="https://png.pngtree.com/png-clipart/20231021/original/pngtree-peaceful-duck-cartoon-character-crop-out-png-image_13391149.png" alt="Pato" />
          <Link to="/pato" className="button-bar">Seleccionar</Link>
        </div>
        <div className="card">
          <h2>Codorniz</h2>
          <img src="https://png.pngtree.com/png-clipart/20230820/original/pngtree-quail-bird-picture-character-friendly-picture-image_8114368.png" alt="Codorniz" />
          <Link to="/codorniz" className="button-bar">Seleccionar</Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default Inicio;
