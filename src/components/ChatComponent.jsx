import React, { useState } from 'react';
import { askChatGPT } from './ChatGPTService';
import RecipeCard from './RecipeCard'; // Kart bileşenini de kullanacağız

const ChatComponent = () => {
  const [input, setInput] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleAsk = async () => {
    if (!input.trim()) return;

    const reply = await askChatGPT(input);

    setRecipes((prev) => [
      ...prev,
      {
        title: `Tarif ${prev.length + 1}`,
        content: reply,
      },
    ]);

    setInput('');
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        🍳 Tarifmatik <br /> <span style={{ fontSize: '1rem' }}>Elindeki malzemelerle sana özel tarifler!</span>
      </h1>

      <textarea
        rows={4}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '1rem',
          borderRadius: '8px',
          border: '1px solid #ccc',
          marginBottom: '1rem',
        }}
        placeholder="Elindeki malzemeleri gir (örn: muz, süt, yulaf)..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={handleAsk}
        style={{
          backgroundColor: '#4CAF50',
          color: '#fff',
          padding: '10px 20px',
          fontSize: '1rem',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          marginBottom: '2rem',
        }}
      >
        Tarif Öner!
      </button>

      {recipes.length > 0 && (
        <div>
          <h2>🍽️ Önerilen Tarifler</h2>
          {recipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              title={recipe.title}
              content={recipe.content}
              onAlternativeClick={() => alert("Alternatif tarif özelliği yakında! 😋")}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatComponent;
