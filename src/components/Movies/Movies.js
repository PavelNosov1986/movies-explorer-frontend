import React, { useState, useEffect } from 'react';
import './Movies.css'
import MoviesCard from '../widgets/MoviesCard/MoviesCard';
import Footer from '../Footer/Footer';
import SearchForm from '../widgets/SearchForm/SearchForm';
import HeaderSelect from '../widgets/HeaderSelect/HeaderSelect';
import { getMoviesApi } from '../../utils/MoviesApi';
import { getSavedMoviesApi } from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';


let initStorageData = {
    searchMovie: '',
    isToggleMovie: false,
    searchSaved: '',
    isToggleSaved: false
}

const Movies = () => {
    const [movies, setMovies] = useState();
    const [savedMovies, setSavedMovies] = useState();
    const [isLoader, setIsLoader] = useState(false);
    const [error, setError] = useState(false);

    const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
    const [cardsCount, setCardsCount] = useState(3);
    const [moreCardsCount, setMoreCardsCount] = useState(0);

    let searchMovie = ''
    let isToggleMovie = false;
    let storageData = localStorage.getItem('storageData')
    if (storageData) {
        let data = JSON.parse(storageData);
        searchMovie = data.searchMovie
        isToggleMovie = data.isToggleMovie
    }

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
    }, [windowInnerWidth]);

    useEffect(() => {
        getSavedMoviesApi().then((resp) => {
            setSavedMovies(resp)
        })
        if (searchMovie)
            loadFilmes(searchMovie, isToggleMovie);
    }, []);


    function handleResize() {
        setWindowInnerWidth(window.innerWidth);
    }

    function handleLoadMoreCards() {
        checkCardsCount();
        setCardsCount(cardsCount + moreCardsCount);
    }

    const loadFilmes = (value, toggle) => {
        setIsLoader(true);
        setError(false);

        getMoviesApi(value)
            .then((response) => {

                let cardsMovies = response.filter(x => {
                    return x.nameRU.toLowerCase().includes(value.toLowerCase())
                        || x.nameEN.toLowerCase().includes(value.toLowerCase())
                })
                if (toggle)
                    cardsMovies = cardsMovies.filter(x => {
                        return x.duration < 60
                    })
                setMovies(cardsMovies);
                //localStorage.setItem('movies', JSON.stringify(filter))
            })
            .catch((err) => {
                setError(true);
            })
            .finally(() => {
                setIsLoader(false);
            });
    }

    const handleSearch = (value) => {

        let storageData = localStorage.getItem('storageData')

        if (!storageData) {
            let newData = { ...initStorageData }
            localStorage.setItem('storageData', JSON.stringify({ ...newData, searchMovie: value }))
        }
        else {
            let newData = { ...JSON.parse(storageData), searchMovie: value }
            localStorage.setItem('storageData', JSON.stringify(newData))
        }

        loadFilmes(value, isToggleMovie)

    }

    const messageNotFound = () => {
        return <p>Ничего не найдено...</p>
    }

    const handleMovieLike = () => {
        getSavedMoviesApi().then((resp) => {
            setSavedMovies(resp)
        })
    }

    const handleToggle = (value) => {
        let storageData = localStorage.getItem('storageData')

        if (!storageData) {
            let newData = { ...initStorageData }
            localStorage.setItem('storageData', JSON.stringify({ ...newData, isToggleMovie: value }))
        }
        else {
            let newData = { ...JSON.parse(storageData), isToggleMovie: value }
            localStorage.setItem('storageData', JSON.stringify(newData))
        }

        loadFilmes(searchMovie, value)
    }

    return (
        <main className='movies'>
            <HeaderSelect />
            {savedMovies && <>
                <SearchForm
                    isSearchBorder={false}
                    onSearch={handleSearch}
                    onToggle={handleToggle}
                    searchValue={searchMovie}
                    isShort={isToggleMovie}
                />

                <ul className='movies__cards'>
                    {isLoader && <Preloader />}

                    {(!error && !isLoader)
                        && (movies && movies.length > 0 ? movies.slice(0, cardsCount).map((movie) =>
                            <li key={movie.id}>
                                <MoviesCard
                                    cardMovie={movie}
                                    isNewFilm={true}
                                    savedMovies={savedMovies}
                                    onMovieLike={handleMovieLike}
                                />
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
            </>}


            <Footer className='footer_movies' />
        </main>
    );
};

export default Movies;