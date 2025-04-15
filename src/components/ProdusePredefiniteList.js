import React, { useState, useEffect } from "react";
import { getProduse } from "../services/apiService";
import { useNavigate } from "react-router-dom";
import './ProdusePredefiniteList.css';

const ProduseList = () => {
  const [produse, setProduse] = useState([]);
  const [cos, setCos] = useState(() => {
    // Verifică dacă există produse în localStorage
    const savedCos = localStorage.getItem('cos');
    return savedCos ? JSON.parse(savedCos) : [];
  }); // Coșul de cumpărături
  const navigate = useNavigate();

  useEffect(() => {
    getProduse()
      .then((response) => {
        console.log("Date primite de la backend:", response.data);
        setProduse(response.data);
      })
      .catch((error) => {
        console.error("Eroare la încărcarea produselor!", error);
      });
  }, []);

  const adaugaInCos = (produs) => {
    const updatedCos = [...cos, produs];
    setCos(updatedCos);
    // Salvează coșul actualizat în localStorage
    console.log("Coș actualizat:", updatedCos); 
    localStorage.setItem('cos', JSON.stringify(updatedCos));
  };

  return (
    <div className="produse-container">
      <h2 className="produse-title">Produse cofetărie</h2>
      
      {/* Buton pentru a naviga spre comanda finală */}
      <button className="adauga-btn" onClick={() => navigate('/cos')}>
        🛒 Vezi coșul ({cos.length})
      </button>

      <div className="produse-grid">
        {produse.map((produs) => (
          <div className="produs-card" key={produs.id}>
            <img src={`/images/${produs.imagine}`} alt={produs.nume} />
            <h3>{produs.nume}</h3>
            <p><strong>Descriere:</strong> {produs.descriere}</p>
            <p><strong>Ingrediente:</strong> {produs.ingrediente}</p>
            <p><strong>Preț:</strong> {produs.pret} {produs.unitate}</p>
            <button className="adauga-in-cos-btn" onClick={() => adaugaInCos(produs)}>
              Adaugă în coș
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProduseList;
