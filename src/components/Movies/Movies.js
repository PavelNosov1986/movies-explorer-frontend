import React from 'react';
import './Movies.css'
import MoviesCard from '../widgets/MoviesCard/MoviesCard';
import Footer from '../Footer/Footer';
import SearchForm from '../widgets/SearchForm/SearchForm';
import HeaderSelect from '../widgets/HeaderSelect/HeaderSelect';

const Movies = () => {
    return (
        <main className='movies'>
            <HeaderSelect />
            <SearchForm isSearchBorder={true} />
            <section className='movies__cards'>
                <MoviesCard isNewFilm={true} />
                <MoviesCard isNewFilm={true} />
                <MoviesCard isNewFilm={true} />
                <MoviesCard isNewFilm={true} />
                <MoviesCard isNewFilm={true} />
                <MoviesCard isNewFilm={true} />
                <MoviesCard isNewFilm={true} />
                <MoviesCard isNewFilm={true} />
                <MoviesCard isNewFilm={true} />
                <MoviesCard isNewFilm={true} />
                <MoviesCard isNewFilm={true} />
                <MoviesCard isNewFilm={true} />
                <MoviesCard isNewFilm={true} />
                <MoviesCard isNewFilm={true} />
                <MoviesCard isNewFilm={true} />
                <MoviesCard isNewFilm={true} />
            </section>
            <button className='movies__btn-next'>Ещё</button>
            <Footer className='footer_movies' />
        </main>
    );
};

export default Movies;