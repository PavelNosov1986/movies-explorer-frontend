import React from 'react';
import './MoviesCard.css';
import ButtonSave from '../ButtonSave/ButtonSave';
import ButtonDelete from '../ButtonDelete/ButtonDelete';
import { BASE_IMAGE_URL } from '../../../utils/constants';
import { convertTime } from '../../../utils/constants';

const MoviesCard = ({ isNewFilm, cardMovie }) => {

    return (
        <div className='card-movie'>
            <a href={cardMovie.trailerLink}
                rel='noreferrer'
                target='_blank'
                className='card-movie__img-container'>
                <img className="card-movie__img" src={`${BASE_IMAGE_URL}${cardMovie.image.url}`}
                    alt="Картинка с фильмом" />
            </a>
            <div className='card-movie__title-container'>
                <h2 className='card-movie__title-movie'>{cardMovie.nameRU}</h2>
                {isNewFilm ? <ButtonSave /> : <ButtonDelete />}
            </div>
            <p className='card-movie__time'>{convertTime(cardMovie.duration)}</p>
        </div>
    );
};

export default MoviesCard;