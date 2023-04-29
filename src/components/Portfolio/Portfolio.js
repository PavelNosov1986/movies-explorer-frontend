import React from 'react';
import './Portfolio.css'

const Portfolio = () => {
    return (
        <section className='portfolio'>
            <h3 className='portfolio__title'>Портфолио</h3>
            <ul className='portfolio__links'>
                <li className='portfolio__link-item'>
                    <a
                        href='https://github.com/PavelNosov1986/how-to-learn'
                        rel='noreferrer'
                        target='_blank'
                        className='portfolio__link'>
                        Статичный сайт
                    </a>
                </li>
                <li className='portfolio__link-item'>
                    <a href='https://github.com/PavelNosov1986/russian-travel'
                        rel='noreferrer'
                        target='_blank'
                        className='portfolio__link'>
                        Адаптивный сайт
                    </a>
                </li>
                <li className='portfolio__link-item'>
                    <a href='https://github.com/PavelNosov1986/react-mesto-api-full'
                        rel='noreferrer'
                        target='_blank'
                        className='portfolio__link'>
                        Одностраничное приложение
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Portfolio;