import  { useState } from 'react';

const colors = ['red', 'green', 'blue', 'yellow', 'violet'];

const ColorBox = () => {
  const [colorIndex, setColorIndex] = useState(0);

  const handleClick = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  const currentColor = colors[colorIndex];
  const nextColor = colors[(colorIndex + 1) % colors.length];  

  return (
    <div style={{width: '200px',height: '200px',backgroundColor: currentColor,padding: '20px', margin: '10px'}}>
        <button onClick={handleClick}>Next color: {nextColor}</button>
        <p>Current color: {currentColor}</p>
    </div>
  );
};

export default ColorBox;