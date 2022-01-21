import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';

import axios from '../util/axios';
import { useAuthDispatch } from '../context/auth';

const initialForm = {
    username: "",
    password: "",
};

const Login = () => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    let history = useHistory();
    const dispatch = useAuthDispatch();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let options = {
                method: 'POST',
                headers: {
                    "Content-type" : "application/json; charset=utf-8",
                },
                data: JSON.stringify({
                    username: form.username,
                    password: form.password,
                })
            };

            const res = await axios('/login', options);
            dispatch({
                type: 'LOGIN',
                payload: res.data
            });
            setForm(initialForm);
            history.push("/home");
        } catch (err) {
            setErrors(err.response.data.error)
        }
    };

    return (
        <div className='login'>
            <div className='login__card'>
                <h2>Inicia sesión en Whatsapp Clone</h2>
                <form className='login__form' autoComplete='off' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Username'
                        name='username'
                        value={form.username}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        placeholder='Contraseña'
                        name='password'
                        value={form.password}
                        onChange={handleChange}
                    />
                    <button type='submit'>Iniciar sesión</button>
                </form>
                <p>¿No tienes una cuenta? <Link to='/register'>Regístrate</Link></p>
                {
                    errors && <ul className='register__errors'>
                        {
                            Object.values(errors).map((value, index) => (
                                <li key={index}>{value}</li>
                            ))
                        }
                    </ul>
                }
            </div>
        </div>
    )
};

export default Login;