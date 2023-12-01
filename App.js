import React, { useState, useEffect } from 'react';
import HomeScreen from './HomeScreen';
import AvaliacaoScreen from './AvaliacaoScreen';

const App = () => {
  const [showAvaliacao, setShowAvaliacao] = useState(false);

  // Simula a chamada do backend (você deve substituir isso pela lógica real)
  const fetchBackendData = () => {
    // Aqui você deve fazer a chamada real para o backend
    // Se a chamada for bem-sucedida, você pode alterar o estado para exibir a tela de avaliação
    setTimeout(() => {
      setShowAvaliacao(true);
    }, 5000); // Tempo simulado de resposta do backend (2 segundos)
  };

  useEffect(() => {
    fetchBackendData();
  }, []); // Executa a chamada do backend ao montar o componente

  return (
    <>
      {showAvaliacao ? (
        <AvaliacaoScreen />
      ) : (
        <HomeScreen />
      )}
    </>
  );
};

export default App;
