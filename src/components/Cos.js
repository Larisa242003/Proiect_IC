import React from "react";
import { useNavigate } from "react-router-dom";
import './Cos.css';

const Cos = ({ cos, setCos }) => {
  const navigate = useNavigate();

  console.log(cos);

  const finalizareComanda = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate('/login', { state: { fromCos: true } }); // îi spunem că vine din Coș
      return;
    }

    alert("Comanda a fost finalizată!");
    navigate('/');
  };

  const stergeDinCos = (index) => {
    const updatedCos = cos.filter((_, i) => i !== index); // Filtrăm produsul care trebuie șters
    setCos(updatedCos);
    // Salvează coșul actualizat în localStorage
    localStorage.setItem('cos', JSON.stringify(updatedCos));
  };

  return (
    <div className="cos-container">
      <h2>Coșul tău</h2>
      <div className="cos-list">
        {cos.length === 0 ? (
          <p>Coșul este gol!</p>
        ) : (
          cos.map((produs, index) => (
            <div className="produs-card" key={index}>
              {produs.blat ? (
                // Tort personalizat
                <>
                  <h3>Tort Personalizat</h3>
                  <p><strong>Blat:</strong> {produs.blat.nume} - {produs.blat.pret} lei</p>
                  <p><strong>Cremă:</strong> {produs.crema.nume} - {produs.crema.pret} lei</p>
                  <p><strong>Glazură:</strong> {produs.glazura.nume} - {produs.glazura.pret} lei</p>
                  <p><strong>Inserție:</strong> {produs.insertie.nume} - {produs.insertie.pret} lei</p>
                  <p><strong>Preț total:</strong> {produs.blat.pret + produs.crema.pret + produs.glazura.pret + produs.insertie.pret} lei</p>
                </>
              ) : (
                // Produs predefinit
                <>
                  <h3>{produs.nume}</h3>
                  <img src={`/images/${produs.imagine}`} alt={produs.nume} />
                  <p><strong>Preț:</strong> {produs.pret} {produs.unitate}</p>
                </>
              )}

              <button onClick={() => stergeDinCos(index)}>Șterge din coș</button>
            </div>
          ))
        )}
      </div>

      {cos.length > 0 && (
        <button className="finalizeaza-comanda-btn" onClick={finalizareComanda}>
          Finalizează comanda
        </button>
      )}
    </div>
  );
};

export default Cos;
