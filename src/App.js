import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from '../src/pages/Inicio';
import Gallina from '../src/pages/Gallina'; 
import Pato from '../src/pages//Pato';
import Codorniz from '../src/pages/Codorniz';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/gallina" element={<Gallina />} />
        <Route path="/pato" element={<Pato />} />
        <Route path="/codorniz" element={<Codorniz />} />
      </Routes>
    </Router>
  );
}

export default App;
