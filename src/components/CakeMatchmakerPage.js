import React, { useState } from 'react';
import './CakeMatchmakerPage.css'; // you can style this file separately

const CakeMatchmakerPage = () => {
  const [event, setEvent] = useState('');
  const [forKids, setForKids] = useState(false);
  const [interests, setInterests] = useState('');
  const [personality, setPersonality] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult('');

    try {
      const response = await fetch('/api/cake-matchmaker', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event, forKids, interests, personality }),
      });

      const data = await response.json();
      setResult(data.suggestion || 'No suggestion received.');
    } catch (error) {
      setResult('Error fetching suggestion. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cake-matchmaker-container">
      <h1>Cake Matchmaker</h1>
      <form onSubmit={handleSubmit} className="cake-matchmaker-form">
        <label>
          Event:
          <input
            type="text"
            value={event}
            onChange={(e) => setEvent(e.target.value)}
            placeholder="e.g. Birthday, Wedding, Office Party"
            required
          />
        </label>

        <label>
          Is it for kids?
          <input
            type="checkbox"
            checked={forKids}
            onChange={(e) => setForKids(e.target.checked)}
          />
        </label>

        <label>
          Interests / Hobbies:
          <input
            type="text"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            placeholder="e.g. Dinosaurs, Chocolate, Sports"
            required
          />
        </label>

        <label>
          Describe your personality (optional):
          <textarea
            value={personality}
            onChange={(e) => setPersonality(e.target.value)}
            placeholder="Energetic, calm, adventurous..."
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? 'Finding your cake...' : 'Find My Cake!'}
        </button>
      </form>

      {result && (
        <div className="cake-matchmaker-result">
          <h2>Your Cake Match:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default CakeMatchmakerPage;
