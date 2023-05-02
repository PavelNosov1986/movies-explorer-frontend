import React from 'react';
import './AboutProject.css'

const AboutProject = () => {
    return (
        <section id='aboutProject' name="О проекте" className='tab'>
            <div className='tab__container-title'>
                <h2 className='tab__title'>О проекте</h2>
            </div>
            <div className='about-project__container-description'>
                <p className='about-project__article1-1'>Дипломный проект включал 5 этапов</p>
                <p className='about-project__article1-2'>На выполнение диплома ушло 5 недель</p>
                <p className='about-project__article2-1'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
                    доработки.</p>
                <p className='about-project__article2-2'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно
                    защититься.</p>
                <div className='about-gap'></div>
            </div>
            <div className='about-project__times'>
                <p className='about-project__time-title'>1 неделя</p>
                <p className='about-project__time-title about-project__time-title_gray'>4 недели</p>
                <p className='about-project__time-subtitle'>Back-end</p>
                <p className='about-project__time-subtitle'>Front-end</p>
            </div>
        </section>
    );
};

export default AboutProject;