// Componente principal da aplicação React
// Aqui você define a estrutura e o comportamento do App
// Você pode adicionar estados, efeitos e outros hooks do React conforme necessário
// Este arquivo é onde a maior parte do desenvolvimento da aplicação acontece
// Você pode editar este arquivo livremente para construir sua aplicação
// Exemplo simples de um componente funcional React com estado

import { useState } from 'react';
import './App.css';

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div className="App">
      <h1>Contador em React 🔢</h1>
      <p>Este é meu primeiro projeto em react</p>
      <p>Valor atual: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Adicionar</button>
    </div>
  );
}

export default App;
