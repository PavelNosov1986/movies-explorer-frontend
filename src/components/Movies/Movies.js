import React, { useState, useEffect } from 'react';
import './Movies.css'
import MoviesCard from '../widgets/MoviesCard/MoviesCard';
import Footer from '../Footer/Footer';
import SearchForm from '../widgets/SearchForm/SearchForm';
import HeaderSelect from '../widgets/HeaderSelect/HeaderSelect';
import { getMoviesApi } from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';

const Movies = () => {
    const [movies, setMovies] = useState();
    const [isLoader, setIsLoader] = useState(false);
    const [error, setError] = useState(false);
  
    const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
    const [cardsCount, setCardsCount] = useState(3);
    const [moreCardsCount, setMoreCardsCount] = useState(0);

    const checkCardsCount = () => {
        if (windowInnerWidth >= 1280) {
            setCardsCount(12);
            setMoreCardsCount(3);
        } else if (windowInnerWidth >= 768) {
            setCardsCount(8);
            setMoreCardsCount(2);
        } else if (windowInnerWidth <= 750) {
            setCardsCount(5);
            setMoreCardsCount(2);
        }
    };

    useEffect(() => {
        checkCardsCount();
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [windowInnerWidth]);

    useEffect(() => {
        if (localStorage.getItem('movies')) {
            const moviesResults = JSON.parse(
              localStorage.getItem('movies')
            )
            setMovies(moviesResults)            
            ;}
    }, []);


    function handleResize() {
        setWindowInnerWidth(window.innerWidth);
    }

    function handleLoadMoreCards() {
        checkCardsCount();
        setCardsCount(cardsCount + moreCardsCount);
    }

    const handleSearch = (value) => {
        setIsLoader(true);
        setError(false);

        getMoviesApi(value)
            .then((cardsMovie) => {
                let filter = cardsMovie.filter(x => {
                    return x.nameRU.toLowerCase().includes(value.toLowerCase()) || x.nameEN.toLowerCase().includes(value.toLowerCase())
                })
                setMovies(filter);
                localStorage.setItem('movies', JSON.stringify(filter))
            })
            .catch((err) => {
                setError(true);
            })
            .finally(() => {
                setIsLoader(false);
            });
        ;
    }

    const messageNotFound = () => {
        return <p>Ничего не найдено...</p>
    }

    return (
        <main className='movies'>
            <HeaderSelect />
            <SearchForm isSearchBorder={false} onSearch={handleSearch} isSaved={true} />

            <ul className='movies__cards'>
                {isLoader && <Preloader />}

                {(!error && !isLoader)
                    && (movies && movies.length > 0 ? movies.slice(0, cardsCount).map((movie) =>
                        <li key={movie.id}>
                            <MoviesCard
                                cardMovie={movie}
                                isNewFilm={true} />
                        </li>) : movies && messageNotFound())}

                {error && (
                    <p>
                        Во время запроса произошла ошибка. Возможно, проблема с соединением
                        или сервер недоступен. Подождите немного и попробуйте ещё раз.
                    </p>
                )}
            </ul>

            {movies && movies.length > cardsCount &&
                (<button className='movies__btn-next'
                    onClick={handleLoadMoreCards}
                    type='button' >
                    Ещё
                </button>)}

            <Footer className='footer_movies' />
        </main>
    );
};

export default Movies;