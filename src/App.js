import React, { useState } from 'react';
import ColorChanger from './ColorChanger';


function App() {
  const [inputText, setInputText] = useState('');
  const [submittedTexts, setSubmittedTexts] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputText.trim() !== '') {
      setSubmittedTexts([inputText, ...submittedTexts]);
      setInputText('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Введённый тест: {inputText}</p>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Напечатайте что-нибудь..."
        />
        <button type="submit">Отправить</button>
      </form>
      <ul>
        {submittedTexts.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
      <hr></hr>
      <div>
      <h1>Красим текст</h1>
      <ColorChanger /> 
    </div>

    </div>
  );
}

export default App;