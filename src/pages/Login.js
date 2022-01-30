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
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);
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
        setLoading(true)

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
        } finally {
            setLoading(false);
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
                    <button 
                        type='submit'
                        disabled={!(form.username && form.password) ? true : false}
                    >
                        Iniciar sesión
                    </button>
                </form>
                <p>¿No tienes una cuenta? <Link to='/register'>Regístrate</Link></p>
                {
                    loading && (
                        <div className='login__loading'>
                            <p>Cargando ...</p>
                        </div>
                    )
                }
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