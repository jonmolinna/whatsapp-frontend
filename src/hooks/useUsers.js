import { useContext, useCallback } from 'react';
import axios from '../util/axios';
import { ContextUsers } from '../context/users/Context';
import {
    // GET_ALL_USERS_START,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAILURE
} from '../context/users/Types';

const useUsers = () => {
    const { dispatch } = useContext(ContextUsers);
    const token = localStorage.getItem('whatsapp-token');

    const getAllUsers = useCallback(async () => {
        // dispatch({
        //     type: GET_ALL_USERS_START,
        // });

        try {
            let options = {
                method: 'GET',
                headers: {
                    "Content-type": "application/json; charset=utf-8",
                    "authorization": token ? `Bearer ${token}` : null,
                }
            };
            const res = await axios('/getUsersLastMessage', options);
            dispatch({
                type: GET_ALL_USERS_SUCCESS,
                payload: res.data.users
            });
        } catch (err) {
            dispatch({
                type: GET_ALL_USERS_FAILURE,
                payload: err.response.data
            });
        }
    }, [dispatch, token]);

    return [getAllUsers];
}

export default useUsers;