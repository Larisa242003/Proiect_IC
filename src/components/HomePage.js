// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Stilurile pe care le ai deja

const HomePage = () => {
    const navigate = useNavigate();
  return (
    <div>
      <header>
        <h1>Cofetăria Deliciu Magic</h1>
        <nav>
          <ul>
            <li><a href="#despre">Despre Noi</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <section className="hero">
        <h2>Bine ai venit la Cofetăria Deliciu Magic!</h2>
        <p>Locul perfect pentru deserturi delicioase și momente dulci.</p>
        <img src="/images/cofetarie_deliciu_magic.jpg" alt="Imagine cofetărie" />
        <br />
        <button onClick={() => navigate('/produse')}>Vezi Produsele</button>

      </section>

      <section id="despre">
        <h2>Despre Noi</h2>
        <p>Suntem o cofetărie artizanală dedicată creării celor mai delicioase prăjituri, torturi și delicii dulci. Folosim doar ingrediente naturale și rețete tradiționale pentru a-ți aduce gustul autentic al deserturilor.</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Ne găsești la adresa Str. Dulce nr. 10, Timișoara.</p>
        <p>Telefon: 0786 501 621</p>
        <p>Email: contact@deliciumagic.ro</p>
      </section>

      <section id="social-media">
        <h2>Urmează-ne pe rețelele sociale</h2>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/facebook.png" alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram.jpeg" alt="Instagram" />
          </a>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Cofetăria Deliciu Magic. Toate drepturile rezervate.</p>
      </footer>
    </div>
  );
};

export default HomePage;