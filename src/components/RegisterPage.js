import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './RegisterPage.css';

function Register() {
  const [nume, setNume] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const fromCos = location.state?.fromCos;

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/auth/register', {
        nume,
        email,
        password,
      });
      alert('Înregistrare reușită! Te poți autentifica acum.');
      navigate('/login', { state: { fromCos } });
    } catch (error) {
      alert('Înregistrare eșuată. Încearcă alt email!');
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h2>Înregistrare</h2>
        <input 
          type="text" 
          placeholder="Nume complet" 
          value={nume}
          onChange={(e) => setNume(e.target.value)}
          required
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input 
          type="password" 
          placeholder="Parolă" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Înregistrează-te</button>
      </form>
    </div>
  );
}

export default Register;






