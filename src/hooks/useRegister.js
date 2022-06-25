import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../util/axios';
import { ContextRegister } from '../context/register/Context';
import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE } from '../context/register/Types';

const initialForm = {
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
};

const useRegister = () => {
    const [form, setForm] = useState(initialForm);
    const { dispatch } = useContext(ContextRegister);
    let history = useHistory();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const handleRegister = async () => {
        dispatch({
            type: REGISTER_START,
        });

        try {
            let options = {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=utf-8"
                },
                data: JSON.stringify({
                    name: form.name,
                    username: form.username,
                    password: form.password,
                    confirmPassword: form.confirmPassword,
                })
            };

            await axios('/addUser', options);
            dispatch({
                type: REGISTER_SUCCESS,
            });
            history.push('/');
            setForm(initialForm);
        } catch (err) {
            dispatch({
                type: REGISTER_FAILURE,
                payload: err.response.data.error
            });
        }
    };

    return [form, handleChange, handleRegister];
}

export default useRegister;