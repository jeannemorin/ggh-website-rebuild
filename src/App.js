import React from 'react';
import { Routes, Route } from 'react-router-dom';

// components
import Asso from './components/Asso';
import Home from './components/Home';
import Edition0 from './components/Editions/EditionPages/Edition0';
import Edition1 from './components/Editions/EditionPages/Edition1';
import Edition2 from './components/Editions/EditionPages/Edition2';
import Archives from './components/Archives';



const App = () => {
  return (

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Asso />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/archives/edition0" element={<Edition0 />} />
          <Route path="/archives/edition1" element={<Edition1 />} />
          <Route path="/archives/edition2" element={<Edition2 />} />

        </Routes>
  );
};

export default App;
