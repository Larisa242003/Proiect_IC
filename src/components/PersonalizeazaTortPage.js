import React, { useState, useEffect } from "react";
import axios from "axios";
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

    const cos = JSON.parse(localStorage.getItem('cos')) || [];
    cos.push(tortPersonalizat);
    localStorage.setItem('cos', JSON.stringify(cos));

    alert("Tortul a fost adăugat în coș!");
  };

  const renderOptiuni = (items, name, setSelectat) => (
    <div className="categorie-grid">
      {items.map(item => (
        <div key={item.id} className="categorie-card">
          <input
            type="radio"
            id={`${name}-${item.id}`}
            name={name}
            value={item.id}
            onChange={() => setSelectat(item)}
          />
          <label htmlFor={`${name}-${item.id}`}>
            <img src={`/images/${item.imagine}`} alt={item.nume} class="optiune-imagine" />
            <strong>{item.nume}</strong> - {item.pret} lei
            <div className="descriere">{item.descriere}</div>
          </label>
        </div>
      ))}
    </div>
  );

  return (
    <div className="personalizeaza-container">
      <div className="header-bar">
        <h2>🎂 Personalizează tortul dorit 🎂</h2>
      </div>

      <div className="categorie-section">
        <h3>Alege un blat:</h3>
        {renderOptiuni(blaturi, "blat", setBlatSelectat)}
      </div>

      <div className="categorie-section">
        <h3>Alege o cremă:</h3>
        {renderOptiuni(creme, "crema", setCremaSelectata)}
      </div>

      <div className="categorie-section">
        <h3>Alege o glazură:</h3>
        {renderOptiuni(glazuri, "glazura", setGlazuraSelectata)}
      </div>

      <div className="categorie-section">
        <h3>Alege o inserție:</h3>
        {renderOptiuni(insertii, "insertie", setInsertieSelectata)}
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


