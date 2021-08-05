import React from 'react';
import ColorInput from './ColorInput';
import ColorsContainer from './ColorsContainer';

function Main({ ...props }) {
  const { color, setColor, handleSubmit, list } = props;
  console.log(props);
  return (
    <main>
      <ColorInput
        color={color}
        handleSubmit={handleSubmit}
        setColor={setColor}
      />
      <ColorsContainer list={list} />
      <p>{color}</p>
    </main>
  );
}

export default Main;
