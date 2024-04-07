// App.js
import React from 'react';
import Card from '../src/card';
import '../src/App.css'; // Asume que estás utilizando CSS puro

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="card-container">
        <Card
          title="TEMPERATURA"
          content="32 grados"
          borderColor="#FF4500" // Este es el color del borde, puedes cambiarlo según necesites
        />
        {/* Repite el componente Card para los demás parámetros */}
      </div>
    </div>
  );
}

export default App;
