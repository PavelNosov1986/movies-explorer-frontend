const BASE_MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';
const BASE_IMAGE_URL = 'https://api.nomoreparties.co';

const convertTime = (duration) => {
  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;
  return `${hours === 0 ? '' : hours + 'ч '}` + `${minutes}м`;
};

const isName = /^[а-яА-ЯёЁa-zA-Z0-9 -]+$/i;
const isEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export {
  BASE_MOVIES_URL,
  BASE_IMAGE_URL,
  convertTime,
  isEmail,
  isName
};