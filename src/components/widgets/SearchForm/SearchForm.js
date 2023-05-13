import React, { useState, useEffect } from 'react';
import './SearchForm.css'
import Toggle from '../Toggle/Toggle';
import search from '../../../images/search.svg';
// import iconSearch from '../../../images/icon-search.svg'
import wand from '../../../images/wand.svg'


const SearchForm = ({ isSearchBorder, onSearch, isSaved }) => {
    const [valueSearch, setValueSeurch] = useState('');
    const [isShortFilm, setIsShortFilm] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (isSaved) {
            const searchResults = JSON.parse(
                localStorage.getItem('search')
            )

            const toggleResults = localStorage.getItem('toglle')
            let value = toggleResults === 'true' ? true : false
            setValueSeurch(searchResults)
            setIsShortFilm(value)
           
        }
        else {
            const searchResults = JSON.parse(
                localStorage.getItem('searchSave')
            )
            const toggleResults = localStorage.getItem('toggleSave')
            let value = toggleResults === 'true' ? true : false

            setValueSeurch(searchResults)
            setIsShortFilm(value)
        }

    }, []);


    const handleClick = (e) => {
        e.preventDefault()
        if (valueSearch) {
            onSearch(valueSearch);
            if (isSaved)
                localStorage.setItem('search', JSON.stringify(valueSearch))
            else
                localStorage.setItem('searchSave', JSON.stringify(valueSearch))
            setError(false);
        }
        else {
            setError(true)
        }
    }

    const handleOnChange = () => {
                let value = isShortFilm === ('true' ? true : false)
        if (isSaved)
            localStorage.setItem('toglle', !value)
        else
            localStorage.setItem('toggleSave', !value)

        setIsShortFilm(!isShortFilm)
    }

    const SearchFormClassName = (`${isSearchBorder ? 'search' : 'search search__border'}`);

    return (
        <main className={SearchFormClassName}>
            <div className='search-string'>
                <form className="search__form" noValidate >
                    <img className="search__form-img-wand" src={wand} alt="Граница" />
                    <input className="search__form-txt"
                        value={valueSearch}
                        onChange={(e) => setValueSeurch(e.target.value)}
                        type="text"
                        placeholder={error ? "Нужно ввести ключевое слово" : "Фильм"}
                        required
                    />

                    <button className="search__form-btn" onClick={handleClick} >
                        <img className="search__form-img" src={search} alt="Лупа" />
                    </button>
                </form>
                <div className='toggle-container'>
                    <Toggle onChange={handleOnChange} value={isShortFilm} />
                    <p className='search__title-short-films'>Короткометражки</p>
                </div>
            </div>
        </main>
    );
};

export default SearchForm;