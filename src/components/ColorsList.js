import React from 'react';
import SingleColor from './SingleColor';

function ColorsList({ item }) {
  const { title, variation, colorScheme, colors } = item;
  // console.log(item);
  // console.log(title, variation, colorScheme, colors);
  console.log('colores: ' + colors);
  return (
    <>
      <h2>
        {title} // <span style={{ color: '#999' }}>{variation}</span>
      </h2>
      <div className='colors-list'>
        {colors &&
          colors.map((color, index) => {
            const bgColor = `#${color}`;
            return (
              <SingleColor index={index} bgColor={bgColor} color={color} />
              // <div
              //   key={index}
              //   className='color-item'
              //   style={{ backgroundColor: bgColor }}
              // >
              //   {color}
              // </div>
            );
          })}
      </div>
    </>
  );
}

export default ColorsList;
