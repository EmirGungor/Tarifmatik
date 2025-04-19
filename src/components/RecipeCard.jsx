import React from 'react';
import '../styles/recipecard.css'

const RecipeCard = ({ title, content, onAlternativeClick }) => {
  return (
    <div className='rcp-card'>
      <h2 style={{ marginBottom: '8px' }}>🍽️ {title}</h2>
      <p style={{ marginBottom: '12px' }}>{content}</p>
      <button onClick={onAlternativeClick} className='rcp-btn'>
        Alternatif Tarifler
      </button>
    </div>
  );
};

export default RecipeCard;
