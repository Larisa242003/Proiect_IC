import React, { useState, useEffect } from "react";
import axios from "axios";
//import { useNavigate } from "react-router-dom";
import './PersonalizeazaTortPage.css';

const PersonalizeazaTortPage = () => {
  const [blaturi, setBlaturi] = useState([]);
  const [creme, setCreme] = useState([]);
  const [glazuri, setGlazuri] = useState([]);
  const [insertii, setInsertii] = useState([]);

  const [blatSelectat, setBlatSelectat] = useState(null);
  const [cremaSelectata, setCremaSelectata] = useState(null);
  const [glazuraSelectata, setGlazuraSelectata] = useState(null);
  const [insertieSelectata, setInsertieSelectata] = useState(null);


  useEffect(() => {
    axios.get('http://localhost:8080/api/construite/blaturi').then(res => setBlaturi(res.data));
    axios.get('http://localhost:8080/api/construite/creme').then(res => setCreme(res.data));
    axios.get('http://localhost:8080/api/construite/glazuri').then(res => setGlazuri(res.data));
    axios.get('http://localhost:8080/api/construite/insertii').then(res => setInsertii(res.data));
  }, []);

  const adaugaInCos = () => {
    const pretTotal = blatSelectat.pret + cremaSelectata.pret + glazuraSelectata.pret + insertieSelectata.pret;
  
    const tortPersonalizat = {
      blat: blatSelectat,
      crema: cremaSelectata,
      glazura: glazuraSelectata,
      insertie: insertieSelectata,
      pretTotal: pretTotal
    };
  
    console.log("Tort adăugat în coș:", tortPersonalizat);
  
    const cos = JSON.parse(localStorage.getItem('cos')) || [];
    cos.push(tortPersonalizat);
    localStorage.setItem('cos', JSON.stringify(cos));
  
    alert("Tortul a fost adăugat în coș!");
  };
  

  return (
    <div className="personalizeaza-container">
      <h2>🎂 Personalizează-ți tortul</h2>

      <div className="categorie-section">
        <h3>Alege un blat:</h3>
        {blaturi.map(blat => (
          <div key={blat.id}>
            <input
              type="radio"
              id={`blat-${blat.id}`}
              name="blat"
              value={blat.id}
              onChange={() => setBlatSelectat(blat)}
            />
            <label htmlFor={`blat-${blat.id}`}>
              {blat.nume} - {blat.pret} lei
              <div className="descriere">{blat.descriere}</div>
            </label>
          </div>
        ))}
      </div>

      <div className="categorie-section">
        <h3>Alege o cremă:</h3>
        {creme.map(crema => (
          <div key={crema.id}>
            <input
              type="radio"
              id={`crema-${crema.id}`}
              name="crema"
              value={crema.id}
              onChange={() => setCremaSelectata(crema)}
            />
            <label htmlFor={`crema-${crema.id}`}>
              {crema.nume} - {crema.pret} lei
              <div className="descriere">{crema.descriere}</div>
            </label>
          </div>
        ))}
      </div>

      <div className="categorie-section">
        <h3>Alege o glazură:</h3>
        {glazuri.map(glazura => (
          <div key={glazura.id}>
            <input
              type="radio"
              id={`glazura-${glazura.id}`}
              name="glazura"
              value={glazura.id}
              onChange={() => setGlazuraSelectata(glazura)}
            />
            <label htmlFor={`glazura-${glazura.id}`}>
              {glazura.nume} - {glazura.pret} lei
              <div className="descriere">{glazura.descriere}</div>
            </label>
          </div>
        ))}
      </div>

      <div className="categorie-section">
        <h3>Alege o inserție:</h3>
        {insertii.map(insertie => (
          <div key={insertie.id}>
            <input
              type="radio"
              id={`insertie-${insertie.id}`}
              name="insertie"
              value={insertie.id}
              onChange={() => setInsertieSelectata(insertie)}
            />
            <label htmlFor={`insertie-${insertie.id}`}>
              {insertie.nume} - {insertie.pret} lei
              <div className="descriere">{insertie.descriere}</div>
            </label>
          </div>
        ))}
      </div>

      <button
        className="adauga-cos-btn"
        disabled={!blatSelectat || !cremaSelectata || !glazuraSelectata || !insertieSelectata}
        onClick={adaugaInCos}
      >
        ➕ Adaugă în coș
      </button>
    </div>
  );
};

export default PersonalizeazaTortPage;

