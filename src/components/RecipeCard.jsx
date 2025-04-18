import React from 'react';

const RecipeCard = ({ title, content, onAlternativeClick }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '12px',
      padding: '16px',
      marginBottom: '16px',
      boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
      backgroundColor: '#fff'
    }}>
      <h2 style={{ marginBottom: '8px' }}>🍽️ {title}</h2>
      <p style={{ marginBottom: '12px' }}>{content}</p>
      <button onClick={onAlternativeClick} style={{
        backgroundColor: '#ff9800',
        color: '#fff',
        border: 'none',
        padding: '8px 12px',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>
        Alternatif Tarifler
      </button>
    </div>
  );
};

export default RecipeCard;
