const BASE_MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';
const BASE_IMAGE_URL = 'https://api.nomoreparties.co';

const convertTime = (duration) => {
    const hours = Math.trunc(duration / 60);
    const minutes = duration % 60;
    return `${hours === 0 ? '' : hours + 'ч '}` + `${minutes}м`;
  };

 
export {
    BASE_MOVIES_URL,
    BASE_IMAGE_URL,
    convertTime,    
};