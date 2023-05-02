import React from 'react';
import './Header.css'
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className="header">
            <Logo />
            <nav className='header__container-sign-in-up'>
                <Link to='/signup' ><button className='header__button-signup'>Регистрация</button></Link>
                <Link to='/signin'><button className='header__button-signin'>Войти</button></Link>
            </nav>
        </header>
    );
};

export default Header;
