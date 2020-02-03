import * as api from './services/api';

import saveLocalStorage from './utils';

import {
  renderMyDogsList,
  selectBreeds,
  selectFonts,
  selectColors,
} from './components';

class Challenge {
  constructor() {
    this.listMyDogs = JSON.parse(localStorage.getItem('mydogs')) || [];

    this.$form = document.querySelector('.main-form');
    this.$input = document.querySelector('#nameDog');
    this.$breeds = document.querySelector('#breeds');
    this.$colors = document.querySelector('#colorFont');
    this.$fonts = document.querySelector('#font');
    this.$image = document.querySelector('.image');
    this.$caption = document.querySelector('.captiontext');
    this.$ulMyDogs = document.querySelector('.my-dogs > .list');
  }

  async init() {
    this.addListeners();

    try {
      const response = await api.getBreeds();

      this.$breeds.innerHTML = selectBreeds(Object.keys(response));
    } catch (error) {
      alert(error);
    }

    this.$fonts.innerHTML = selectFonts();
    this.$colors.innerHTML = selectColors();

    this.$ulMyDogs.innerHTML = renderMyDogsList(this.listMyDogs);
  }

  async save() {
    this.$ulMyDogs.innerHTML = '';

    const dog = {
      name: this.$input.value,
      img: this.$image.src,
      styles: {
        font: this.$fonts.value,
        color: this.$colors.value,
      },
      date: new Date(),
    };

    this.listMyDogs = [dog, ...this.listMyDogs];

    const response = await saveLocalStorage('mydogs', this.listMyDogs);

    if (response) alert('Cachorro gravado com Sucesso!');

    this.clearForm();
    this.updateListMyDogs();
  }

  clearForm() {
    this.$input.value = '';
    this.$breeds.value = '';
    this.$colors.value = '';
    this.$fonts.value = '';
    this.$image.src = '';
    this.$caption.innerText = '';
  }

  updateListMyDogs() {
    this.$ulMyDogs.innerHTML = renderMyDogsList(this.listMyDogs);
  }

  handleChangeNameDog(e) {
    this.$caption.innerText = e.target.value;
  }

  handleChangeColor(e) {
    this.$caption.setAttribute('class', '');
    this.$caption.classList.add(e.target.value);
  }

  async handleChangeImageBreed(e) {
    const breed = e.target.value;

    const dogImage = await api.getImageBreed(breed);

    this.$image.src = dogImage.message;
  }

  handleChangeFont(e) {
    this.$caption.style.fontFamily = e.target.value;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.save();
  }

  addListeners() {
    this.$form.addEventListener('submit', e => this.handleSubmit(e));

    this.$input.addEventListener('keyup', e => this.handleChangeNameDog(e));

    this.$breeds.addEventListener('change', e =>
      this.handleChangeImageBreed(e)
    );

    this.$colors.addEventListener('change', e => this.handleChangeColor(e));

    this.$fonts.addEventListener('change', e => this.handleChangeFont(e));
  }
}

export default Challenge;
