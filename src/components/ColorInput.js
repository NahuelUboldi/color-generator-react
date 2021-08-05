import React from 'react';

function ColorInput({ color, handleSubmit, setColor }) {
  return (
    <div className='color-input'>
      <form action='' onSubmit={handleSubmit}>
        <input
          type='text'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder={color}
        />
        <button className='btn' type='submit'>
          generate
        </button>
      </form>
    </div>
  );
}

export default ColorInput;
