import React,{useState} from 'react';
import './SavedMovies.css'
import Footer from '../Footer/Footer';
import SearchForm from '../widgets/SearchForm/SearchForm';
import HeaderSelect from '../widgets/HeaderSelect/HeaderSelect';

const SavedMovies = ({ isMoviesPage }) => {
    const [isShort, setIsShort] = useState(false);

    const MoviesClassName = (`${isMoviesPage ? 'movies' : 'movies movies_saved'}`);
     const handleSearchSave =()=>{
        return ''
     }
    return (
        <main className={MoviesClassName}>
            <HeaderSelect />
            <SearchForm isSearchBorder={false} onSearch={handleSearchSave} isSaved={false}  isShort={isShort}
        setIsShort={setIsShort}/>
            <ul className='movies__cards'>
               {/* <li><MoviesCard isNewFilm={false} /></li> 
               <li><MoviesCard isNewFilm={false} /></li>
               <li><MoviesCard isNewFilm={false} /></li>
               <li><MoviesCard isNewFilm={false} /></li> */}
            </ul>
            <Footer className='footer_movies' />
        </main>
    );
};

export default SavedMovies;