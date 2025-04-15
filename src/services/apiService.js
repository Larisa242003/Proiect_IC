import axios from "axios";

const API_URL = "http://localhost:8080/api/produse-predefinite"; // URL-ul backend-ului

// Funcție pentru obținerea produselor
export const getProduse = () => {
  return axios.get(API_URL);
};

// Funcție pentru a adăuga un produs
export const addProdus = (produs) => {
  return axios.post(API_URL, produs);
};