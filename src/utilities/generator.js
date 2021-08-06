const colorGenerator = (color, colorScheme, variation) => {
  const ColorScheme = require('color-scheme');
  const scheme = new ColorScheme();
  scheme.from_hex(color).scheme(colorScheme).variation(variation);
  const colors = scheme.colors();

  const name = `${colorScheme}-${variation}`;
  console.log(name);
  const colorsObject = {
    name: name,
    title: colorScheme === 'mono' ? 'Monochromatic' : colorScheme,
    variation: variation,
    colorScheme: `${name}`,
    colors: [...colors],
  };

  return colorsObject;
};

export default colorGenerator;
