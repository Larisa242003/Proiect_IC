import React, { useState, useEffect } from "react";
import { getProduse } from "../services/apiService";

const ProduseList = () => {
  const [produse, setProduse] = useState([]);

  useEffect(() => {
    getProduse()
      .then((response) => {
        console.log("Date primite de la backend:", response.data); // 🔍 Afișează în consolă
        setProduse(response.data); // Salvează datele în state
      })
      .catch((error) => {
        console.error("Eroare la încărcarea produselor!", error);
      });
  }, []);

  return (
    <div>
      <h2>Produse Cofetărie</h2>

      <ul>
        {produse.map((produs) => (
          <li key={produs.id}>
            <h3>{produs.nume}</h3>
            <p>{produs.descriere}</p>
            <p>{produs.ingrediente}</p>
            <p>{produs.pret} {produs.unitate}</p>
            <img src={`/images/${produs.imagine}`} alt={produs.nume} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProduseList;