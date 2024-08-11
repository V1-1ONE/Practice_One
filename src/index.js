import React from "react";
import ReactDOMClient from "react-dom/client"
import App from './App'

// Создаем корневой рендерер
const root = ReactDOMClient.createRoot(document.getElementById('root'));

// Рендерим компонент App
root.render(<App />);

