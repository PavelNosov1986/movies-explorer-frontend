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
            <SearchForm isSearchBorder={false} />
            <ul className='movies__cards'>
              <li> <MoviesCard isNewFilm={true} /></li> 
              <li> <MoviesCard isNewFilm={true} /></li> 
              <li> <MoviesCard isNewFilm={true} /></li> 
              <li> <MoviesCard isNewFilm={true} /></li> 
              <li> <MoviesCard isNewFilm={true} /></li> 
              <li> <MoviesCard isNewFilm={true} /></li> 
              <li> <MoviesCard isNewFilm={true} /></li> 
              <li> <MoviesCard isNewFilm={true} /></li> 
              <li> <MoviesCard isNewFilm={true} /></li> 
              <li> <MoviesCard isNewFilm={true} /></li> 
              <li> <MoviesCard isNewFilm={true} /></li> 
              <li> <MoviesCard isNewFilm={true} /></li> 
              <li> <MoviesCard isNewFilm={true} /></li> 
              <li> <MoviesCard isNewFilm={true} /></li> 
              <li> <MoviesCard isNewFilm={true} /></li> 
              <li> <MoviesCard isNewFilm={true} /></li>                
            </ul>
            <button className='movies__btn-next'>Ещё</button>
            <Footer className='footer_movies' />
        </main>
    );
};

export default Movies;