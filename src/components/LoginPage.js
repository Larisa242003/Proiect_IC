import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css'; // 🎀 CSS-ul girly

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const fromCos = location.state?.fromCos;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      alert('Autentificare reușită!');

      if (fromCos) {
        navigate('/cos'); // Dacă venea din Coș, îl întorc în Coș
      } else {
        navigate('/');
      }
    } catch (error) {
      alert('Autentificare eșuată. Verifică datele!');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Autentificare</h2>
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
        <button type="submit">Login</button>

        <p className="register-link">
          Nu ai cont?
          <button type="button" className="register-button" onClick={() => navigate('/register', { state: { fromCos } })}>
            Înregistrează-te aici
          </button>
        </p>
      </form>
    </div>
  );
}

export default Login;




