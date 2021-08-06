import React from 'react';
import ColorInput from './ColorInput';
import ColorsContainer from './ColorsContainer';
import SingleColor from './SingleColor';

function Main({ ...props }) {
  const { color, setColor, handleSubmit, list } = props;

  return (
    <main>
      <ColorInput
        color={color}
        handleSubmit={handleSubmit}
        setColor={setColor}
      />

      <ColorsContainer list={list} />
    </main>
  );
}

export default Main;
