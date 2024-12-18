import React from 'react'; // Importa a biblioteca React, necessária para criar componentes
import ReactDOM from 'react-dom'; // Importa o ReactDOM, utilizado para renderizar o aplicativo na árvore DOM
import 'normalize.css'; // Importa o arquivo de estilos "normalize.css" para garantir consistência de estilos entre navegadores
import './index.css'; // Importa o arquivo de estilos globais personalizados
import Router from './routes'; // Importa o componente de rotas, que define toda a navegação do aplicativo

// Renderiza o aplicativo React no elemento HTML com o ID "root"
ReactDOM.render(
  <React.StrictMode>
    {/* O StrictMode ajuda a identificar problemas e práticas obsoletas durante o desenvolvimento */}
    <Router /> {/* Renderiza o componente principal que contém o sistema de rotas */}
  </React.StrictMode>,
  document.getElementById('root') // Seleciona o elemento HTML onde o aplicativo será injetado
);
