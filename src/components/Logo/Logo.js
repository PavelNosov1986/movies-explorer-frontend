import React from 'react';
import logo from '../../images/logo.svg';
import './Logo.css'
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
       <Link to="/"><img src={logo} className='header__logo' alt='Логотип' /></Link> 
    );
};

export default Logo;