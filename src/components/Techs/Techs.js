import React from 'react';
import './Techs.css'

const Techs = () => {
    return (
        <section id='techs' name="О проекте" className='tab'>
            <div className='tab__container-title tab__container-title_techs'>
                <h2 className='tab__title tab__title_techs'>Технологии</h2>
            </div>
            <h3 className='techs__subtitle'>7 технологий</h3>
            <p className='techs__description'>
                На курсе веб-разработки мы освоили технологии, которые применили в
                дипломном проекте.
            </p>
            <nav className='techs__container-button-link'>
                <button className='techs__button-link'>HTML</button>
                <button className='techs__button-link'>CSS</button>
                <button className='techs__button-link'>JS</button>
                <button className='techs__button-link'>React</button>
                <button className='techs__button-link'>Git</button>
                <button className='techs__button-link'>Express.js</button>
                <button className='techs__button-link'>mongoDB</button>
            </nav>
        </section>
    );
};

export default Techs;