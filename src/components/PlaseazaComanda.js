import { useState } from 'react';
import axios from 'axios';
import './PlaseazaComanda.css';

function PlaseazaComanda({ cos, setCos }) {
  const [nume, setNume] = useState('');
  const [adresa, setAdresa] = useState('');
  const [telefon, setTelefon] = useState('');
  const [observatii, setObservatii] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');

      await axios.post('http://localhost:8080/api/comenzi', {
        nume,
        adresa,
        telefon,
        observatii,
        produse: cos, // trimite produsele din coș
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      alert('Comanda a fost plasată cu succes!');

      // Golește coșul
      setCos([]);
      localStorage.removeItem('cos');

    } catch (error) {
      console.error(error);
      alert('Eroare la plasarea comenzii.');
    }
  };

  return (
    <div className="form-comanda">
      <h2>Plasează Comanda</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nume complet"
          value={nume}
          onChange={(e) => setNume(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Adresă de livrare"
          value={adresa}
          onChange={(e) => setAdresa(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Telefon"
          value={telefon}
          onChange={(e) => setTelefon(e.target.value)}
          required
        />
        <textarea
          placeholder="Observații (opțional)"
          value={observatii}
          onChange={(e) => setObservatii(e.target.value)}
        />
        <button type="submit">Trimite Comanda</button>
      </form>
    </div>
  );
}

export default PlaseazaComanda;
