import React from 'react';
import { Routes, Route } from 'react-router-dom';

// components
import Asso from './components/Asso';
import Home from './components/Home';


const App = () => {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Asso />} />
        </Routes>
  );
};

export default App;
