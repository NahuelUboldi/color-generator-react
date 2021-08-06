import './App.css';
import { useState } from 'react';
import colorGenerator from './utilities/generator';
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
    const monoDefault = colorGenerator(color, 'mono', 'default');
    const monoPastel = colorGenerator(color, 'mono', 'pastel');
    const monoSoft = colorGenerator(color, 'mono', 'soft');
    const monoLight = colorGenerator(color, 'mono', 'light');
    const monoPale = colorGenerator(color, 'mono', 'pale');
    const contrastDefault = colorGenerator(color, 'contrast', 'default');
    const contrastPastel = colorGenerator(color, 'contrast', 'pastel');
    const contrastSoft = colorGenerator(color, 'contrast', 'soft');
    const contrastLight = colorGenerator(color, 'contrast', 'light');
    const contrastPale = colorGenerator(color, 'contrast', 'pale');
    const triadeDefault = colorGenerator(color, 'triade', 'default');
    const triadePastel = colorGenerator(color, 'triade', 'pastel');
    const triadeSoft = colorGenerator(color, 'triade', 'soft');
    const triadeLight = colorGenerator(color, 'triade', 'light');
    const triadePale = colorGenerator(color, 'triade', 'pale');
    const analogicDefault = colorGenerator(color, 'analogic', 'default');
    const analogicPastel = colorGenerator(color, 'analogic', 'pastel');
    const analogicSoft = colorGenerator(color, 'analogic', 'soft');
    const analogicLight = colorGenerator(color, 'analogic', 'light');
    const analogicPale = colorGenerator(color, 'analogic', 'pale');

    setList([
      monoDefault,
      monoPastel,
      monoSoft,
      monoLight,
      monoPale,

      contrastDefault,
      contrastPastel,
      contrastSoft,
      contrastLight,
      contrastPale,

      triadeDefault,
      triadePastel,
      triadeSoft,
      triadeLight,
      triadePale,

      analogicDefault,
      analogicPastel,
      analogicSoft,
      analogicLight,
      analogicPale,
    ]);
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
