import React, { useState } from 'react';

function ColorChanger() {
  const [color, setColor] = useState('black'); 

  const handleRedClick = () => {
    setColor('red'); 
  };

  const handleGreenClick = () => {
    setColor('green'); 
  };

  return (
    <div>
      <p style={{ color: color }}>
        Этот текст - <span style={{ color: color }}>{color}</span>
      </p>
      <button onClick={handleRedClick} style={{ marginRight: '10px' }}>Красный</button>
      <button onClick={handleGreenClick}>Зеленый</button>
    </div>
  );
}

export default ColorChanger;