//import logo from './logo.svg';
import React,{ useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./components/HomePage";
import ProdusePredefiniteList from "./components/ProdusePredefiniteList";
import AddProdusPredefinit from "./components/AddProdusPredefinit";
import Cos from './components/Cos';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import PersonalizeazaTortPage from './components/PersonalizeazaTortPage';

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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/personalizeaza" element={<PersonalizeazaTortPage />} />
      </Routes>
    </Router>
  );
}



export default App;
