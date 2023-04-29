import React from 'react';
import './HeaderProfile.css'
import Logo from '../../Logo/Logo';
import { Link } from 'react-router-dom';
import account from '../../../images/account.svg';


const HeaderProfile = () => {
    return (
        <main className='header-profile'>
            <Logo margin />
            <div className='header-profile__container-movies'>
                <Link to ='/movies'className='header-profile__title'>Фильмы</Link>
                <Link to ='/saved-movies' className='header-profile__title'>Сохранённые фильмы</Link>
            </div>
            <Link to='/profile' className='header-profile__account'><img src={account} alt='Аккаунт' /></Link>
        </main>
    );
};

export default HeaderProfile;