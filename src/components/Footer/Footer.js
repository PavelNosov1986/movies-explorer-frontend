import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className='footer__container'>
                <p className='footer__copyright'>{`© ${new Date().getFullYear()}`}</p>
                <nav className='footer__nav'>
                    <a
                        href='https://practicum.yandex.ru/'
                        rel='noreferrer'
                        target='_blank'
                        className='footer__nav-link'
                    >
                        Яндекс.Практикум
                    </a>
                    <a
                        href='https://github.com/'
                        rel='noreferrer'
                        target='_blank'
                        className='footer__nav-link'
                    >
                        Github
                    </a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;