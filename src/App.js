import React from 'react';
import { Routes, Route } from 'react-router-dom';

// components
import Asso from './components/Asso';
import Home from './components/Home';
import Edition0 from './components/Editions/Edition0';
import Edition1 from './components/Editions/Edition_1/Edition1';


const App = () => {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Asso />} />
          <Route path="/edition0" element={<Edition0 />} />
          <Route path="/edition1" element={<Edition1 />} />
        </Routes>
  );
};

export default App;
