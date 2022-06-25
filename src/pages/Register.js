import React, { useContext, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, TextField, Button } from '@mui/material';
import { style } from '../style';
import useRegister from '../hooks/useRegister';
import { ContextRegister } from '../context/register/Context';

const Register = () => {
    const { isLoading, error } = useContext(ContextRegister);
    const [form, handleChange, handleRegister] = useRegister();
    const isMountedRef = useRef(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleRegister();
    };

    useEffect(() => {
        // componente desmontado
        return () => {
            isMountedRef.current = false;
        }
    }, []);

    return (
        <Box component="div" sx={{ backgroundColor: style.color_gray, minHeight: '100vh' }}>
            <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "5vh" }}>
                <Box sx={{ width: "90%", maxWidth: "390px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Box
                        component="img"
                        src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1655847020/whatsapp-project/WhatsApp.svg_sogxoc.webp"
                        alt="logo"
                        sx={{ height: "5.6rem", width: "5.6rem" }}
                    />
                    <Box sx={{ backgroundColor: style.color_white, marginTop: ".4rem", padding: "1.5rem", borderRadius: "10px", width: "100%" }}>
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
                                label='Nombres'
                                name='name'
                                size="small"
                                value={form.name}
                                onChange={handleChange}
                                sx={{ marginBottom: "1rem" }}
                            />
                            <TextField
                                type="text"
                                label='Username'
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
                            <TextField
                                type="password"
                                label='Confirma contraseña'
                                name='confirmPassword'
                                size="small"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                sx={{ marginBottom: "1rem" }}
                            />
                            <Button
                                type='submit'
                                variant="contained"
                                disabled={(!(form.name && form.username && form.password && form.confirmPassword) ? true : false) || isLoading}
                            >
                                {
                                    isLoading ? 'Loading...' : 'Regístrate'
                                }
                            </Button>
                        </Box>
                    </Box>
                    <Typography
                        component="p"
                        variant='subtitle1'
                        sx={{ textAling: "center", marginTop: "1rem" }}
                    >
                        ¿Ya tienes una cuenta? <Link to="/">Iniciar sesión</Link>
                    </Typography>
                    {
                        error && <Box sx={{ width: "100%", marginTop: ".5rem" }}>
                            {
                                Object.values(error).map((value, index) => (
                                    <Typography
                                        component="p"
                                        variant='body2'
                                        key={index}
                                        sx={{ color: "#c62828" }}
                                    >
                                        {value}
                                    </Typography>
                                ))
                            }
                        </Box>
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default Register;