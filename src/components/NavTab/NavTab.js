import React from 'react';
import './NavTab.css';

const NavTab = () => {
    return (
        <nav className='nav-tab'>
            <ul className='nav-tab__ul'>
                <li className='nav-tab__li'><a className='nav-tab__a' href="/#aboutProject ">О проекте</a></li>
                <li className='nav-tab__li'><a className='nav-tab__a' href="/#techs">Технологии</a></li>
                <li className='nav-tab__li'><a className='nav-tab__a' href="/#aboutMe">Студент</a></li>
            </ul>
        </nav>
    );
};

export default NavTab;