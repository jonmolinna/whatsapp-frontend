import { useState, useContext } from 'react';
import axios from '../util/axios';
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../context/login/Types';
import { ContextAuth } from '../context/login/Context';

const initialForm = {
    username: "",
    password: "",
};

const useLogin = () => {
    const [form, setForm] = useState(initialForm);
    const { dispatch } = useContext(ContextAuth);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const handleLogin = async () => {
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
        } catch (err) {
            dispatch({
                type: LOGIN_FAILURE,
            })
        }
    }

    return [form, handleChange, handleLogin];

}

export default useLogin;