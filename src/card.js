import React from 'react';

// Importación de íconos FontAwesome
import {
  FaTemperatureHigh, FaTint, FaClock, FaSun, FaWater, FaHome,
  FaInfo, FaCog, FaUser, FaFan, FaUtensils, FaVial, FaSeedling,
  FaLightbulb, FaThermometerHalf, FaBars, FaArrowLeft,
} from 'react-icons/fa';

import './App.css';

// Componente Navbar
const Navbar = () => (
  <nav className="navbar">
    <FaBars className="navbar-icon" />
    <h1>Control de Incubadora</h1>
    <button className="navbar-button"><FaHome /> Inicio</button>
    <button className="navbar-button"><FaInfo /> Acerca de</button>
    <button className="navbar-button"><FaCog /> Configuración</button>
    <button className="navbar-button"><FaUser /> Perfil</button>
  </nav>
);

// Componente Principal App
const App = () => {
  const handleTemperatureChange = (e) => console.log(e.target.value);
  const handleHumidityChange = (e) => console.log(e.target.value);
  const handleIncubationChange = (e) => console.log(e.target.value);
  // Define aquí manejadores adicionales para nuevas funcionalidades si es necesario

  return (
    <div className="app">
      <Navbar />
      <div className="app-container">

        <div className="app-header">
          <p>Parámetros de Control</p>
        </div>

        <div className="app-content">

          {/* Primer grupo de tarjetas - Control de Parámetros Básicos */}
          <div className="parameter-container">

            <div className="parameter">
              <FaTemperatureHigh className="icon temperature-icon" />
              <input type="range" className="slider temperature-slider" onChange={handleTemperatureChange} />
              <span className="parameter-value">32°C</span>
            </div>

            <div className="parameter">
              <FaTint className="icon humidity-icon" />
              <input type="range" className="slider humidity-slider" onChange={handleHumidityChange} />
              <span className="parameter-value">50% Humedad</span>
            </div>

            <div className="parameter">
              <FaClock className="icon incubation-icon" />
              <input type="range" className="slider incubation-slider" onChange={handleIncubationChange} />
              <span className="parameter-value">1d 8h Incubación</span>
            </div>

          </div>
          {/* Fin del Primer Grupo de Tarjetas */}

          {/* Segundo grupo de tarjetas - Control Avanzado de Parámetros */}
          <div className="parameter-container">

            <div className="parameter">
              <FaSun className="icon sun-icon" />
              <input type="range" className="slider sun-slider" />
              <span className="parameter-value">Intensidad de Luz</span>
            </div>

            <div className="parameter">
              <FaWater className="icon water-icon" />
              <input type="range" className="slider water-slider" />
              <span className="parameter-value">Nivel de Agua</span>
            </div>

            <div className="parameter">
              <FaFan className="icon ventilation-icon" />
              <input type="range" className="slider ventilation-slider" />
              <span className="parameter-value">Nivel de Ventilación</span>
            </div>

          </div>
          {/* Fin del Segundo Grupo de Tarjetas */}

          {/* Tercer grupo de tarjetas - Monitoreo y Ajustes Específicos */}
          <div className="parameter-container">

            <div className="parameter">
              <FaUtensils className="icon feeding-icon" />
              <input type="range" className="slider feeding-slider" />
              <span className="parameter-value">Frecuencia de Alimentación</span>
            </div>

            <div className="parameter">
              <FaVial className="icon ph-icon" />
              <input type="range" className="slider ph-slider" />
              <span className="parameter-value">Nivel de pH</span>
            </div>

            <div className="parameter">
              <FaSeedling className="icon growth-icon" />
              <input type="range" className="slider growth-slider" />
              <span className="parameter-value">Tasa de Crecimiento</span>
            </div>

          </div>
          {/* Fin del Tercer Grupo de Tarjetas */}

          {/* Cuarto grupo de tarjetas - Nuevas Funcionalidades */}
          <div className="parameter-container">

            <div className="parameter-row">
              <div className="parameter">
                <FaLightbulb className="icon idea-icon" />
                <input type="range" className="slider idea-slider" />
                <span className="parameter-value">Iluminación Adicional</span>
              </div>

              <div className="parameter">
                <FaThermometerHalf className="icon temp-adjust-icon" />
                <input type="range" className="slider temp-adjust-slider" />
                <span className="parameter-value">Ajuste Fino Temperatura</span>
              </div>
            </div>
            {/* Espacio reservado para una segunda fila de nuevas tarjetas si es necesario */}
            
          </div>
          {/* Fin del Cuarto Grupo de Tarjetas */}

          <button className="action-button">
            <FaArrowLeft /> Volver
          </button>

        </div>
      </div>
    </div>
  );
};

export default App;
