import React from 'react';

function SingleColor({ index, bgColor, color }) {
  return (
    <div
      key={index}
      className='color-item'
      style={{ backgroundColor: bgColor }}
    >
      {color}
    </div>
  );
}

export default SingleColor;
