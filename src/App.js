import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigareButon from './components/NavigareButon'; // Nav visible on all pages

import HomePage from "./components/HomePage";
import ProdusePredefiniteList from "./components/ProdusePredefiniteList";
import AddProdusPredefinit from "./components/AddProdusPredefinit";
import Cos from './components/Cos';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import PersonalizeazaTortPage from './components/PersonalizeazaTortPage';
import CakeMatchmakerPage from './components/CakeMatchmakerPage';
import PlaseazaComanda from './components/PlaseazaComanda';

function App() {
  const [cos, setCos] = useState(() => {
    const savedCos = localStorage.getItem('cos');
    return savedCos ? JSON.parse(savedCos) : [];
  });

  return (
    <Router>
      <NavigareButon /> {/* Show on all pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produse" element={<ProdusePredefiniteList cos={cos} setCos={setCos} />} />
        <Route path="/adauga-produs" element={<AddProdusPredefinit />} />
        <Route path="/cos" element={<Cos cos={cos} setCos={setCos} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/personalizeaza" element={<PersonalizeazaTortPage />} />
        <Route path="/cake-matchmaker" element={<CakeMatchmakerPage />} />
        <Route path="/finalizare" element={<PlaseazaComanda cos={cos} setCos={setCos} />} />
      </Routes>
    </Router>
  );
}

export default App;
