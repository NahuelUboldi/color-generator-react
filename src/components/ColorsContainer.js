import React from 'react';
import ColorsList from './ColorsList';

function ColorsContainer({ list }) {
  return (
    <section className='colors-container'>
      {list.map((item, index) => {
        // console.log(item, index);
        return <ColorsList item={item} key={index} />;
      })}
    </section>
  );
}

export default ColorsContainer;
