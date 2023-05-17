import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { registerMain, login } from '../../utils/MainApi';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { isName, isEmail } from '../../utils/constants';

const Register = ({ setIsLoggedIn }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
    } = useForm({ mode: 'onChange' });

    const [name, email, password] = watch(['name', 'email', 'password']);

    let navigate = useNavigate();

    function handleFormSubmit() {
        registerMain({ name, email, password })
            .then(() => {
                onLog({ email, password })
            })
            .catch((err) => {
                if (err.status === 400) {
                    console.log("400 - не передано одно из полей ");
                }

            });
    }

    function onLog() {
        if (!email || !password) {
            return;
        }

        login({ email, password })
            .then((res) => {
                if (res.token) {
                    localStorage.setItem("JWT_SECRET", res.token);
                    setIsLoggedIn(true);
                    navigate("/movies");
                }
            })
            .catch((err) => {
                if (err.status === 400) {
                    console.log("400 - не передано одно из полей");
                } else if (err.status === 401) {
                    console.log("401 - пользователь c email не найден ");
                }
            });
    }

    return (
        <main className="auth">

            <header className='auth__header'>
                <Logo />
                <h2 className='auth__welcome'>Добро пожаловать!</h2>
            </header>

            <form className="auth__form" >

                <h3 className="auth__hint">Имя</h3>
                <input
                    className="auth__input"
                    {...register('name', {
                        required: 'Это поле обязательно к заполнению.',
                        pattern: {
                            value: isName,
                            message:
                                'Имя может содержать русские и латинские буквы, дефис, пробел.',
                        },
                    })}
                    type="name"
                    placeholder="Введите имя пользователя"
                    title="Введите имя пользователя"
                />
                {errors.name && (<span className='auth__input-error '>{errors.name.message}</span>)}


                <h3 className="auth__hint">E-mail</h3>
                <input
                    className="auth__input"
                    type="email"
                    placeholder="Введите E-mail"
                    title="Введите адрес электронной почты"
                    {...register('email', {
                        required: 'Это поле обязательно к заполнению.',
                        pattern: {
                            value: isEmail,
                            message: 'E-mail введен не верно',
                        },
                    })}
                />
                {errors.email && (<span className='auth__input-error'>{errors.email.message}</span>)}

                <h3 className="auth__hint">Пароль</h3>
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Придумайте и введите пароль"
                    {...register('password', {
                        required: 'Это поле обязательно к заполнению.',
                        minLength: {
                            value: 4,
                            message: 'Пароль должен содержать минимум 4 символа',
                        },
                    })}
                    title="Придумайте и введите пароль"
                />
                {errors.password && (<span className='auth__input-error'> {errors.password.message}</span>)}

                <button
                    className={`${isValid ? 'auth__save-active' : 'auth__save-inactive'}`}
                    onClick={handleSubmit(handleFormSubmit)}>
                    Зарегистрироваться
                </button>


                <footer className="auth__footer" >
                    <p className="auth__question-link">Уже зарегистрированы?</p>
                    <Link to="/signin" className="auth__signup-link">Войти</Link>
                </footer>

            </form>
        </main>
    );
};

export default Register;