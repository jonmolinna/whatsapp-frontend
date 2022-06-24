import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Box, Typography, TextField, Button } from '@mui/material';
import Message from '../components/Alert/Message';

import { style } from '../style';
import axios from '../util/axios';
import { ContextAuth } from '../context/login/Context';
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../context/login/Types';

const initialForm = {
    username: "",
    password: "",
};

const Login = () => {
    const [form, setForm] = useState(initialForm);
    const { dispatch, isLoading, error } = useContext(ContextAuth);
    let history = useHistory();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch({
            type: LOGIN_START
        });

        try {
            let options = {
                method: 'POST',
                headers: {
                    "Content-type": "application/json; charset=utf-8",
                },
                data: JSON.stringify({
                    username: form.username,
                    password: form.password,
                })
            };

            const res = await axios('/login', options);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
            setForm(initialForm);
            history.push("/home");
        } catch (err) {
            dispatch({
                type: LOGIN_FAILURE,
            })
        }
    };

    return (
        <Box component="div" sx={{ backgroundColor: style.color_gray, minHeight: '100vh' }}>
            <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center", paddingTop: "10vh" }}>

                <Box
                    component="img"
                    src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1655847020/whatsapp-project/WhatsApp.svg_sogxoc.webp"
                    alt="logo"
                    sx={{ height: "5.6rem", width: "5.6rem" }}
                />
                {
                    error && (
                        <Box sx={{ marginY: ".5rem", borderRadius: "10px", width: "90%", maxWidth: "390px", display: "flex", flexDirection: "column" }}>
                            <Message
                                message="Credenciales no válidas"
                                severity="error"
                            />
                        </Box>
                    )
                }
                <Box
                    sx={{ backgroundColor: style.color_white, marginTop: ".4rem", padding: "1.5rem", borderRadius: "10px", width: "90%", maxWidth: "390px", display: "flex", flexDirection: "column" }}
                >
                    <Typography
                        component="h2"
                        variant='h5'
                        sx={{ textAlign: "center" }}
                    >
                        Whatsapp Clone
                    </Typography>
                    <Box
                        component="form"
                        autoComplete='off'
                        onSubmit={handleSubmit}
                        sx={{ display: "flex", flexDirection: "column", marginTop: "1rem" }}
                    >
                        <TextField
                            type="text"
                            label="Usuario"
                            name='username'
                            size="small"
                            value={form.username}
                            onChange={handleChange}
                            sx={{ marginBottom: "1rem" }}
                        />
                        <TextField
                            type="password"
                            label='Contraseña'
                            name='password'
                            size="small"
                            value={form.password}
                            onChange={handleChange}
                            sx={{ marginBottom: "1rem" }}
                        />
                        <Button
                            type='submit'
                            variant="contained"
                            disabled={(!(form.username && form.password) ? true : false) || isLoading}
                        >
                            {
                                isLoading ? 'Loading...' : 'Iniciar sesión'
                            }
                        </Button>
                    </Box>
                </Box>
                <Typography
                    component="p"
                    variant='subtitle1'
                    sx={{ textAling: "center", marginTop: "1rem" }}
                >
                    ¿No tienes una cuenta? <Link to='/register'>Regístrate</Link>
                </Typography>

            </Box>
        </Box>
    )
};

export default Login;