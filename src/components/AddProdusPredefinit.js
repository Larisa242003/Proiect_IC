import React, { useState } from "react";
//import { addProdus } from "../services/apiService";
import './AddProdusPredefinit.css'; 

const AddProdus = () => {
    const [produs, setProdus] = useState({
        nume: '',
        descriere: '',
        ingrediente: '',
        pret: '',
        unitate: '',
        imagine: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProdus({
            ...produs,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Trimite cererea POST către backend pentru a adăuga produsul
        const response = await fetch('http://localhost:8080/api/produse-predefinite', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(produs),
        });

        if (response.ok) {
            alert('Produs adăugat cu succes!');
        } else {
            alert('A apărut o problemă!');
        }
    };

    return (
        <div className="add-produs-form">
            <h2>Adaugă Produs</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nume">Nume</label>
                    <input
                        type="text"
                        id="nume"
                        name="nume"
                        value={produs.nume}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="descriere">Descriere</label>
                    <input
                        type="text"
                        id="descriere"
                        name="descriere"
                        value={produs.descriere}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ingrediente">Ingrediente</label>
                    <input
                        type="text"
                        id="ingrediente"
                        name="ingrediente"
                        value={produs.ingrediente}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pret">Preț</label>
                    <input
                        type="number"
                        id="pret"
                        name="pret"
                        value={produs.pret}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="unitate">Unitate</label>
                    <input
                        type="text"
                        id="unitate"
                        name="unitate"
                        value={produs.unitate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="imagine">Imagine</label>
                    <input
                        type="text"
                        id="imagine"
                        name="imagine"
                        value={produs.imagine}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Adaugă Produs</button>
            </form>
        </div>
    );
};

export default AddProdus;