import { useCallback, useContext, useState } from 'react';
import axios from '../util/axios';
import { ContextMessages } from '../context/messages/Context';
import {
    GET_ALL_MESSAGES_BY_USER_START,
    GET_ALL_MESSAGES_BY_USER_SUCCESS,
    GET_ALL_MESSAGES_BY_USER_FAILURE
} from '../context/messages/Types';
import { ContextUsers } from '../context/users/Context';

const useMessages = () => {
    const [message, setMessage] = useState("");
    const { dispatch } = useContext(ContextMessages);
    const { userChat } = useContext(ContextUsers);
    const token = localStorage.getItem('whatsapp-token');

    const getMessagesByUser = useCallback(async () => {
        dispatch({
            type: GET_ALL_MESSAGES_BY_USER_START,
        });

        try {
            let options = {
                method: 'GET',
                headers: {
                    "Content-type": "application/json; charset=utf-8",
                    "authorization": token ? `Bearer ${token}` : null,
                }
            };

            const res = await axios(`/getMessages?to=${userChat?.username}`, options);
            dispatch({
                type: GET_ALL_MESSAGES_BY_USER_SUCCESS,
                payload: res.data.messages
            });
        } catch (err) {
            dispatch({
                type: GET_ALL_MESSAGES_BY_USER_FAILURE,
                payload: err.response.data
            })
        }
    }, [token, userChat?.username, dispatch]);

    const handleSendMessage = async () => {
        try {
            let options = {
                method: 'POST',
                headers: {
                    "Content-type": "application/json; charset=utf-8",
                    "authorization": token ? `Bearer ${token}` : null,
                },
                data: JSON.stringify({
                    to: userChat?.username,
                    content: message,
                })
            };
            const res = await axios('/sendMessage', options);
            console.log('YOOOOOO', res)
            setMessage('');
        } catch (err) {
            console.log(err.response)
        }
    };

    return [getMessagesByUser, message, setMessage, handleSendMessage];
}

export default useMessages;