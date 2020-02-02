import * as api from './services/api';

import saveLocalStorage from './utils';

import { selectBreeds, selectFonts, selectColors } from './components';

class Challenge {
  constructor() {
    this.listMyDogs = JSON.parse(localStorage.getItem('mydogs')) || [];

    this.formEl = document.querySelector('.form');
    this.inputEl = document.querySelector('#nameDog');
    this.selectBreedsEl = document.querySelector('#breeds');
    this.selectColorFontEl = document.querySelector('#colorFont');
    this.selectFontEl = document.querySelector('#font');
    this.imgElement = document.querySelector('.card__image');
    this.captionElement = document.querySelector('.card__caption span');
  }

  async init() {
    this.addListeners();

    const response = await api.getBreeds();
    this.listBreeds = response;

    this.selectBreedsEl.innerHTML = selectBreeds(Object.keys(this.listBreeds));
    this.selectFontEl.innerHTML = selectFonts();
    this.selectColorFontEl.innerHTML = selectColors();
    console.log(this.selectBreedsEl.value);
  }

  async save() {
    const dog = {
      name: this.inputEl.value,
      img: this.imgElement.src,
      styles: {
        font: this.selectFontEl.value,
        color: this.selectColorFontEl.value,
      },
      date: new Date(),
    };

    const newListMyDogs = [dog, ...this.listMyDogs];

    const response = await saveLocalStorage('mydogs', newListMyDogs);

    if (response) {
      alert('Salvo com Sucesso');
    }
  }

  handleChangeNameDog(name) {
    this.captionElement.innerText = name;
  }

  handleChangeColor(color) {
    this.captionElement.setAttribute('class', '');
    this.captionElement.classList.add(color);
  }

  handleChangeImageBreed(breed) {
    api.getImageBreed(breed).then(data => {
      this.imgElement.src = data.message;
    });
  }

  handleChangeFont(font) {
    this.captionElement.style.fontFamily = font;
  }

  addListeners() {
    this.formEl.addEventListener('submit', e => {
      e.preventDefault();
      this.save();
    });

    this.inputEl.addEventListener('keyup', e => {
      this.nameDog = e.target.value;
      this.handleChangeNameDog(this.nameDog);
    });

    this.selectBreedsEl.addEventListener('change', e => {
      this.handleChangeImageBreed(e.target.value);
    });

    this.selectColorFontEl.addEventListener('change', e => {
      this.handleChangeColor(e.target.value);
    });

    this.selectFontEl.addEventListener('change', e => {
      this.handleChangeFont(e.target.value);
      console.log(e.target.value);
    });
  }
}

export default Challenge;
