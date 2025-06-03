import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Șterge datele din localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('cos'); // Dacă vrei să resetezi și coșul

    // Navighează utilizatorul la pagina de login
    navigate('/login');
  };

  return (
    <button onClick={handleLogout}>Deconectează-te</button>
  );
}

export default Logout;
