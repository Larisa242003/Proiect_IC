
//import logo from './logo.svg';
import React,{ useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProdusePredefiniteList from "./components/ProdusePredefiniteList";
import AddProdusPredefinit from "./components/AddProdusPredefinit";
import Cos from './components/Cos';

function App() {
  const [cos, setCos] = useState(() => {
    const savedCos = localStorage.getItem('cos');
    return savedCos ? JSON.parse(savedCos) : [];
  });
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/produse" element={<ProdusePredefiniteList cos={cos} setCos={setCos} />} />
        <Route path="/adauga-produs" element={<AddProdusPredefinit />} />
        <Route path="/cos" element={<Cos cos={cos} setCos={setCos} />} />
      </Routes>
    </Router>
  );
}

export default App;
