import React from 'react';
import './SavedMovies.css'
import MoviesCard from '../widgets/MoviesCard/MoviesCard';
import Footer from '../Footer/Footer';
import SearchForm from '../widgets/SearchForm/SearchForm';
import HeaderSelect from '../widgets/HeaderSelect/HeaderSelect';

const SavedMovies = ({ isMoviesPage }) => {

    const MoviesClassName = (`${isMoviesPage ? 'movies' : 'movies movies_saved'}`);

    return (
        <main className={MoviesClassName}>
            <HeaderSelect />
            <SearchForm isSearchBorder={false} />
            <ul className='movies__cards'>
               <li><MoviesCard isNewFilm={false} /></li> 
               <li><MoviesCard isNewFilm={false} /></li>
               <li><MoviesCard isNewFilm={false} /></li>
               <li><MoviesCard isNewFilm={false} /></li>
            </ul>
            <Footer className='footer_movies' />
        </main>
    );
};

export default SavedMovies;