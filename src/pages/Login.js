import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, TextField, Button } from '@mui/material';
import Message from '../components/Alert/Message';
import { style } from '../style';
import { ContextAuth } from '../context/login/Context';
import useLogin from '../hooks/useLogin';

const Login = () => {
    const { isLoading, error } = useContext(ContextAuth);
    const [form, handleChange, handleLogin] = useLogin();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    };

    return (
        <Box component="div" sx={{ backgroundColor: style.color_gray, minHeight: '100vh' }}>
            <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "7vh" }}>
                <Box sx={{ width: "90%", maxWidth: "390px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    {
                        error && (
                            <Box sx={{ marginY: ".5rem", width: "100%" }}>
                                <Message
                                    message="Credenciales no válidas"
                                    severity="error"
                                />
                            </Box>
                        )
                    }
                    <Box
                        component="img"
                        src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1655847020/whatsapp-project/WhatsApp.svg_sogxoc.webp"
                        alt="logo"
                        sx={{ height: "5.6rem", width: "5.6rem" }}
                    />
                    <Box
                        sx={{ backgroundColor: style.color_white, marginTop: ".4rem", padding: "1.5rem", borderRadius: "10px", width: "100%" }}
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
        </Box>
    )
};

export default Login;