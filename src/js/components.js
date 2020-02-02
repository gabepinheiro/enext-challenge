export const selectBreeds = listBreed => {
  const markup = listBreed.map(item => {
    const option = `<option value="${item}">${item}</option>`;
    return option;
  });

  // elSelect.innerHTML = `<optgroup>${markup}</optgroup>`;
  return `<option value="">Selecione</option>${markup}`;
};

export const selectFonts = () => {
  const fonts = [
    "'Nunito Sans', sans-serif",
    "'Bangers', sans-serif",
    "'Permanent Marker', sans-serif",
    "'Oleo Script', sans-serif",
    "'Lobster', sans-serif",
  ];

  const markup = fonts.map(
    (font, index) => `<option value="${font}">Font ${index + 1}</option>`
  );

  // elSelect.innerHTML = `<optgroup>${markup}</optgroup>`;
  return `<option value="">Selecione</option>${markup}`;
};

export const selectColors = () => {
  const colorsClass = [
    {
      class: 'colorFirst',
      bgc: 'background: var(--color-first);',
    },
    {
      class: 'colorSecond',
      bgc: 'background: var(--color-second);',
    },
    {
      class: 'colorThird',
      bgc: 'background: var(--color-third);',
    },
    {
      class: 'colorFourth',
      bgc: 'background: var(--color-fourth);',
    },
    {
      class: 'colorFifth',
      bgc: 'background: var(--color-fifth);',
    },
  ];

  const markup = colorsClass.map(
    (item, index) =>
      `<option style="${item.bgc}" value="${item.class}"> 
          Cor ${index + 1}
      </option>`
  );

  // elSelect.innerHTML = `<optgroup>${markup}</optgroup>`;
  return `<option value="">Selecione</option>${markup}`;
};
