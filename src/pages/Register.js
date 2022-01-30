import React, { useState } from 'react';
import './Register.css';
import { Link, useHistory  } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import axios from '../util/axios';

const initialForm = {
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
};

const Register = () => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);
    let history = useHistory();

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
                method: "POST",
                headers: {
                    "Content-type" : "application/json; charset=utf-8"
                },
                data: JSON.stringify({
                    name: form.name,
                    username: form.username,
                    password: form.password,
                    confirmPassword: form.confirmPassword,
                })
            };

            const res = await axios('/addUser', options);
            toast.success(res.data.message);
            history.push('/');
            setForm(initialForm);
        } catch (err) {
            setErrors(err.response.data.error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='register'>
            <div className='register__card'>
                <h2>Únete a Whatsapp Clone.</h2>
                <form className='register__form' autoComplete='off' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Nombres'
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                    />
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
                    <input
                        type="password"
                        placeholder='Confirma contraseña'
                        name='confirmPassword'
                        value={form.confirmPassword}
                        onChange={handleChange}
                    />
                    <button
                        disabled={!(form.name && form.username && form.password && form.confirmPassword) ? true : false}
                    >
                        Regístrate
                    </button>
                </form>
                <p>¿Ya tienes una cuenta? <Link to="/">Iniciar sesión</Link></p>
                {
                    loading && (
                        <div className='register__loading'>
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
}

export default Register;