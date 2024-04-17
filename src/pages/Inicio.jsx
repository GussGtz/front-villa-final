import React, { useState, useEffect } from "react";
import "./Inicio.css";
import Navbar from "./NavInicio";
import { Line } from "react-chartjs-2";

const Inicio = () => {
  const [aveSeleccionada, setAveSeleccionada] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [alertModalVisible, setAlertModalVisible] = useState(false);
  const [temperaturaData, setTemperaturaData] = useState(null);

  useEffect(() => {
    // Llamar a la API para obtener los datos de temperatura
    fetch("/api/temperatura")
      .then((response) => response.json())
      .then((data) => {
        // Preparar los datos para el gráfico
        const labels = data.map((entry) => entry.fecha);
        const valores = data.map((entry) => entry.valor);
        const temperaturaChartData = {
          labels: labels,
          datasets: [
            {
              label: "Temperatura",
              data: valores,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        };
        setTemperaturaData(temperaturaChartData);
      })
      .catch((error) =>
        console.error("Error al obtener datos de temperatura:", error)
      );
  }, []);

  const handleSeleccionAve = (
    nombre,
    origen,
    tiempoIncubacion,
    temperaturaIncubacion,
    humedadIncubacion,
    imagen
  ) => {
    if (aveSeleccionada) {
      // Mostrar el modal de alerta si ya hay un ave seleccionada
      setAlertModalVisible(true);
    } else {
      // Cambiar el ave seleccionada si no hay ninguna
      setAveSeleccionada({
        nombre,
        origen,
        tiempoIncubacion,
        temperaturaIncubacion,
        humedadIncubacion,
        imagen,
      });
    }
  };

  const detenerIncubacion = () => {
    setModalVisible(true);
  };

  const aceptarModal = () => {
    setAveSeleccionada(null);
    setModalVisible(false);
  };

  const aceptarAlertModal = () => {
    setAlertModalVisible(false);
  };

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <div className="incubation-info">
          <div className="cards-container">
            <div
              className="card"
              onClick={() =>
                handleSeleccionAve(
                  "Gallina",
                  "Origen de la Gallina",
                  "Tiempo de incubación de la Gallina",
                  "Temperatura de incubación de la Gallina",
                  "Humedad de incubación de la Gallina",
                  "https://png.pngtree.com/png-clipart/20240218/original/pngtree-3d-cartoon-hen-design-png-image_14353877.png"
                )
              }
            >
              <div className="card-content">
                <h4>Gallina</h4>
                <img
                  src="https://png.pngtree.com/png-clipart/20240218/original/pngtree-3d-cartoon-hen-design-png-image_14353877.png"
                  alt="Gallina"
                />
              </div>
            </div>
            <div
              className="card"
              onClick={() =>
                handleSeleccionAve(
                  "Pato",
                  "Origen del Pato",
                  "Tiempo de incubación del Pato",
                  "Temperatura de incubación del Pato",
                  "Humedad de incubación del Pato",
                  "https://png.pngtree.com/png-clipart/20231021/original/pngtree-peaceful-duck-cartoon-character-crop-out-png-image_13391149.png"
                )
              }
            >
              <div className="card-content">
                <h4>Pato</h4>
                <img
                  src="https://png.pngtree.com/png-clipart/20231021/original/pngtree-peaceful-duck-cartoon-character-crop-out-png-image_13391149.png"
                  alt="Pato"
                />
              </div>
            </div>
            <div
              className="card"
              onClick={() =>
                handleSeleccionAve(
                  "Codorniz",
                  "Origen de la Codorniz",
                  "Tiempo de incubación de la Codorniz",
                  "Temperatura de incubación de la Codorniz",
                  "Humedad de incubación de la Codorniz",
                  "https://png.pngtree.com/png-clipart/20230820/original/pngtree-quail-bird-picture-character-friendly-picture-image_8114368.png"
                )
              }
            >
              <div className="card-content">
                <h4>Codorniz</h4>
                <img
                  src="https://png.pngtree.com/png-clipart/20230820/original/pngtree-quail-bird-picture-character-friendly-picture-image_8114368.png"
                  alt="Codorniz"
                />
              </div>
            </div>
          </div>
          <div className="incubation-card">
            <div className="incubation-details">
              <h3 className="subtitulo">Información del ave</h3>
              {aveSeleccionada && (
                <>
                  <p>Nombre: {aveSeleccionada.nombre}</p>
                  <p>Origen: {aveSeleccionada.origen}</p>
                  <p>
                    Tiempo de incubación: {aveSeleccionada.tiempoIncubacion}
                  </p>
                  <p>
                    Temperatura de incubación:{" "}
                    {aveSeleccionada.temperaturaIncubacion}
                  </p>
                  <p>
                    Humedad de incubación: {aveSeleccionada.humedadIncubacion}
                  </p>
                  <button
                    className="detener-incubacion-button"
                    onClick={detenerIncubacion}
                  >
                    Detener
                  </button>
                </>
              )}
            </div>
            <div className="incubation-image">
              {aveSeleccionada && (
                <>
                  <img src={aveSeleccionada.imagen} alt="Imagen del ave" />
                </>
              )}
            </div>
            <div className="temperature-card">
              <div className="card-content">
                <h4>Temperatura</h4>
                {temperaturaData && <Line data={temperaturaData} />}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h4>¿Desea detener la incubación?</h4>
            <div className="modal-buttons">
              <button onClick={aceptarModal}>Aceptar</button>
              <button onClick={() => setModalVisible(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
      {/* Alert Modal */}
      {alertModalVisible && (
        <div className="alert-modal">
          <div className="alert-modal-content">
            <h3>
              Actualmente estás incubando un ave. Termina la incubación para
              poder cambiar a otra ave.
            </h3>
            <div className="alert-modal-buttons">
              <button onClick={aceptarAlertModal}>Aceptar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Inicio;
