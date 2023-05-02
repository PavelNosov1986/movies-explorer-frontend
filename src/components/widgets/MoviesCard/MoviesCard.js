import React from 'react';
import './MoviesCard.css';
import ButtonSave from '../ButtonSave/ButtonSave';
import ButtonDelete from '../ButtonDelete/ButtonDelete';


const MoviesCard = ({ isNewFilm }) => {
    return (
        <div className='card-movie'>
            <div className='card-movie__img-container'>
                <img className="card-movie__img" src='https://mobimg.b-cdn.net/v3/fetch/1b/1bbe0c30fd8b9cd89656e6dc6d5e59a7.jpeg' alt="Картинка с фильмом" />
            </div>
            <div className='card-movie__title-container'>
                <h2 className='card-movie__title-movie'>33 слова о дизайне</h2>
                {isNewFilm ? <ButtonSave /> : <ButtonDelete />}
            </div>
            <p className='card-movie__time'> 1ч42м</p>
        </div>
    );
};

export default MoviesCard;