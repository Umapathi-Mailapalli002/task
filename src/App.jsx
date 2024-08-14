import React, { useState } from 'react';

const Matrix = () => {
  const [colors, setColors] = useState(Array(9).fill('white')); // To store colors of each box
  const [clickOrder, setClickOrder] = useState([]); // To store the order of clicks

  // Handle click event
  const handleClick = (index) => {
    if (colors[index] === 'white') {
      const newColors = [...colors];
      newColors[index] = 'green';

      setColors(newColors);
      setClickOrder([...clickOrder, index]);
      console.log( [...clickOrder, index])

      // Check if it's the last box
      if (clickOrder.length === 8) {
        setTimeout(() => changeToOrange(newColors), 500); // Delay for effect
      }
    }
  };

  // Change all boxes to orange in order of clicks
  const changeToOrange = (currentColors) => {
    const updatedColors = [...currentColors];
    clickOrder.forEach((index, i) => {
      setTimeout(() => {
        updatedColors[index] = 'orange';
        setColors([...updatedColors]);
      }, 500 * (i + 1)); // Delay each color change for sequence effect
    });
  };

  return (
    <div className='flex justify-center h-[100vh] items-center'>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gap: '5px' }}>
      {colors.map((color, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          style={{ width: '100px', height: '100px', backgroundColor: color, border: '3px solid black' }}
        ></div>
      ))}
    </div>
    </div>
    
  );
};

export default Matrix;