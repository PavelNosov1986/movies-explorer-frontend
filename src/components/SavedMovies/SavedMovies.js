import React, { useState, useEffect } from 'react';
import './SavedMovies.css'
import Footer from '../Footer/Footer';
import SearchForm from '../widgets/SearchForm/SearchForm';
import HeaderSelect from '../widgets/HeaderSelect/HeaderSelect';
import { getSavedMoviesApi } from '../../utils/MainApi';
import MoviesCard from '../widgets/MoviesCard/MoviesCard';

let initStorageData = {
    searchMovie: '',
    isToggleMovie: false,
    searchSaved: '',
    isToggleSaved: false
}


const SavedMovies = ({ isMoviesPage }) => {
    const [savedMovies, setSavedMovies] = useState();

    let searchMovie = ''
    let isToggleMovie = false;
    let storageData = localStorage.getItem('storageData')
    if (storageData) {
        let data = JSON.parse(storageData);
        searchMovie = data.searchSaved
        isToggleMovie = data.isToggleSaved
    }

    const loadFilmes = (value, toggle) => {

        getSavedMoviesApi().then((resp) => {
            let filmes = resp
            if (value) {
                filmes = filmes.filter(x => {
                    return x.nameRU.toLowerCase().includes(value.toLowerCase())
                        || x.nameEN.toLowerCase().includes(value.toLowerCase())
                })
            }
            if (toggle)
                filmes = filmes.filter(x => {
                    return x.duration < 60
                })

            setSavedMovies(filmes)
        })
    }

    useEffect(() => {
        loadFilmes(searchMovie, isToggleMovie)
    }, []);

    const MoviesClassName = (`${isMoviesPage ? 'movies' : 'movies movies_saved'}`);

    const handleSearch = (value) => {
        let storageData = localStorage.getItem('storageData')

        if (!storageData) {
            let newData = { ...initStorageData }
            localStorage.setItem('storageData', JSON.stringify({ ...newData, searchSaved: value }))
        }
        else {
            let newData = { ...JSON.parse(storageData), searchSaved: value }
            localStorage.setItem('storageData', JSON.stringify(newData))
        }

        loadFilmes(value, isToggleMovie)

    }

    const handleToggle = (value) => {
        let storageData = localStorage.getItem('storageData')

        if (!storageData) {
            let newData = { ...initStorageData }
            localStorage.setItem('storageData', JSON.stringify({ ...newData, isToggleSaved: value }))
        }
        else {
            let newData = { ...JSON.parse(storageData), isToggleSaved: value }
            localStorage.setItem('storageData', JSON.stringify(newData))
        }
        loadFilmes(searchMovie, value)
    }

    const handleMovieLike = () => {
        loadFilmes(searchMovie, isToggleMovie)
    }

    return (
        <main className={MoviesClassName}>
            <HeaderSelect />

            <SearchForm
                isSearchBorder={false}
                onSearch={handleSearch}
                onToggle={handleToggle}
                searchValue={searchMovie}
                isShort={isToggleMovie}
            />

            <ul className='movies__cards'>
                {savedMovies && savedMovies.map((movie) =>
                    <li key={movie.id}>
                        <MoviesCard
                            cardMovie={movie}
                            isNewFilm={false}
                            savedMovies={savedMovies}
                            onMovieLike={handleMovieLike}
                        />
                    </li>)}
            </ul>
            <Footer className='footer_movies' />
        </main>
    );
};

export default SavedMovies;