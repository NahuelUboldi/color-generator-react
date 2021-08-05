import React from 'react';

function ColorsContainer({ list }) {
  console.log(list);
  return (
    <section className='colors-container'>
      {list.map((color) => {
        const bgColor = `#${color}`;
        return (
          <div className='color-item' style={{ backgroundColor: bgColor }}>
            {color}
          </div>
        );
      })}
    </section>
  );
}

export default ColorsContainer;
