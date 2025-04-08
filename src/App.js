

//import logo from './logo.svg';
import './App.css';
import React from "react";
import ProdusePredefiniteList from "./components/ProdusePredefiniteList";
import AddProdusPredefinit from "./components/AddProdusPredefinit";
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <HomePage />
      <ProdusePredefiniteList />
      <AddProdusPredefinit />
    </div>
  );
}

export default App;