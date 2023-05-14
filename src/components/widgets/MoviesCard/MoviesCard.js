import React from 'react';
import './MoviesCard.css';
import ButtonSave from '../ButtonSave/ButtonSave';
import ButtonDelete from '../ButtonDelete/ButtonDelete';
import { BASE_IMAGE_URL } from '../../../utils/constants';
import { convertTime } from '../../../utils/constants';
import { saveMovieApi } from '../../../utils/MainApi';
import { deleteSavedMoviesApi } from '../../../utils/MainApi';


const MoviesCard = ({ isNewFilm, cardMovie, savedMovies, onMovieLike }) => {

    let savedMovie = savedMovies?.find(x => { return x.movieId === cardMovie.id })

    const handleMovieLike = () => {
        
        if (isNewFilm && !savedMovie) {
            let model = {
                country: cardMovie.country,
                director: cardMovie.director,
                duration: cardMovie.duration,
                year: cardMovie.year,
                description: cardMovie.description,
                image: `${BASE_IMAGE_URL}${cardMovie.image.url}`,
                trailerLink: cardMovie.trailerLink,
                thumbnail: `${BASE_IMAGE_URL}${cardMovie.image.url}`,
                movieId: cardMovie.id,
                nameRU: cardMovie.nameRU,
                nameEN: cardMovie.nameEN
            }

            saveMovieApi(model)
                .then(() => {
                    onMovieLike()
                })

        }

        else {
           let id = isNewFilm ? savedMovie._id : cardMovie._id          
            deleteSavedMoviesApi(id)
                .then(() => {
                    onMovieLike()
                })


        }

        //else console.log("кнопка удаления в сохранённых фильмах");
    }



    return (
        <div className='card-movie'>
            <a href={cardMovie.trailerLink}
                rel='noreferrer'
                target='_blank'
                className='card-movie__img-container'>
                <img className="card-movie__img" src={isNewFilm ? `${BASE_IMAGE_URL}${cardMovie.image.url}`: cardMovie.image}
                    alt="Картинка с фильмом" />
            </a>
            <div className='card-movie__title-container'>
                <h2 className='card-movie__title-movie'>{cardMovie.nameRU}</h2>
                {isNewFilm ? <ButtonSave handleMovieLike={handleMovieLike} isSaved={savedMovie !== undefined} />
                    : <ButtonDelete onDelete={handleMovieLike}/>}
            </div>
            <p className='card-movie__time'>{convertTime(cardMovie.duration)}</p>
        </div>
    );
};

export default MoviesCard;