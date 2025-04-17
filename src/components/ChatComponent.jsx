import React, { useState } from 'react';
import { askChatGPT } from './ChatGPTService';

const ChatComponent = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleAsk = async () => {
    const reply = await askChatGPT(input);
    setResponse(reply);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Tarifmatik en lezzetli tariflerini yaparsan sana yardımcı olmak için hazır...</h1>
      <textarea
        rows={4}
        style={{ width: '100%' }}
        placeholder="Elindeki malzemeleri gir."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <button onClick={handleAsk}>Gönder</button>
      <div style={{ marginTop: '1rem', whiteSpace: 'pre-wrap' }}>
        <strong>Yanıt:</strong>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default ChatComponent;
