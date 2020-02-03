export const renderMyDogsList = listDogs => {
  const markup = listDogs.map(dog => {
    return `
      <li class="item-list">
        <div class="card-dog">
         <figure class="figure">
            <img src="${dog.img}" class="image" />
            <figcaption class="caption">
                <span style="font-family:${dog.styles.font}"class="${dog.styles.color}">
                  ${dog.name}
                </span>
            </figcaption>
         </figure>
        </div>
      </li>   
    `;
  });

  return markup.join('');
};

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
