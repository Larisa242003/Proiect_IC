import React from "react";
import { useNavigate } from "react-router-dom";
import './Cos.css';

const Cos = ({ cos,setCos }) => {
  const navigate = useNavigate();

  console.log(cos); 

  const finalizareComanda = () => {
    // Logica de finalizare a comenzii
    alert("Comanda a fost finalizată!");
    // Poți adăuga logica pentru trimiterea comenzii la backend aici
    navigate('/');
  };

  const stergeDinCos = (id) => {
    const updatedCos = cos.filter(produs => produs.id !== id); // Filtrăm produsul care trebuie șters
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
              <img src={`/images/${produs.imagine}`} alt={produs.nume} />
              <h3>{produs.nume}</h3>
              <p><strong>Preț:</strong> {produs.pret} {produs.unitate}</p>
              <button onClick={() => stergeDinCos(produs.id)}>Șterge din coș</button> {/* Buton de ștergere */}
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
