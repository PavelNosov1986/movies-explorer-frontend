import React from 'react';
import './AboutMe.css'
import myPhoto from '../../images/my-photo.png';

const AboutMe = () => {
    return (
        <section id='aboutMe' className='tab-about-me'>
            <div className='tab__container-title_about-me'>
                <h2 className='tab__title_about-me'>Студент</h2>
            </div>

            <div className='about-me__info'>
                <h3 className='about-me__name'>Павел</h3>
                <p className='about-me__job'>Фронтенд-разработчик, 37лет</p>
                <p className='about-me__description'>
                    Я родился в с.Усть-Цильма. В  2008 году закончил университет в г.Ухта
                    по специальности:"Электроппривод и автоматика промышленных комплексов" и
                    получил квалификацию - инженер. Женат, трое детей. Недавно начал кодить.
                    Сейчас прохожу курсы в Яндекс-практикуме - Web-разработчик.
                </p>
                <a href='https://github.com/PavelNosov1986'
                    rel='noreferrer'
                    target='_blank'
                    className='about-me__link-repo'> Github</a>
                <img src={myPhoto} className='about-me__photo' alt='Мое фото' />
            </div>

        </section>
    );
};

export default AboutMe;