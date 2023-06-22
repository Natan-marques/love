import React, { useState, useEffect } from 'react';

const Love = () => {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(moveNoButton, 300);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleAccept = () => {
    setAccepted(true);
    alert('Eu te amo');
  };

  const moveNoButton = () => {
    const noButton = document.getElementById('noButton');
    const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));

    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
  };

  return (
    <div id="proposal">
      <div>Você aceita namorar comigo?</div>
      <button onClick={handleAccept}>Sim</button>
      <div
        id="noButton"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          cursor: 'pointer',
          backgroundColor: '#ff0000',
          color: '#ffffff',
          padding: '8px 16px',
          borderRadius: '4px',
          margin: '10px',
        }}
      >
        Não
      </div>
    </div>
  );
};

export default Love;