import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavigareButon.css'; // Stilizează cum dorești

const NavigareButon = () => {
  const navigate = useNavigate();

  return (
    <div className="navigare-butoane">
      <button onClick={() => navigate('/produse')}>🧁Vezi Produsele🧁</button>
      <button onClick={() => navigate('/personalizeaza')}>🎂Personalizează tortul dorit🎂</button>
      <button onClick={() => navigate('/cos')}>🛒 Vezi Coșul</button>
      <button onClick={() => navigate('/cake-matchmaker')}>🍰 Cake Matchmaker 🍰</button>

    </div>
  );
};

export default NavigareButon;
