import React from 'react';
import './SearchForm.css'
import Toggle from '../Toggle/Toggle';
import search from '../../../images/search.svg';
import iconSearch from '../../../images/icon-search.svg'
import wand from '../../../images/wand.svg'

const SearchForm = ({isSearchBorder}) => {
    const SearchFormClassName = (`${isSearchBorder ? 'search' : 'search search__border'}`);

    return (    
        <main className={SearchFormClassName}>
                <div className='search-string'>
                    <form className="search__form" >
                        <img className="search__form-img-wand" src={wand} alt="Граница" />
                        <input className="search__form-txt" type="text" placeholder='Фильм' />
                        <button className="search__form-btn" > <img className="search__form-img" src={search} alt="Лупа" /></button>
                    </form>
                    <div className='toggle-container'>
                        <Toggle />
                        <p className='search__title-short-films'>Короткометражки</p>
                    </div>
                </div>
            </main>
    );
};

export default SearchForm;