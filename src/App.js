import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [color, setColor] = useState('f15025');
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    generateColors(color);
  };
  const generateColors = (color) => {
    const ColorScheme = require('color-scheme');
    const scheme = new ColorScheme();
    scheme.from_hex(color).scheme('mono').variation('default');
    let colors = scheme.colors();
    setList([color, ...colors]);
    console.log('colores: ' + colors);
  };
  return (
    <>
      <Header />
      <Main
        color={color}
        setColor={setColor}
        handleSubmit={handleSubmit}
        list={list}
      />
    </>
  );
}

export default App;
