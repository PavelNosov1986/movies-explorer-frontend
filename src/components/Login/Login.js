import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { login } from '../../utils/MainApi';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { isEmail } from '../../utils/constants';


const Login = ({ setIsLoggedIn }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
    } = useForm({ mode: 'onChange' });

    const [email, password] = watch(['email', 'password']);

    let navigate = useNavigate();

    function handleFormSubmit() {
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
                <h2 className='auth__welcome'>Рады видеть!</h2>
            </header>

            <form className="auth__form" >
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
                    title="Придумайте и введите пароль"
                    {...register('password', {
                        required: 'Это поле обязательно к заполнению.',
                        minLength: {
                            value: 4,
                            message: 'Пароль должен содержать минимум 4 символа',
                        },
                    })}
                />
                {errors.password && (<span className='auth__input-error'>{errors.password.message}</span>)}

                <button onClick={handleSubmit(handleFormSubmit)} className={`${isValid ? 'auth__save-active auth__save_login'
                    : 'auth__save-inactive auth__save_login'}`}>
                    Войти
                </button>

                <footer className="auth__footer" >
                    <p className="auth__question-link">Ещё не зарегистрированы?</p>
                    <Link to="/signup" className="auth__signup-link">Регистрация</Link>
                </footer>

            </form>
        </main>
    );
};

export default Login;