import React from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';
import account from '../../../images/account.svg';
import logo from '../../../images/logo.svg';

const BurgerMenu = () => {
    return (
        <>
            <a href="/#aboutProject"><img src={logo} className='logo__burger' alt='Логотип' /></a>
            <div className="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label className="menu__btn" for="menu__toggle">
                    <span></span>
                </label>
                <ul class="menu__box">
                    <li><Link to='/movies' className='menu__item'>Фильмы</Link></li>
                    <li><Link to='/saved-movies' className='menu__item'>Сохранённые фильмы</Link></li>
                    <li> <Link to='/profile' className='header-profile__account header-profile__account_burger'><img src={account} alt='Аккаунт' /></Link></li>
                </ul>
            </div>
        </>
    );
};


export default BurgerMenu;