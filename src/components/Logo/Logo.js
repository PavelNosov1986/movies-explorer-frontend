import React from 'react';
import logo from '../../images/logo.svg';
import './Logo.css'

const Logo = () => {
    return (
       <a href="/#aboutProject"><img src={logo} className='header__logo' alt='Логотип' /></a> 
    );
};

export default Logo;